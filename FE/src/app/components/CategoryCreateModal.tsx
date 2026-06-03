import { useEffect, useState } from "react";

interface CategoryCreatedResponse {
  id: number;
  userId: number | null;
  name: string;
  icon: string | null;
  color: string | null;
}

interface CategoryCreateModalProps {
  isOpen: boolean;
  userId: number | null;
  onClose: () => void;
  onCreated: (category: CategoryCreatedResponse) => Promise<void> | void;
}

const quickEmojis = ["🍔", "🚗", "🛍️", "🍿", "🏠", "💡", "📚", "🎯"];

export default function CategoryCreateModal({ isOpen, userId, onClose, onCreated }: CategoryCreateModalProps) {
  const [name, setName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(quickEmojis[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setName("");
    setSelectedEmoji(quickEmojis[0]);
    setErrorMessage(null);
    setIsSubmitting(false);
  }, [isOpen]);

  const readErrorMessage = async (response: Response) => {
    try {
      const data = (await response.json()) as { message?: string };
      return data.message || `HTTP ${response.status}`;
    } catch {
      return `HTTP ${response.status}`;
    }
  };

  const handleCancel = () => {
    setName("");
    setSelectedEmoji(quickEmojis[0]);
    setErrorMessage(null);
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userId) {
      setErrorMessage("Vui lòng đăng nhập để tạo danh mục.");
      return;
    }

    const trimmedName = name.trim();
    if (!trimmedName) {
      setErrorMessage("Vui lòng nhập tên danh mục.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          name: trimmedName,
          icon: selectedEmoji,
          color: "#8b5cf6",
        }),
      });

      if (!response.ok) {
        throw new Error(await readErrorMessage(response));
      }

      const createdCategory = (await response.json()) as CategoryCreatedResponse;
      await onCreated(createdCategory);
      onClose();
    } catch (error) {
      console.error("Error creating category:", error);
      setErrorMessage(error instanceof Error ? error.message : "Không thể tạo danh mục mới.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-[440px] rounded-[18px] bg-white shadow-2xl ring-1 ring-black/5">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <h3 className="text-[18px] font-semibold text-black">Thêm danh mục</h3>
            <p className="mt-1 text-[13px] text-black/55">Tạo danh mục riêng để dùng ngay trong ngân sách.</p>
          </div>
          <button type="button" onClick={handleCancel} className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 px-5 py-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700">Tên danh mục</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-[12px] border border-gray-200 bg-gray-50/60 px-4 py-3 text-[14px] text-black outline-none transition-colors focus:border-purple-300 focus:bg-white focus:ring-2 focus:ring-purple-100"
              placeholder="Ví dụ: Ăn uống, Di chuyển..."
              autoFocus
            />
          </label>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Chọn emoji</span>
              <span className="text-xs text-black/45">Nhấn để chọn nhanh</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {quickEmojis.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`flex h-12 items-center justify-center rounded-[12px] border text-[20px] transition-all ${
                    selectedEmoji === emoji
                      ? "border-purple-300 bg-purple-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-purple-200 hover:bg-purple-50/50"
                  }`}
                  aria-pressed={selectedEmoji === emoji}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {errorMessage && (
            <div className="rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
              {errorMessage}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 rounded-[12px] border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-[12px] bg-[#8b5cf6] px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#7c3aed] disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isSubmitting ? "Đang lưu..." : "Lưu danh mục"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}