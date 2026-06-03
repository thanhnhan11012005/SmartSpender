package com.smartspender.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BudgetDTO {
    private Long id;

    @NotNull(message = "User ID is required")
    private Long userId;

    private Long categoryId; // null nếu áp dụng cho tất cả danh mục

    @NotNull(message = "Amount is required")
    @Positive(message = "Amount must be positive")
    private BigDecimal amount;

    @Size(max = 32, message = "Period must not exceed 32 characters")
    private String period; // 'daily', 'weekly', 'monthly', 'quarterly', 'yearly'

    private Boolean isAlertEnabled; // Bật/tắt SMS/Email cảnh báo
}
