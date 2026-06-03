package com.smartspender.repository;

import com.smartspender.entity.Transaction;
import com.smartspender.enums.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(Long userId);
    List<Transaction> findByUserIdOrderByTransactionDateDesc(Long userId);
    List<Transaction> findByWalletId(Long walletId);
    List<Transaction> findByUserIdAndType(Long userId, TransactionType type);
    
    // Dynamic search: User + Description/Location + Type + Date Range
    @Query("SELECT t FROM Transaction t WHERE t.user.id = :userId " +
            "AND (LOWER(t.description) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(COALESCE(t.location, '')) LIKE LOWER(CONCAT('%', :search, '%'))) " +
            "AND (:type IS NULL OR t.type = :type) " +
            "AND t.transactionDate BETWEEN :startDate AND :endDate " +
            "ORDER BY t.transactionDate DESC, t.createdAt DESC")
    List<Transaction> searchTransactions(
        @Param("userId") Long userId,
        @Param("search") String search,
        @Param("type") TransactionType type,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );
    
    @Query("SELECT t FROM Transaction t WHERE t.user.id = :userId AND t.transactionDate BETWEEN :startDate AND :endDate ORDER BY t.transactionDate DESC")
    List<Transaction> findByUserIdAndDateRange(
        @Param("userId") Long userId,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );

    @Query("SELECT t FROM Transaction t WHERE t.user.id = :userId ORDER BY t.transactionDate DESC, t.createdAt DESC")
    List<Transaction> findByUserIdOrderByTransactionDateDescCreatedAtDesc(Long userId);
    
    @Query("SELECT t FROM Transaction t WHERE t.wallet.id = :walletId AND t.transactionDate BETWEEN :startDate AND :endDate ORDER BY t.transactionDate DESC")
    List<Transaction> findByWalletIdAndDateRange(
        @Param("walletId") Long walletId,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );
}
