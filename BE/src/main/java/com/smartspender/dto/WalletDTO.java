package com.smartspender.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
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
public class WalletDTO {
    private Long id;

    @NotNull(message = "User ID is required")
    private Long userId;

    @NotBlank(message = "Wallet name is required")
    @Size(max = 50, message = "Wallet name must not exceed 50 characters")
    private String name;

    @Size(max = 10, message = "Type must not exceed 10 characters")
    private String type; // 'cash', 'bank', 'credit', 'ewallet'

    @NotNull(message = "Balance is required")
    @PositiveOrZero(message = "Balance must be zero or positive")
    private BigDecimal balance;

    private String accountNumber;
    private String description;
    private String color;

    @Size(max = 10, message = "Currency must not exceed 10 characters")
    private String currency; // VND, USD, etc.

    private String createdAt;
}
