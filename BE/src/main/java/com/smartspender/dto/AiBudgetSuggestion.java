package com.smartspender.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AiBudgetSuggestion {
    
    private Long categoryId;
    
    private String categoryName;
    
    private BigDecimal suggestedAmount;
    
    private String rationale;  // Lý do AI gợi ý số tiền này
}
