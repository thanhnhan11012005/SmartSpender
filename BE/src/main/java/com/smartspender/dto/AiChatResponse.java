package com.smartspender.dto;

import lombok.Data;

@Data
public class AiChatResponse {
    private String type; // "RECEIPT_SCAN" or "CHAT_REPLY"
    private ReceiptData data;
    private String aiReply;

    @Data
    public static class ReceiptData {
        private String merchantName;
        private Double amount;
        private Long categoryId;
        private String categoryName;
        private String detectedDate;
    }
}
