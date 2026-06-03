package com.smartspender.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ApplyAiBudgetRequest {
    
    @NotNull(message = "User ID is required")
    private Long userId;
    
    // Month in format "YYYY-MM" (frontend sends this string)
    @NotNull(message = "Month is required")
    private String month;

    // Optional: if not provided, service will compute startDate/endDate from `month`
    private LocalDate startDate;

    private LocalDate endDate;
    
    @NotNull(message = "Suggestions list is required")
    @Valid
    private List<AiBudgetSuggestion> suggestions;
}
