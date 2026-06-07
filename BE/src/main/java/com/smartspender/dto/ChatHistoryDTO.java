package com.smartspender.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatHistoryDTO {
    private Long id;
    private Long userId;
    private String role; // 'user' or 'ai'
    private String text; // Mapped from content
    private String imageUrl;
    private String createdAt;
}
