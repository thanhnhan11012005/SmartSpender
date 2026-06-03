package com.smartspender.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "BUDGETS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false, referencedColumnName = "id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CATEGORY_ID", referencedColumnName = "id")
    private Category category;

    @Column(name = "AMOUNT", precision = 18, scale = 2, nullable = false, columnDefinition = "NUMERIC(18,2) DEFAULT 0")
    private BigDecimal amount;

    @Column(name = "PERIOD", length = 32, columnDefinition = "VARCHAR(32) DEFAULT 'monthly'")
    private String period; // 'daily', 'weekly', 'monthly', 'quarterly', 'yearly'

    @Column(name = "START_DATE", nullable = false, columnDefinition = "DATE DEFAULT CURRENT_DATE")
    private LocalDate startDate;

    @Column(name = "END_DATE", nullable = false, columnDefinition = "DATE DEFAULT CURRENT_DATE")
    private LocalDate endDate;

    @Column(name = "IS_ALERT_ENABLED", columnDefinition = "BOOLEAN DEFAULT FALSE")
    private Boolean isAlertEnabled;

    @PrePersist
    protected void onCreate() {
        if (amount == null) {
            amount = BigDecimal.ZERO;
        }
        if (period == null) {
            period = "monthly";
        }
        if (startDate == null) {
            startDate = LocalDate.now();
        }
        if (endDate == null) {
            endDate = LocalDate.now();
        }
        if (isAlertEnabled == null) {
            isAlertEnabled = false;
        }
    }
}
