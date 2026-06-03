package com.smartspender.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AiSuggestRequest {
    
    @NotNull(message = "User ID is required")
    private Long userId;

    private String location;
    
    @NotNull(message = "Monthly income is required")
    @Positive(message = "Monthly income must be positive")
    private BigDecimal monthlyIncome;
    
    @NotNull(message = "Target savings is required")
    @Positive(message = "Target savings must be positive")
    private BigDecimal targetSavings;
}
