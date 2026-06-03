package com.smartspender.repository;

import com.smartspender.entity.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {
    List<Budget> findByUserId(Long userId);
    List<Budget> findByUserIdAndPeriod(Long userId, String period);

    void deleteByUserIdAndStartDateAndEndDate(Long userId, LocalDate startDate, LocalDate endDate);
    
    // Tìm budgets của user có khoảng thời gian bao phủ ngày dateInMonth
    @Query("SELECT b FROM Budget b WHERE b.user.id = :userId " +
           "AND b.startDate <= :dateInMonth AND b.endDate >= :dateInMonth")
    List<Budget> findBudgetsForDate(
        @Param("userId") Long userId,
        @Param("dateInMonth") LocalDate dateInMonth
    );
}
