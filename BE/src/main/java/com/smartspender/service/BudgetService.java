package com.smartspender.service;

import com.smartspender.dto.*;
import com.smartspender.entity.Budget;
import com.smartspender.entity.Category;
import com.smartspender.entity.User;
import com.smartspender.enums.TransactionType;
import com.smartspender.repository.BudgetRepository;
import com.smartspender.repository.CategoryRepository;
import com.smartspender.repository.TransactionRepository;
import com.smartspender.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class BudgetService {

    private final BudgetRepository budgetRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final TransactionRepository transactionRepository;

    /**
     * Lấy chi tiết ngân sách kèm chi tiêu thực tế
     */
    public List<BudgetDetailResponse> getBudgetDetailsByUserId(Long userId, LocalDate date) {
        log.info("Getting budget details for user {} on date {}", userId, date);
        
        // Lấy budgets có khoảng thời gian bao phủ ngày này
        List<Budget> budgets = budgetRepository.findBudgetsForDate(userId, date);
        
        return budgets.stream().map(budget -> {
            // Tính tổng chi tiêu (EXPENSE) của danh mục này trong khoảng thời gian budget
            BigDecimal spentAmount = transactionRepository
                    .findByUserIdAndDateRange(userId, budget.getStartDate(), budget.getEndDate())
                    .stream()
                    .filter(t -> t.getType() == TransactionType.EXPENSE)
                    .filter(t -> budget.getCategory() == null || 
                               (t.getCategory() != null && t.getCategory().getId().equals(budget.getCategory().getId())))
                    .map(t -> t.getAmount())
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
            
            return BudgetDetailResponse.builder()
                    .id(budget.getId())
                    .categoryId(budget.getCategory() != null ? budget.getCategory().getId() : null)
                    .categoryName(budget.getCategory() != null ? budget.getCategory().getName() : "All Categories")
                    .limitAmount(budget.getAmount())
                    .spentAmount(spentAmount)
                    .startDate(budget.getStartDate())
                    .endDate(budget.getEndDate())
                    .build();
        }).collect(Collectors.toList());
    }

    /**
     * Tạo budget mới
     */
    public BudgetDTO createBudget(BudgetDTO budgetDTO) {
        log.info("Creating new budget for user {}", budgetDTO.getUserId());
        
        User user = userRepository.findById(budgetDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        Category category = null;
        if (budgetDTO.getCategoryId() != null) {
            category = categoryRepository.findById(budgetDTO.getCategoryId())
                    .orElseThrow(() -> new RuntimeException("Category not found"));
        }
        
        Budget budget = Budget.builder()
                .user(user)
                .category(category)
                .amount(budgetDTO.getAmount())
                .period(budgetDTO.getPeriod() != null ? budgetDTO.getPeriod() : "monthly")
                .startDate(LocalDate.now())
                .endDate(LocalDate.now().plusMonths(1))
                .isAlertEnabled(budgetDTO.getIsAlertEnabled() != null ? budgetDTO.getIsAlertEnabled() : false)
                .build();
        
        Budget savedBudget = budgetRepository.save(budget);
        return mapToDTO(savedBudget);
    }

    /**
     * Lấy budget by id
     */
    @Transactional(readOnly = true)
    public BudgetDTO getBudgetById(Long id) {
        log.info("Getting budget by id {}", id);
        Budget budget = budgetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Budget not found"));
        return mapToDTO(budget);
    }

    /**
     * Lấy tất cả budgets của user
     */
    @Transactional(readOnly = true)
    public List<BudgetDTO> getBudgetsByUserId(Long userId) {
        log.info("Getting all budgets for user {}", userId);
        List<Budget> budgets = budgetRepository.findByUserId(userId);
        return budgets.stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    /**
     * Lấy budgets theo period
     */
    @Transactional(readOnly = true)
    public List<BudgetDTO> getBudgetsByUserIdAndPeriod(Long userId, String period) {
        log.info("Getting budgets for user {} with period {}", userId, period);
        List<Budget> budgets = budgetRepository.findByUserIdAndPeriod(userId, period);
        return budgets.stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    /**
     * Cập nhật budget
     */
    public BudgetDTO updateBudget(Long id, BudgetDTO budgetDTO) {
        log.info("Updating budget {}", id);
        Budget budget = budgetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Budget not found"));
        
        if (budgetDTO.getAmount() != null) {
            budget.setAmount(budgetDTO.getAmount());
        }
        if (budgetDTO.getPeriod() != null) {
            budget.setPeriod(budgetDTO.getPeriod());
        }
        if (budgetDTO.getIsAlertEnabled() != null) {
            budget.setIsAlertEnabled(budgetDTO.getIsAlertEnabled());
        }
        
        Budget updatedBudget = budgetRepository.save(budget);
        return mapToDTO(updatedBudget);
    }

    /**
     * Xóa budget
     */
    public void deleteBudget(Long id) {
        log.info("Deleting budget {}", id);
        budgetRepository.deleteById(id);
    }

    /**
     * AI Suggest budgets dựa trên monthly income và target savings
     */
    @Transactional(readOnly = true)
    public List<AiBudgetSuggestion> aiSuggestBudgets(Long userId, String location, BigDecimal monthlyIncome, BigDecimal targetSavings) {
        log.info("AI suggesting budgets for user {} - location: {}, income: {}, savings: {}", userId, location, monthlyIncome, targetSavings);
        
        // Validate input
        if (monthlyIncome.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Monthly income must be positive");
        }
        if (targetSavings.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Target savings cannot be negative");
        }
        if (targetSavings.compareTo(monthlyIncome) > 0) {
            throw new IllegalArgumentException("Target savings cannot exceed monthly income");
        }
        
        // Verify user exists
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Get user's categories + default categories (combine user-specific and global defaults)
        List<Category> categories = categoryRepository.findByUserIdOrUserIdIsNull(userId);
        
        // Calculate available amount for expenses
        BigDecimal availableForExpenses = monthlyIncome.subtract(targetSavings);
        
        String resolvedLocation = (location == null || location.isBlank()) ? "Hồ Chí Minh" : location.trim();
        String prompt = String.format(
            "Bạn là một chuyên gia quản lý tài chính cá nhân tại Việt Nam. Người dùng hiện đang sinh sống tại thành phố/tỉnh: %s. Họ có tổng thu nhập tháng này là %s VND và muốn tiết kiệm %s VND.\n"
                + "Nhiệm vụ của bạn:\n"
                + "- Dựa trên mức sống thực tế (chi phí tiền nhà, ăn uống, đi lại) tại %s, hãy đánh giá xem mức chi tiêu còn lại và số tiền tiết kiệm người dùng đặt ra đã hợp lý chưa.\n"
                + "- Tiến hành phân bổ số tiền chi tiêu còn lại vào 4 danh mục: 1. Ăn uống, 2. Di chuyển, 3. Giải trí, 4. Tiền nhà.\n"
                + "- LƯU Ý: Tỷ lệ phân bổ phải thích ứng theo địa phương. Ví dụ ở các thành phố lớn như Sài Gòn/Hà Nội thì tỷ lệ 'Tiền nhà' và 'Ăn uống' phải cao hơn, còn ở các tỉnh lẻ như Quy Nhơn thì chi phí này thấp hơn, cho phép phân bổ đều sang các mục khác hoặc gợi ý họ tăng tiền tiết kiệm nếu số tiền còn dư nhiều.\n"
                + "- Hãy trả về JSON hợp lệ gồm danh sách gợi ý cho các danh mục hiện có, mỗi gợi ý có categoryName, suggestedAmount và rationale.\n"
                + "- Tổng suggestedAmount phải khớp với số tiền chi tiêu còn lại là %s VND.\n",
            resolvedLocation,
            monthlyIncome.toPlainString(),
            targetSavings.toPlainString(),
            resolvedLocation,
            availableForExpenses.toPlainString()
        );
        log.info("Prepared Gemini prompt for location {}", resolvedLocation);

        List<AiBudgetSuggestion> suggestions = new ArrayList<>();
        List<String> preferredNames = List.of("Ăn uống", "Di chuyển", "Giải trí", "Tiền nhà");
        BigDecimal[] weights;
        String lowerLocation = resolvedLocation.toLowerCase();
        if (lowerLocation.contains("hà nội") || lowerLocation.contains("hồ chí minh") || lowerLocation.contains("sài gòn")) {
            weights = new BigDecimal[] { new BigDecimal("0.32"), new BigDecimal("0.16"), new BigDecimal("0.12"), new BigDecimal("0.40") };
        } else {
            weights = new BigDecimal[] { new BigDecimal("0.28"), new BigDecimal("0.18"), new BigDecimal("0.16"), new BigDecimal("0.38") };
        }

        for (int i = 0; i < preferredNames.size(); i++) {
            String preferredName = preferredNames.get(i);
            Category matchedCategory = categories.stream()
                .filter(category -> preferredName.equalsIgnoreCase(category.getName()))
                .findFirst()
                .orElse(null);

            BigDecimal suggestedAmount = availableForExpenses.multiply(weights[i]).setScale(0, java.math.RoundingMode.HALF_UP);
            suggestions.add(AiBudgetSuggestion.builder()
                .categoryId(matchedCategory != null ? matchedCategory.getId() : null)
                .categoryName(preferredName)
                .suggestedAmount(suggestedAmount)
                .rationale("Phân bổ theo mức sống tại " + resolvedLocation)
                .build());
        }

        return suggestions;
    }

    /**
     * Apply AI budget suggestions
     */
    public List<BudgetDetailResponse> applyAiBudgets(ApplyAiBudgetRequest request) {
        log.info("Applying AI budgets for user {} - month: {}", request.getUserId(), request.getMonth());
        
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Determine startDate/endDate: if not provided, derive from month string (YYYY-MM)
        LocalDate startDate = request.getStartDate();
        LocalDate endDate = request.getEndDate();

        if (startDate == null || endDate == null) {
            try {
                if (request.getMonth() != null && !request.getMonth().isBlank()) {
                    YearMonth ym = YearMonth.parse(request.getMonth());
                    startDate = ym.atDay(1);
                    endDate = ym.atEndOfMonth();
                } else {
                    // fallback to current month
                    YearMonth ym = YearMonth.from(LocalDate.now());
                    startDate = ym.atDay(1);
                    endDate = ym.atEndOfMonth();
                }
            } catch (Exception ex) {
                log.warn("Failed to parse month '{}', falling back to current month", request.getMonth());
                YearMonth ym = YearMonth.from(LocalDate.now());
                startDate = ym.atDay(1);
                endDate = ym.atEndOfMonth();
            }
        }

        // Delete existing budgets for this period
        budgetRepository.deleteByUserIdAndStartDateAndEndDate(
                request.getUserId(), 
                startDate, 
                endDate
        );

        // Create new budgets from suggestions
        if (request.getSuggestions() != null) {
            for (AiBudgetSuggestion suggestion : request.getSuggestions()) {
                Category category = null;
                if (suggestion.getCategoryId() != null) {
                    category = categoryRepository.findById(suggestion.getCategoryId()).orElse(null);
                }

                Budget budget = Budget.builder()
                        .user(user)
                        .category(category)
                        .amount(suggestion.getSuggestedAmount())
                        .period("monthly")
                        .startDate(startDate)
                        .endDate(endDate)
                        .isAlertEnabled(true)
                        .build();

                budgetRepository.save(budget);
            }
        }

        // Return updated budget details
        return getBudgetDetailsByUserId(request.getUserId(), startDate);
    }

    /**
     * Helper: map Budget entity to DTO
     */
    private BudgetDTO mapToDTO(Budget budget) {
        return BudgetDTO.builder()
                .id(budget.getId())
                .userId(budget.getUser().getId())
                .categoryId(budget.getCategory() != null ? budget.getCategory().getId() : null)
                .amount(budget.getAmount())
                .period(budget.getPeriod())
                .isAlertEnabled(budget.getIsAlertEnabled())
                .build();
    }
}
