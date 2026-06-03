package com.smartspender.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransactionDTO {
    private Long id;

    @NotNull(message = "Wallet ID is required")
    private Long walletId;

    @NotNull(message = "User ID is required")
    private Long userId;

    private Long categoryId; // Có thể null cho chuyển tiền
    
    private CategoryDTO category; // Đối tượng category đầy đủ với name, icon, color

    @NotNull(message = "Amount is required")
    @Positive(message = "Amount must be positive")
    private BigDecimal amount;

    @NotNull(message = "Transaction type is required")
    @Size(min = 1, max = 16, message = "Type must be valid")
    private String type; // 'expense', 'income', 'transfer'

    @Size(max = 255, message = "Description must not exceed 255 characters")
    private String description;

    @Size(max = 255, message = "Location must not exceed 255 characters")
    private String location; // Địa điểm chi tiêu

    private String imageUrl; // URL ảnh hóa đơn

    @NotNull(message = "Transaction date is required")
    private LocalDate transactionDate;

    private String createdAt;
}
