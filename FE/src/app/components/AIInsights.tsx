import { useMemo, useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatVND } from "../../utils/currency";

type InsightTone = "warning" | "tip" | "success";

// 1. Thêm imageUrl vào type Message để lưu trữ ảnh đính kèm
type Message = {
  id: number;
  role: "ai" | "user";
  text: string;
  imageUrl?: string; 
};

type BudgetContextItem = {
  id: number;
  categoryId: number | null;
  categoryName: string;
  limitAmount: number;
  spentAmount: number;
  startDate: string;
  endDate: string;
};

type CategoryContextItem = {
  id: number;
  userId?: number | null;
  name: string;
  icon?: string | null;
  color?: string | null;
};

type AiAssistantResponse = {
  type: "RECEIPT_SCAN" | "CHAT_REPLY";
  data: {
    merchantName: string;
    amount: number;
    categoryId: number;
    categoryName: string;
    detectedDate: string;
  } | null;
  aiReply: string;
};
// insight cards and quick prompts will be derived from real budgets/categories
const initialInsightCards: Array<{ id: number; title: string; description: string; tone: InsightTone }> = [];
const initialQuickPrompts: string[] = [];

const toneStyle: Record<InsightTone, { border: string; glow: string; icon: string }> = {
  warning: {
    border: "from-orange-300 to-amber-500",
    glow: "shadow-[0_12px_30px_rgba(245,158,11,0.18)]",
    icon: "⚠",
  },
  tip: {
    border: "from-violet-300 to-fuchsia-500",
    glow: "shadow-[0_12px_30px_rgba(168,85,247,0.18)]",
    icon: "✨",
  },
  success: {
    border: "from-emerald-300 to-green-500",
    glow: "shadow-[0_12px_30px_rgba(34,197,94,0.18)]",
    icon: "✔",
  },
};

