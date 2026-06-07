package com.smartspender.service;

import com.smartspender.dto.BudgetDetailResponse;
import com.smartspender.dto.DashboardDTO;
import com.smartspender.dto.TransactionDTO;
import com.smartspender.entity.Transaction;
import com.smartspender.entity.Wallet;
import com.smartspender.enums.TransactionType;
import com.smartspender.repository.TransactionRepository;
import com.smartspender.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class DashboardService {

    private final WalletRepository walletRepository;
    private final TransactionRepository transactionRepository;
    private final BudgetService budgetService;

    @Transactional(readOnly = true)
    public DashboardDTO getDashboardData(Long userId) {
        log.info("Getting dashboard data for user: {}", userId);
        
        LocalDate now = LocalDate.now();
        YearMonth currentMonth = YearMonth.from(now);
        YearMonth previousMonth = currentMonth.minusMonths(1);

        // 1. Total Balance
        List<Wallet> wallets = walletRepository.findByUser_Id(userId);
        BigDecimal totalBalance = wallets.stream()
                .map(Wallet::getBalance)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // 2 & 4. Monthly Income and Expense (Current Month)
        LocalDate startOfCurrentMonth = currentMonth.atDay(1);
        LocalDate endOfCurrentMonth = currentMonth.atEndOfMonth();
        List<Transaction> currentMonthTransactions = transactionRepository.findByUserIdAndDateRange(userId, startOfCurrentMonth, endOfCurrentMonth);

        BigDecimal currentIncome = currentMonthTransactions.stream()
                .filter(t -> t.getType() == TransactionType.INCOME)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal currentExpense = currentMonthTransactions.stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        // 3 & 5. Previous Month Data for Percentages
        LocalDate startOfPrevMonth = previousMonth.atDay(1);
        LocalDate endOfPrevMonth = previousMonth.atEndOfMonth();
        List<Transaction> prevMonthTransactions = transactionRepository.findByUserIdAndDateRange(userId, startOfPrevMonth, endOfPrevMonth);

        BigDecimal prevIncome = prevMonthTransactions.stream()
                .filter(t -> t.getType() == TransactionType.INCOME)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal prevExpense = prevMonthTransactions.stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        Double incomeChange = calculatePercentageChange(currentIncome, prevIncome);
        Double expenseChange = calculatePercentageChange(currentExpense, prevExpense);

        // 6. Remaining Budget for Current Month
        List<BudgetDetailResponse> budgetDetails = budgetService.getBudgetDetailsByUserId(userId, now);
        BigDecimal totalBudgetLimit = budgetDetails.stream()
                .map(BudgetDetailResponse::getLimitAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal totalBudgetSpent = budgetDetails.stream()
                .map(BudgetDetailResponse::getSpentAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        BigDecimal remainingBudget = totalBudgetLimit.subtract(totalBudgetSpent);
        if (remainingBudget.compareTo(BigDecimal.ZERO) < 0) remainingBudget = BigDecimal.ZERO;

        // 7. Cash Flow (Last 6 Months)
        List<DashboardDTO.CashFlowData> cashFlowList = new ArrayList<>();
        DateTimeFormatter monthFormatter = DateTimeFormatter.ofPattern("M/yyyy");
        for (int i = 5; i >= 0; i--) {
            YearMonth ym = currentMonth.minusMonths(i);
            LocalDate start = ym.atDay(1);
            LocalDate end = ym.atEndOfMonth();
            List<Transaction> monthTx = transactionRepository.findByUserIdAndDateRange(userId, start, end);
            
            BigDecimal mIncome = monthTx.stream()
                    .filter(t -> t.getType() == TransactionType.INCOME)
                    .map(Transaction::getAmount)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            BigDecimal mExpense = monthTx.stream()
                    .filter(t -> t.getType() == TransactionType.EXPENSE)
                    .map(Transaction::getAmount)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            cashFlowList.add(DashboardDTO.CashFlowData.builder()
                    .month("Thg " + ym.getMonthValue())
                    .income(mIncome)
                    .expense(mExpense)
                    .build());
        }

        // 8. Expense By Category (Current Month)
        Map<String, BigDecimal> expenseMap = new HashMap<>();
        Map<String, String> colorMap = new HashMap<>();
        
        for (Transaction t : currentMonthTransactions) {
            if (t.getType() == TransactionType.EXPENSE && t.getCategory() != null) {
                String catName = t.getCategory().getName();
                expenseMap.put(catName, expenseMap.getOrDefault(catName, BigDecimal.ZERO).add(t.getAmount()));
                colorMap.put(catName, t.getCategory().getColor() != null ? t.getCategory().getColor() : "#cbd5e1");
            }
        }

        List<DashboardDTO.ExpenseCategoryData> expenseByCategory = new ArrayList<>();
        if (currentExpense.compareTo(BigDecimal.ZERO) > 0) {
            for (Map.Entry<String, BigDecimal> entry : expenseMap.entrySet()) {
                Double pct = entry.getValue().multiply(BigDecimal.valueOf(100))
                        .divide(currentExpense, 1, RoundingMode.HALF_UP).doubleValue();
                expenseByCategory.add(DashboardDTO.ExpenseCategoryData.builder()
                        .categoryName(entry.getKey())
                        .color(colorMap.get(entry.getKey()))
                        .amount(entry.getValue())
                        .percentage(pct)
                        .build());
            }
            // Sort by amount descending
            expenseByCategory.sort((a, b) -> b.getAmount().compareTo(a.getAmount()));
        }

        // 9. Recent Transactions
        List<Transaction> recentTx = transactionRepository.findByUserIdOrderByTransactionDateDescCreatedAtDesc(userId);
        List<TransactionDTO> recentTxDto = recentTx.stream()
                .limit(5)
                .map(t -> TransactionDTO.builder()
                        .id(t.getId())
                        .walletId(t.getWallet() != null ? t.getWallet().getId() : null)
                        .userId(t.getUser() != null ? t.getUser().getId() : null)
                        .categoryId(t.getCategory() != null ? t.getCategory().getId() : null)
                        .category(t.getCategory() != null ? com.smartspender.dto.CategoryDTO.builder()
                                .id(t.getCategory().getId())
                                .name(t.getCategory().getName())
                                .icon(t.getCategory().getIcon())
                                .color(t.getCategory().getColor())
                                .build() : null)
                        .amount(t.getAmount())
                        .type(t.getType().name().toLowerCase())
                        .description(t.getDescription())
                        .location(t.getLocation())
                        .imageUrl(t.getImageUrl())
                        .transactionDate(t.getTransactionDate())
                        .build())
                .collect(Collectors.toList());

        return DashboardDTO.builder()
                .totalBalance(totalBalance)
                .monthlyIncome(currentIncome)
                .incomeChangePercentage(incomeChange)
                .monthlyExpense(currentExpense)
                .expenseChangePercentage(expenseChange)
                .remainingBudget(remainingBudget)
                .cashFlow(cashFlowList)
                .expenseByCategory(expenseByCategory)
                .recentTransactions(recentTxDto)
                .build();
    }

    private Double calculatePercentageChange(BigDecimal current, BigDecimal previous) {
        if (previous.compareTo(BigDecimal.ZERO) == 0) {
            return current.compareTo(BigDecimal.ZERO) > 0 ? 100.0 : 0.0;
        }
        BigDecimal change = current.subtract(previous);
        return change.multiply(BigDecimal.valueOf(100)).divide(previous, 1, RoundingMode.HALF_UP).doubleValue();
    }
}
