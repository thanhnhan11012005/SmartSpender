package com.smartspender.dto;

import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BudgetDetailResponse {
    private Long id;
    private Long categoryId;
    private String categoryName;
    private BigDecimal limitAmount;         // Hạn mức ngân sách
    private BigDecimal spentAmount;         // Số tiền đã chi tiêu thực tế
    private LocalDate startDate;
    private LocalDate endDate;
}
