package com.smartspender.service;

import com.smartspender.dto.CategoryDTO;
import com.smartspender.dto.TransactionDTO;
import com.smartspender.entity.Category;
import com.smartspender.entity.Transaction;
import com.smartspender.entity.User;
import com.smartspender.entity.Wallet;
import com.smartspender.enums.TransactionType;
import com.smartspender.repository.CategoryRepository;
import com.smartspender.repository.TransactionRepository;
import com.smartspender.repository.UserRepository;
import com.smartspender.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;
    private final WalletRepository walletRepository;
    private final CategoryRepository categoryRepository;

    public TransactionDTO createTransaction(TransactionDTO transactionDTO) {
        log.info("Creating transaction for wallet: {}", transactionDTO.getWalletId());
        
        Wallet wallet = walletRepository.findById(transactionDTO.getWalletId())
                .orElseThrow(() -> {
                    log.error("Wallet not found with id: {}", transactionDTO.getWalletId());
                    return new IllegalArgumentException("Wallet not found: " + transactionDTO.getWalletId());
                });

        User user = userRepository.findById(transactionDTO.getUserId())
                .orElseThrow(() -> {
                    log.error("User not found with id: {}", transactionDTO.getUserId());
                    return new IllegalArgumentException("User not found: " + transactionDTO.getUserId());
                });

        Category category = null;
        if (transactionDTO.getCategoryId() != null) {
            category = categoryRepository.findById(transactionDTO.getCategoryId())
                    .orElseThrow(() -> {
                        log.error("Category not found with id: {}", transactionDTO.getCategoryId());
                        return new IllegalArgumentException("Category not found: " + transactionDTO.getCategoryId());
                    });
        }

        TransactionType type = TransactionType.fromValue(transactionDTO.getType());

        Transaction transaction = Transaction.builder()
                .wallet(wallet)
                .user(user)
                .category(category)
                .amount(transactionDTO.getAmount())
                .type(type)
                .description(transactionDTO.getDescription())
                .location(transactionDTO.getLocation())
                .imageUrl(transactionDTO.getImageUrl())
                .transactionDate(transactionDTO.getTransactionDate() != null ? transactionDTO.getTransactionDate() : LocalDate.now())
                .build();

        // Tự động cập nhật balance ví dựa vào loại giao dịch
        if (type == TransactionType.EXPENSE) {
            // Trừ tiền khỏi ví
            wallet.setBalance(wallet.getBalance().subtract(transactionDTO.getAmount()));
            log.info("Deducting {} from wallet {} (EXPENSE)", transactionDTO.getAmount(), wallet.getId());
        } else if (type == TransactionType.INCOME) {
            // Cộng tiền vào ví
            wallet.setBalance(wallet.getBalance().add(transactionDTO.getAmount()));
            log.info("Adding {} to wallet {} (INCOME)", transactionDTO.getAmount(), wallet.getId());
        }
        // type == TRANSFER không tự động cập nhật balance ở đây (do transferMoney() xử lý riêng)

        Transaction savedTransaction = transactionRepository.save(transaction);
        walletRepository.save(wallet); // Lưu cập nhật balance
        log.info("Transaction created successfully with id: {}", savedTransaction.getId());
        
        return convertToDTO(savedTransaction);
    }

    public TransactionDTO getTransactionById(Long transactionId) {
        log.info("Fetching transaction with id: {}", transactionId);
        return transactionRepository.findById(transactionId)
                .map(this::convertToDTO)
                .orElseThrow(() -> {
                    log.error("Transaction not found with id: {}", transactionId);
                    return new IllegalArgumentException("Transaction not found: " + transactionId);
                });
    }

    public List<TransactionDTO> getTransactionsByUserId(Long userId) {
        log.info("Fetching transactions for user: {}", userId);
        
        if (!userRepository.existsById(userId)) {
            log.error("User not found with id: {}", userId);
            throw new IllegalArgumentException("User not found: " + userId);
        }

        // Use repository method that orders by transactionDate DESC, then createdAt DESC
        return transactionRepository.findByUserIdOrderByTransactionDateDescCreatedAtDesc(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<TransactionDTO> getTransactionsByWalletId(Long walletId) {
        log.info("Fetching transactions for wallet: {}", walletId);
        
        if (!walletRepository.existsById(walletId)) {
            log.error("Wallet not found with id: {}", walletId);
            throw new IllegalArgumentException("Wallet not found: " + walletId);
        }

        return transactionRepository.findByWalletId(walletId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<TransactionDTO> getTransactionsByUserIdAndType(Long userId, String type) {
        log.info("Fetching transactions for user: {} with type: {}", userId, type);
        
        if (!userRepository.existsById(userId)) {
            log.error("User not found with id: {}", userId);
            throw new IllegalArgumentException("User not found: " + userId);
        }

        TransactionType transactionType = TransactionType.fromValue(type);
        return transactionRepository.findByUserIdAndType(userId, transactionType).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<TransactionDTO> getTransactionsByUserIdAndDateRange(Long userId, LocalDate startDate, LocalDate endDate) {
        log.info("Fetching transactions for user: {} between {} and {}", userId, startDate, endDate);
        
        if (!userRepository.existsById(userId)) {
            log.error("User not found with id: {}", userId);
            throw new IllegalArgumentException("User not found: " + userId);
        }

        return transactionRepository.findByUserIdAndDateRange(userId, startDate, endDate).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<TransactionDTO> getTransactionsByWalletIdAndDateRange(Long walletId, LocalDate startDate, LocalDate endDate) {
        log.info("Fetching transactions for wallet: {} between {} and {}", walletId, startDate, endDate);
        
        if (!walletRepository.existsById(walletId)) {
            log.error("Wallet not found with id: {}", walletId);
            throw new IllegalArgumentException("Wallet not found: " + walletId);
        }

        return transactionRepository.findByWalletIdAndDateRange(walletId, startDate, endDate).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public TransactionDTO updateTransaction(Long transactionId, TransactionDTO transactionDTO) {
        log.info("Updating transaction with id: {}", transactionId);
        
        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() -> {
                    log.error("Transaction not found with id: {}", transactionId);
                    return new IllegalArgumentException("Transaction not found: " + transactionId);
                });

        Wallet wallet = transaction.getWallet();
        TransactionType oldType = transaction.getType();
        BigDecimal oldAmount = transaction.getAmount();
        BigDecimal newAmount = transactionDTO.getAmount();

        // Hoàn lại số tiền cũ trước tiên
        if (oldType == TransactionType.EXPENSE) {
            wallet.setBalance(wallet.getBalance().add(oldAmount));
            log.info("Reverting old EXPENSE amount {} from wallet {}", oldAmount, wallet.getId());
        } else if (oldType == TransactionType.INCOME) {
            wallet.setBalance(wallet.getBalance().subtract(oldAmount));
            log.info("Reverting old INCOME amount {} from wallet {}", oldAmount, wallet.getId());
        }

        // Cập nhật toàn bộ thông tin giao dịch
        if (transactionDTO.getDescription() != null) {
            transaction.setDescription(transactionDTO.getDescription());
        }
        if (transactionDTO.getLocation() != null) {
            transaction.setLocation(transactionDTO.getLocation());
        }
        if (transactionDTO.getImageUrl() != null) {
            transaction.setImageUrl(transactionDTO.getImageUrl());
        }
        if (transactionDTO.getTransactionDate() != null) {
            transaction.setTransactionDate(transactionDTO.getTransactionDate());
        }

        // Kiểm tra xem type có đổi không
        TransactionType newType = TransactionType.fromValue(transactionDTO.getType());
        transaction.setType(newType);
        transaction.setAmount(newAmount);

        // Áp dụng số tiền mới vào balance
        if (newType == TransactionType.EXPENSE) {
            wallet.setBalance(wallet.getBalance().subtract(newAmount));
            log.info("Deducting new amount {} from wallet {} (EXPENSE)", newAmount, wallet.getId());
        } else if (newType == TransactionType.INCOME) {
            wallet.setBalance(wallet.getBalance().add(newAmount));
            log.info("Adding new amount {} to wallet {} (INCOME)", newAmount, wallet.getId());
        }

        // Nếu categoryId thay đổi, cập nhật category
        if (transactionDTO.getCategoryId() != null) {
            Category category = categoryRepository.findById(transactionDTO.getCategoryId())
                    .orElseThrow(() -> new IllegalArgumentException("Category not found: " + transactionDTO.getCategoryId()));
            transaction.setCategory(category);
        }

        Transaction updatedTransaction = transactionRepository.save(transaction);
        walletRepository.save(wallet);
        log.info("Transaction updated successfully with id: {}", transactionId);
        
        return convertToDTO(updatedTransaction);
    }

    public void deleteTransaction(Long transactionId) {
        log.info("Deleting transaction with id: {}", transactionId);
        
        Transaction transaction = transactionRepository.findById(transactionId)
                .orElseThrow(() -> {
                    log.error("Transaction not found with id: {}", transactionId);
                    return new IllegalArgumentException("Transaction not found: " + transactionId);
                });

        Wallet wallet = transaction.getWallet();
        TransactionType type = transaction.getType();
        BigDecimal amount = transaction.getAmount();

        // Hoàn lại số tiền vào ví trước khi xóa
        if (type == TransactionType.EXPENSE) {
            wallet.setBalance(wallet.getBalance().add(amount));
            log.info("Restoring EXPENSE amount {} to wallet {}", amount, wallet.getId());
        } else if (type == TransactionType.INCOME) {
            wallet.setBalance(wallet.getBalance().subtract(amount));
            log.info("Restoring INCOME amount {} from wallet {}", amount, wallet.getId());
        }

        walletRepository.save(wallet);
        transactionRepository.deleteById(transactionId);
        log.info("Transaction deleted successfully with id: {}", transactionId);
    }

    public List<TransactionDTO> getTransactionsByUserIdWithFilters(
            Long userId, 
            String search, 
            String type, 
            LocalDate startDate, 
            LocalDate endDate) {
        
        log.info("Fetching transactions for user: {} with filters - search: {}, type: {}, date range: {} to {}", 
                 userId, search, type, startDate, endDate);
        
        if (!userRepository.existsById(userId)) {
            log.error("User not found with id: {}", userId);
            throw new IllegalArgumentException("User not found: " + userId);
        }

        TransactionType transactionType = (type != null && !type.isEmpty()) 
                ? TransactionType.fromValue(type) 
                : null;

        String searchTerm = (search != null && !search.isEmpty()) ? search : "";

        return transactionRepository.searchTransactions(
                userId, 
                searchTerm, 
                transactionType, 
                startDate != null ? startDate : LocalDate.of(1970, 1, 1),
                endDate != null ? endDate : LocalDate.now()
        ).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private TransactionDTO convertToDTO(Transaction transaction) {
        CategoryDTO categoryDTO = null;
        if (transaction.getCategory() != null) {
            categoryDTO = CategoryDTO.builder()
                    .id(transaction.getCategory().getId())
                    .userId(transaction.getCategory().getUser() != null ? transaction.getCategory().getUser().getId() : null)
                    .name(transaction.getCategory().getName())
                    .icon(transaction.getCategory().getIcon())
                    .color(transaction.getCategory().getColor())
                    .build();
        }
        
        return TransactionDTO.builder()
                .id(transaction.getId())
                .walletId(transaction.getWallet().getId())
                .userId(transaction.getUser().getId())
                .categoryId(transaction.getCategory() != null ? transaction.getCategory().getId() : null)
                .category(categoryDTO)
                .amount(transaction.getAmount())
                .type(transaction.getType().getValue())
                .description(transaction.getDescription())
                .location(transaction.getLocation())
                .imageUrl(transaction.getImageUrl())
                .transactionDate(transaction.getTransactionDate())
                .createdAt(transaction.getCreatedAt() != null ? transaction.getCreatedAt().toString() : null)
                .build();
    }
}
