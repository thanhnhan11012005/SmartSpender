package com.smartspender.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardDTO {
    private BigDecimal totalBalance;
    private BigDecimal monthlyIncome;
    private Double incomeChangePercentage;
    private BigDecimal monthlyExpense;
    private Double expenseChangePercentage;
    private BigDecimal remainingBudget;

    private List<CashFlowData> cashFlow;
    private List<ExpenseCategoryData> expenseByCategory;
    private List<TransactionDTO> recentTransactions;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CashFlowData {
        private String month;
        private BigDecimal income;
        private BigDecimal expense;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class ExpenseCategoryData {
        private String categoryName;
        private String color;
        private BigDecimal amount;
        private Double percentage;
    }
}
