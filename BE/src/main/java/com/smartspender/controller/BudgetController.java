package com.smartspender.controller;

import com.smartspender.dto.BudgetDTO;
import com.smartspender.dto.BudgetDetailResponse;
import com.smartspender.dto.ApplyAiBudgetRequest;
import com.smartspender.service.BudgetService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;
import com.smartspender.dto.AiSuggestResponse;

@RestController
@RequestMapping("/budgets")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}, allowedHeaders = "*", allowCredentials = "true")
public class BudgetController {

    private final BudgetService budgetService;

    /**
     * API lấy chi tiết ngân sách kèm chi tiêu thực tế
     * Endpoint: GET /budgets?userId=1
     * Optional param: date=2026-05-15 (nếu không có, mặc định là hôm nay)
     */
    @GetMapping
    public ResponseEntity<List<BudgetDetailResponse>> getBudgetDetails(
            @RequestParam Long userId,
            @RequestParam(required = false) LocalDate date) {
        log.info("GET /budgets?userId={}&date={} - Fetching budget details", userId, date);
        
        if (date == null) {
            date = LocalDate.now();
        }
        
        List<BudgetDetailResponse> budgets = budgetService.getBudgetDetailsByUserId(userId, date);
        return ResponseEntity.ok(budgets);
    }

    @PostMapping
    public ResponseEntity<BudgetDTO> createBudget(@Valid @RequestBody BudgetDTO budgetDTO) {
        log.info("POST /budgets - Creating new budget");
        BudgetDTO createdBudget = budgetService.createBudget(budgetDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBudget);
    }

    @PostMapping("/ai-suggest")
    public ResponseEntity<AiSuggestResponse> aiSuggestBudgets(@RequestBody com.smartspender.dto.AiSuggestRequest request) {
        log.info("POST /budgets/ai-suggest - AI suggest request: {}", request);
        try {
            List<com.smartspender.dto.AiBudgetSuggestion> suggestions = budgetService.aiSuggestBudgets(
                    request.getUserId(),
                    request.getLocation(),
                    request.getMonthlyIncome(),
                    request.getTargetSavings()
            );

            AiSuggestResponse resp = AiSuggestResponse.builder()
                    .suggestions(suggestions)
                    .isUsingFallback(false)
                    .message(null)
                    .build();

            return ResponseEntity.ok(resp);
        } catch (IllegalArgumentException ex) {
            log.warn("Invalid AI suggest request: {}", ex.getMessage());
            AiSuggestResponse resp = AiSuggestResponse.builder()
                    .suggestions(List.of())
                    .isUsingFallback(false)
                    .message(ex.getMessage())
                    .build();
            return ResponseEntity.badRequest().body(resp);
        } catch (IllegalStateException ex) {
            log.error("AI suggest failed: {}", ex.getMessage(), ex);
            AiSuggestResponse resp = AiSuggestResponse.builder()
                    .suggestions(List.of())
                    .isUsingFallback(true)
                    .message("AI service currently unavailable")
                    .build();
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(resp);
        } catch (Exception ex) {
            log.error("Unexpected error in AI suggest: {}", ex.getMessage(), ex);
            AiSuggestResponse resp = AiSuggestResponse.builder()
                    .suggestions(List.of())
                    .isUsingFallback(true)
                    .message("Unexpected error")
                    .build();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
        }
    }

    @PostMapping("/apply-ai")
    public ResponseEntity<List<BudgetDetailResponse>> applyAiBudgets(@Valid @RequestBody ApplyAiBudgetRequest request) {
        log.info("POST /budgets/apply-ai - Apply AI request: userId={}, month={}, startDate={}, endDate={}, suggestions={}",
                request.getUserId(), request.getMonth(), request.getStartDate(), request.getEndDate(),
                request.getSuggestions() != null ? request.getSuggestions().size() : 0);

        List<BudgetDetailResponse> response = budgetService.applyAiBudgets(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BudgetDTO> getBudgetById(@PathVariable Long id) {
        log.info("GET /budgets/{} - Fetching budget", id);
        BudgetDTO budget = budgetService.getBudgetById(id);
        return ResponseEntity.ok(budget);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<BudgetDTO>> getBudgetsByUserId(@PathVariable Long userId) {
        log.info("GET /budgets/user/{} - Fetching budgets for user", userId);
        List<BudgetDTO> budgets = budgetService.getBudgetsByUserId(userId);
        return ResponseEntity.ok(budgets);
    }

    @GetMapping("/user/{userId}/period/{period}")
    public ResponseEntity<List<BudgetDTO>> getBudgetsByUserIdAndPeriod(
            @PathVariable Long userId,
            @PathVariable String period) {
        log.info("GET /budgets/user/{}/period/{} - Fetching budgets for user with period", userId, period);
        List<BudgetDTO> budgets = budgetService.getBudgetsByUserIdAndPeriod(userId, period);
        return ResponseEntity.ok(budgets);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BudgetDTO> updateBudget(@PathVariable Long id, @Valid @RequestBody BudgetDTO budgetDTO) {
        log.info("PUT /budgets/{} - Updating budget", id);
        BudgetDTO updatedBudget = budgetService.updateBudget(id, budgetDTO);
        return ResponseEntity.ok(updatedBudget);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Long id) {
        log.info("DELETE /budgets/{} - Deleting budget", id);
        budgetService.deleteBudget(id);
        return ResponseEntity.noContent().build();
    }
}
