package com.smartspender.controller;

import com.smartspender.dto.TransactionDTO;
import com.smartspender.service.TransactionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/transactions")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}, allowedHeaders = "*", allowCredentials = "true")
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping
    public ResponseEntity<TransactionDTO> createTransaction(@Valid @RequestBody TransactionDTO transactionDTO) {
        log.info("POST /transactions - Creating new transaction");
        TransactionDTO createdTransaction = transactionService.createTransaction(transactionDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTransaction);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TransactionDTO> getTransactionById(@PathVariable Long id) {
        log.info("GET /transactions/{} - Fetching transaction", id);
        TransactionDTO transaction = transactionService.getTransactionById(id);
        return ResponseEntity.ok(transaction);
    }

    // Endpoint sử dụng query parameter: GET /transactions?userId=...
    @GetMapping
    public ResponseEntity<List<TransactionDTO>> getTransactionsByUserIdQuery(@RequestParam Long userId) {
        log.info("GET /transactions?userId={} - Fetching transactions for user", userId);
        List<TransactionDTO> transactions = transactionService.getTransactionsByUserId(userId);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/search")
    public ResponseEntity<List<TransactionDTO>> searchTransactions(
            @RequestParam Long userId,
            @RequestParam(required = false, defaultValue = "") String search,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate) {
        
        log.info("GET /transactions/search - userId: {}, search: {}, type: {}, startDate: {}, endDate: {}", 
                 userId, search, type, startDate, endDate);
        
        LocalDate start = (startDate != null && !startDate.isEmpty()) 
                ? LocalDate.parse(startDate) 
                : LocalDate.of(1970, 1, 1);
        LocalDate end = (endDate != null && !endDate.isEmpty()) 
                ? LocalDate.parse(endDate) 
                : LocalDate.now();

        List<TransactionDTO> transactions = transactionService.getTransactionsByUserIdWithFilters(userId, search, type, start, end);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TransactionDTO>> getTransactionsByUserId(@PathVariable Long userId) {
        log.info("GET /transactions/user/{} - Fetching transactions for user", userId);
        List<TransactionDTO> transactions = transactionService.getTransactionsByUserId(userId);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/wallet/{walletId}")
    public ResponseEntity<List<TransactionDTO>> getTransactionsByWalletId(@PathVariable Long walletId) {
        log.info("GET /transactions/wallet/{} - Fetching transactions for wallet", walletId);
        List<TransactionDTO> transactions = transactionService.getTransactionsByWalletId(walletId);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/user/{userId}/type/{type}")
    public ResponseEntity<List<TransactionDTO>> getTransactionsByUserIdAndType(
            @PathVariable Long userId,
            @PathVariable String type) {
        log.info("GET /transactions/user/{}/type/{} - Fetching transactions by type", userId, type);
        List<TransactionDTO> transactions = transactionService.getTransactionsByUserIdAndType(userId, type);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/user/{userId}/range")
    public ResponseEntity<List<TransactionDTO>> getTransactionsByUserIdAndDateRange(
            @PathVariable Long userId,
            @RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate) {
        log.info("GET /transactions/user/{}/range - Fetching transactions for date range", userId);
        List<TransactionDTO> transactions = transactionService.getTransactionsByUserIdAndDateRange(userId, startDate, endDate);
        return ResponseEntity.ok(transactions);
    }

    @GetMapping("/wallet/{walletId}/range")
    public ResponseEntity<List<TransactionDTO>> getTransactionsByWalletIdAndDateRange(
            @PathVariable Long walletId,
            @RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate) {
        log.info("GET /transactions/wallet/{}/range - Fetching transactions for date range", walletId);
        List<TransactionDTO> transactions = transactionService.getTransactionsByWalletIdAndDateRange(walletId, startDate, endDate);
        return ResponseEntity.ok(transactions);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TransactionDTO> updateTransaction(@PathVariable Long id, @Valid @RequestBody TransactionDTO transactionDTO) {
        log.info("PUT /transactions/{} - Updating transaction", id);
        TransactionDTO updatedTransaction = transactionService.updateTransaction(id, transactionDTO);
        return ResponseEntity.ok(updatedTransaction);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        log.info("DELETE /transactions/{} - Deleting transaction", id);
        transactionService.deleteTransaction(id);
        return ResponseEntity.noContent().build();
    }
}