export default function AIInsights() {
  const [draft, setDraft] = useState("");
  // 2. Thêm state để lưu trữ ảnh đang được chọn (xem trước)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageBase64, setSelectedImageBase64] = useState<string | null>(null);
  const [selectedImageMimeType, setSelectedImageMimeType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    // placeholder while we compute welcome on mount
  ]);

  const nextId = useMemo(() => (messages.length ? Math.max(...messages.map((m) => m.id)) + 1 : 1), [messages]);

  // Cuộn xuống cuối tin nhắn mỗi khi có tin nhắn mới hoặc AI đang load
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // 3. Hàm xử lý khi người dùng chọn file ảnh
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Tạo URL tạm thời để hiển thị ảnh trên UI
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedImageMimeType(file.type || "image/jpeg");

      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === "string" ? reader.result : "";
        const base64 = result.includes(",") ? result.split(",")[1] : result;
        setSelectedImageBase64(base64 || null);
      };
      reader.readAsDataURL(file);
    }
    // Reset input để có thể chọn lại cùng 1 file nếu cần
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // 4. Cập nhật hàm sendMessage để hỗ trợ gửi ảnh
  async function fetchContext() {
    const raw = localStorage.getItem("user");
    if (!raw) {
      throw new Error("Vui lòng đăng nhập để dùng trợ lý AI.");
    }

    let userId: number | null = null;
    try {
      const parsed = JSON.parse(raw) as { id?: number };
      userId = parsed?.id ?? null;
    } catch {
      userId = null;
    }

    if (!userId) {
      throw new Error("Không tìm thấy userId hợp lệ.");
    }

    const [budgetResp, categoryResp] = await Promise.all([
      fetch(`/api/budgets?userId=${userId}`),
      fetch(`/api/categories/user/${userId}/all`),
    ]);

    if (!budgetResp.ok || !categoryResp.ok) {
      throw new Error("Không thể tải ngữ cảnh ngân sách/danh mục.");
    }

    const budgets = (await budgetResp.json()) as BudgetContextItem[];
    const categories = (await categoryResp.json()) as CategoryContextItem[];

    return { userId, budgets, categories };
  }

  const sendMessage = async (rawText: string, imgUrl: string | null = null) => {
    const text = rawText.trim();
    if (!text && !imgUrl) return;

    const userMessage: Message = {
      id: nextId,
      role: "user",
      text,
      imageUrl: imgUrl || undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setIsLoading(true);

    try {
      const { userId, budgets, categories } = await fetchContext();

      const payload = {
        userId,
        userMessage: text,
        imageBase64: imgUrl ? selectedImageBase64 : null,
        imageMimeType: imgUrl ? selectedImageMimeType : null,
        currentDateTime: new Date().toISOString(),
        budgets,
        categories,
      };

      const response = await fetch(`/api/ai/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const aiResult = (await response.json()) as AiAssistantResponse;
      // IMPORTANT: render backend-provided text 100% as-is. Do NOT append or modify.
      const aiMessage: Message = {
        id: nextId + 1,
        role: "ai",
        text: aiResult.aiReply || "",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const fallback: Message = {
        id: nextId + 1,
        role: "ai",
        text: "Tôi chưa thể xử lý yêu cầu lúc này. Bạn thử lại trong giây lát nhé.",
      };
      setMessages((prev) => [...prev, fallback]);
      console.error(error);
    } finally {
      setIsLoading(false);
      setSelectedImage(null);
      setSelectedImageBase64(null);
      setSelectedImageMimeType(null);
    }
  };

  // --- New: compute welcome message and derive insight cards/quick prompts from real data ---
  const [insightCards, setInsightCards] = useState(initialInsightCards);
  const [quickPromptsState, setQuickPromptsState] = useState(initialQuickPrompts);

  useEffect(() => {
    let mounted = true;

    async function loadContextAndWelcome() {
      try {
        const raw = localStorage.getItem("user");
        if (!raw) return;
        const parsed = JSON.parse(raw) as { id?: number };
        const userId = parsed?.id;
        if (!userId) return;

        const [budgetResp, categoryResp, historyResp] = await Promise.all([
          fetch(`/api/budgets?userId=${userId}`),
          fetch(`/api/categories/user/${userId}/all`),
          fetch(`/api/ai/chat/history?userId=${userId}`)
        ]);
        if (!budgetResp.ok || !categoryResp.ok) return;

        const budgets = (await budgetResp.json()) as BudgetContextItem[];
        const categories = (await categoryResp.json()) as CategoryContextItem[];
        let history = [];
        if (historyResp.ok) {
            history = await historyResp.json();
        }

        // Compute total spent from budgets' spentAmount
        const totalSpent = budgets.reduce((s, b) => s + (b.spentAmount || 0), 0);
        const totalLimit = budgets.reduce((s, b) => s + (b.limitAmount || 0), 0);
        const totalRemaining = totalLimit - totalSpent;

        if (mounted) {
          if (history && history.length > 0) {
              setMessages(history);
          } else {
              // set welcome bubble
              const welcomeText = `Xin chào! Hôm nay bạn đã chi ${formatVND(totalSpent)} và còn lại ${formatVND(totalRemaining)} trong các ngân sách hiện tại. Bạn muốn tôi phân tích mục nào trước hoặc có hóa đơn nào cần tôi quét không?`;
              setMessages([
                {
                  id: 1,
                  role: "ai",
                  text: welcomeText,
                },
              ]);
          }

          // derive simple insight cards
          const cards: Array<{ id: number; title: string; description: string; tone: InsightTone }> = [];
          // 1. Overspent warning
          const over = budgets.find(b => (b.limitAmount || 0) > 0 && ((b.spentAmount || 0) / (b.limitAmount || 1)) >= 0.9);
          if (over) {
            cards.push({
              id: 1,
              title: `Cảnh báo: ${over.categoryName}`,
              description: `Bạn đã dùng ${Math.round(((over.spentAmount||0)/(over.limitAmount||1))*100)}% hạn mức ${over.categoryName}. Cần xem lại chi tiêu để tránh vượt ngân sách.`,
              tone: "warning",
            });
          }

          // 2. Tip: if many categories exist, give local tip
          if (categories && categories.length > 2) {
            cards.push({
              id: cards.length + 1,
              title: "Lời khuyên tiết kiệm",
              description: "Thử lập thực đơn nấu tại nhà 2-3 lần/tuần để giảm chi tiêu ăn ngoài.",
              tone: "tip",
            });
          }

          // 3. Success: if remaining positive
          if (totalRemaining > 0) {
            cards.push({
              id: cards.length + 1,
              title: "Tiến bộ tiết kiệm",
              description: `Bạn còn ${formatVND(totalRemaining)} trong ngân sách - tiếp tục giữ vững nhé!`,
              tone: "success",
            });
          }

          setInsightCards(cards.length ? cards : [
            { id: 1, title: "Không có thông báo", description: "Không phát hiện vấn đề đặc biệt trong ngân sách của bạn.", tone: "success" }
          ]);

          // quick prompts derived
          setQuickPromptsState([
            "Phân tích chi tiêu tháng này",
            "Dự báo số dư cuối tháng",
            "Gợi ý cắt giảm chi phí",
          ]);
        }
      } catch (err) {
        console.warn("Failed to compute welcome or insights", err);
      }
    }

    void loadContextAndWelcome();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[20px] p-6 shadow-sm">
        <h1 className="text-[30px] leading-[36px] font-bold text-black flex items-center gap-2">
          <span className="text-[26px]">✨</span>
          Trợ lý AI của bạn
        </h1>
        <p className="mt-2 text-[14px] text-[rgba(0,0,0,0.58)]">
          Dựa trên dữ liệu thu chi, đây là những phân tích dành riêng cho bạn hôm nay.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {insightCards.map((card) => (
          <div key={card.id} className={`rounded-[18px] p-[1px] bg-gradient-to-br ${toneStyle[card.tone].border} ${toneStyle[card.tone].glow}`}>
            <div className="h-full rounded-[17px] bg-white/95 backdrop-blur p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="size-8 rounded-full bg-black/5 flex items-center justify-center text-[14px]">{toneStyle[card.tone].icon}</div>
                <h3 className="text-[15px] font-semibold text-black">{card.title}</h3>
              </div>
              <p className="text-[14px] leading-6 text-[rgba(0,0,0,0.72)]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[20px] p-5 shadow-sm border border-[rgba(0,0,0,0.04)] flex flex-col">
        {/* Khu vực hiển thị tin nhắn */}
        <div className="rounded-[16px] border border-[rgba(0,0,0,0.06)] bg-[linear-gradient(180deg,#fafafe_0%,#f8fafc_100%)] p-4 h-[340px] overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-[14px] leading-6 shadow-sm ${
                  message.role === "user"
                    ? "bg-[#8b5cf6] text-white rounded-br-md"
                    : "bg-white border border-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.78)] rounded-bl-md"
                }`}
              >
                {/* 5. Hiển thị ảnh trong khung chat nếu có */}
                {message.imageUrl && (
                  <img 
                    src={message.imageUrl} 
                    alt="Uploaded attachment" 
                    className="w-48 h-auto rounded-lg mb-2 object-cover border border-white/20"
                  />
                )}
                {message.text && (
                  <div className="prose max-w-none whitespace-pre-wrap break-words text-[14px] leading-6">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.text}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 shadow-sm bg-white border border-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.78)] rounded-bl-md flex items-center gap-1.5 h-[44px]">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-1">
            {quickPromptsState.map((prompt) => (
              <button
                key={prompt}
                type="button"
                disabled={isLoading}
                onClick={() => void sendMessage(prompt)}
                className="px-3 py-2 rounded-full text-[13px] bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] text-[rgba(0,0,0,0.72)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* 6. Khu vực Preview ảnh sắp gửi */}
        {selectedImage && (
          <div className="mt-3 relative inline-block w-fit">
            <img src={selectedImage} alt="Preview" className="h-20 w-auto rounded-lg border border-gray-200 object-cover" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full size-5 flex items-center justify-center text-xs hover:bg-red-600 shadow-md"
            >
              ✕
            </button>
          </div>
        )}

        <div className="mt-3 flex items-center gap-2">
          {/* 7. Input File ẩn và Nút đính kèm ảnh */}
          <input 
            type="file" 
            accept="image/*" 
            ref={fileInputRef} 
            onChange={handleImageChange} 
            className="hidden" 
            disabled={isLoading}
          />
          <button
            type="button"
            disabled={isLoading}
            onClick={() => fileInputRef.current?.click()}
            className="h-12 w-12 shrink-0 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Tải ảnh hóa đơn lên"
          >
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>

          <input
            value={draft}
            disabled={isLoading}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isLoading) {
                void sendMessage(draft, selectedImage);
              }
            }}
            placeholder={selectedImage ? "Thêm ghi chú cho hóa đơn này..." : "Hỏi AI hoặc đính kèm hóa đơn..."}
            className="w-full h-12 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white px-4 text-[14px] placeholder:text-[rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/25 focus:border-[#8b5cf6] disabled:bg-gray-50 disabled:text-gray-400"
          />
          <button
            type="button"
            onClick={() => void sendMessage(draft, selectedImage)}
            disabled={isLoading || (!draft.trim() && !selectedImage)}
            className="h-12 w-12 shrink-0 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] disabled:opacity-50 disabled:cursor-not-allowed text-white flex items-center justify-center shadow-md transition-colors"
            aria-label="Gửi tin nhắn"
          >
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11.5L21 3l-7.5 18-2.5-7L3 11.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
