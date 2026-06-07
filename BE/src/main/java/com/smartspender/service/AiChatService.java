package com.smartspender.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.smartspender.config.GeminiAIService;
import com.smartspender.dto.AiChatRequest;
import com.smartspender.dto.AiChatResponse;
import com.smartspender.dto.ChatHistoryDTO;
import com.smartspender.dto.TransactionDTO;
import com.smartspender.dto.WalletDTO;
import com.smartspender.entity.ChatHistory;
import com.smartspender.entity.User;
import com.smartspender.repository.ChatHistoryRepository;
import com.smartspender.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AiChatService {

    private final GeminiAIService aiService;
    private final ObjectMapper objectMapper;
    private final TransactionService transactionService;
    private final WalletService walletService;
    private final ChatHistoryRepository chatHistoryRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<ChatHistoryDTO> getHistoryByUserId(Long userId) {
        return chatHistoryRepository.findByUserIdOrderByCreatedAtAsc(userId).stream()
                .map(history -> ChatHistoryDTO.builder()
                        .id(history.getId())
                        .userId(history.getUser().getId())
                        .role(history.getRole())
                        .text(history.getContent())
                        .imageUrl(history.getImageUrl())
                        .createdAt(history.getCreatedAt() != null ? history.getCreatedAt().toString() : null)
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional
    public AiChatResponse handleChat(AiChatRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + request.getUserId()));

        // Save User Message
        String userImageUrl = null;
        if (request.getImageBase64() != null && !request.getImageBase64().isEmpty()) {
            userImageUrl = "data:" + (request.getImageMimeType() != null ? request.getImageMimeType() : "image/jpeg") + ";base64," + request.getImageBase64();
        }

        ChatHistory userHistory = ChatHistory.builder()
                .user(user)
                .role("user")
                .content(request.getUserMessage() != null ? request.getUserMessage() : "")
                .imageUrl(userImageUrl)
                .build();
        chatHistoryRepository.save(userHistory);

        StringBuilder prompt = new StringBuilder();
        prompt.append("Bạn là chuyên gia tài chính cá nhân.\n");
        prompt.append("Thời gian hiện tại: ").append(request.getCurrentDateTime()).append("\n");
        
        prompt.append("Dữ liệu ngân sách hiện tại của người dùng:\n");
        if (request.getBudgets() != null && !request.getBudgets().isEmpty()) {
            for (AiChatRequest.BudgetContextItem b : request.getBudgets()) {
                prompt.append(String.format("- %s: Hạn mức %s, Đã tiêu %s (Từ %s đến %s)\n", 
                        b.getCategoryName(), b.getLimitAmount(), b.getSpentAmount(), b.getStartDate(), b.getEndDate()));
            }
        } else {
            prompt.append("- Không có dữ liệu ngân sách.\n");
        }

        prompt.append("\nDanh mục chi tiêu của người dùng:\n");
        if (request.getCategories() != null && !request.getCategories().isEmpty()) {
            for (AiChatRequest.CategoryContextItem c : request.getCategories()) {
                prompt.append(String.format("- ID: %s, Tên: %s\n", c.getId(), c.getName()));
            }
        } else {
            prompt.append("- Không có danh mục.\n");
        }

        prompt.append("\n");
        prompt.append("Tin nhắn của người dùng: \"").append(request.getUserMessage() != null ? request.getUserMessage() : "").append("\"\n\n");
        
        prompt.append("NHIỆM VỤ CỦA BẠN:\n");
        prompt.append("1. Nếu có hình ảnh đính kèm (là hóa đơn/biên lai), hãy đọc thông tin từ hóa đơn và phân tích: Tên cửa hàng (merchantName), số tiền (amount), ngày (detectedDate), và chọn categoryId phù hợp nhất từ danh sách danh mục ở trên.\n");
        prompt.append("2. Nếu không có hóa đơn, hãy trả lời câu hỏi của người dùng như một cuộc trò chuyện tư vấn tài chính.\n");
        prompt.append("3. BẮT BUỘC trả về ĐÚNG MỘT OBJECT JSON theo định dạng sau (không giải thích thêm):\n");
        prompt.append("{\n");
        prompt.append("  \"type\": \"RECEIPT_SCAN\",\n");
        prompt.append("  \"data\": {\n");
        prompt.append("    \"merchantName\": \"Tên cửa hàng\",\n");
        prompt.append("    \"amount\": 150000,\n");
        prompt.append("    \"categoryId\": 1,\n");
        prompt.append("    \"categoryName\": \"Tên danh mục\",\n");
        prompt.append("    \"detectedDate\": \"YYYY-MM-DD\"\n");
        prompt.append("  },\n");
        prompt.append("  \"aiReply\": \"Câu trả lời hoặc nhận xét của bạn dành cho người dùng.\"\n");
        prompt.append("}\n");
        prompt.append("Lưu ý: Nếu không có hóa đơn, hãy set \"type\": \"CHAT_REPLY\" và \"data\": null.\n");

        AiChatResponse parsedResponse = null;

        try {
            String jsonResult = aiService.callMultimodal(prompt.toString(), request.getImageBase64(), request.getImageMimeType(), true);
            log.info("AI Chat Response JSON: {}", jsonResult);
            
            String cleanJson = jsonResult.trim();
            if (cleanJson.startsWith("```json")) {
                cleanJson = cleanJson.substring(7);
            }
            if (cleanJson.startsWith("```")) {
                cleanJson = cleanJson.substring(3);
            }
            if (cleanJson.endsWith("```")) {
                cleanJson = cleanJson.substring(0, cleanJson.length() - 3);
            }
            cleanJson = cleanJson.trim();
            
            try {
                parsedResponse = objectMapper.readValue(cleanJson, AiChatResponse.class);
            } catch (Exception parseEx) {
                log.warn("Lỗi parse JSON, trả về fallback: {}", parseEx.getMessage());
                parsedResponse = new AiChatResponse();
                parsedResponse.setType("CHAT_REPLY");
                
                String fallbackReply = "Xin lỗi, tôi đã gặp chút vấn đề khi định dạng câu trả lời.";
                if (cleanJson.contains("\"aiReply\"")) {
                    try {
                        int startIndex = cleanJson.indexOf("\"aiReply\"");
                        int colonIndex = cleanJson.indexOf(":", startIndex);
                        int firstQuote = cleanJson.indexOf("\"", colonIndex);
                        int lastQuote = cleanJson.lastIndexOf("\"");
                        if (firstQuote != -1 && lastQuote != -1 && lastQuote > firstQuote) {
                            fallbackReply = cleanJson.substring(firstQuote + 1, lastQuote);
                            fallbackReply = fallbackReply.replace("\\n", "\n").replace("\\\"", "\"");
                        }
                    } catch (Exception ignored) {}
                }
                parsedResponse.setAiReply(fallbackReply);
            }

            // AUTO LOG TRANSACTION IF IT'S A RECEIPT SCAN
            if ("RECEIPT_SCAN".equals(parsedResponse.getType()) && parsedResponse.getData() != null) {
                AiChatResponse.ReceiptData data = parsedResponse.getData();
                try {
                    List<WalletDTO> wallets = walletService.getWalletsByUserId(request.getUserId());
                    if (wallets.isEmpty()) {
                        parsedResponse.setAiReply(parsedResponse.getAiReply() + "\n\n*(Lưu ý: AI đã đọc được hóa đơn nhưng chưa thể lưu giao dịch vì bạn chưa tạo ví nào)*");
                    } else {
                        WalletDTO primaryWallet = wallets.get(0);
                        
                        // Cố định lấy ngày hôm nay để hệ thống cập nhật vào Ngân sách tháng này
                        LocalDate date = LocalDate.now();
                        
                        TransactionDTO dto = TransactionDTO.builder()
                                .walletId(primaryWallet.getId())
                                .userId(request.getUserId())
                                .categoryId(data.getCategoryId())
                                .amount(BigDecimal.valueOf(data.getAmount()))
                                .type("expense")
                                .description("Hóa đơn (" + data.getDetectedDate() + "): " + (data.getMerchantName() != null ? data.getMerchantName() : "Tự động quét"))
                                .transactionDate(date)
                                .build();
                                
                        transactionService.createTransaction(dto);
                        
                        String successMsg = String.format("\n\n✅ **Đã tự động ghi nhận chi tiêu %,.0fđ tại %s!**", 
                                data.getAmount(), data.getMerchantName());
                        parsedResponse.setAiReply(parsedResponse.getAiReply() + successMsg);
                    }
                } catch (Exception e) {
                    log.error("Failed to auto-log transaction", e);
                    parsedResponse.setAiReply(parsedResponse.getAiReply() + "\n\n*(Lưu ý: Lỗi khi lưu giao dịch: " + e.getMessage() + ")*");
                }
            }

        } catch (Exception e) {
            log.error("Lỗi khi xử lý chat AI: ", e);
            parsedResponse = new AiChatResponse();
            parsedResponse.setType("CHAT_REPLY");
            parsedResponse.setAiReply("Xin lỗi, hệ thống AI đang gặp sự cố. Vui lòng thử lại sau.");
        }

        // Save AI Message
        ChatHistory aiHistory = ChatHistory.builder()
                .user(user)
                .role("ai")
                .content(parsedResponse.getAiReply() != null ? parsedResponse.getAiReply() : "")
                .build();
        chatHistoryRepository.save(aiHistory);

        return parsedResponse;
    }
}
