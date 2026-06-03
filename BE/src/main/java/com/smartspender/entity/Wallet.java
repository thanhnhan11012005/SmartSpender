package com.smartspender.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.Set;

@Entity
@Table(name = "WALLETS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Wallet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false, referencedColumnName = "id")
    private User user;

    @Column(name = "NAME", length = 50, nullable = false)
    private String name;

    @Column(name = "TYPE", length = 10, columnDefinition = "VARCHAR(10) DEFAULT 'cash'")
    private String type; // 'cash', 'bank', 'credit', 'ewallet'

    @Column(name = "ACCOUNT_NUMBER", length = 20)
    private String accountNumber;

    @Column(name = "DESCRIPTION", length = 100)
    private String description;

    @Column(name = "COLOR", length = 100)
    private String color;

    @Column(name = "BALANCE", precision = 18, scale = 2, columnDefinition = "NUMERIC(18,2) DEFAULT 0")
    private BigDecimal balance;

    @Column(name = "CURRENCY", length = 10, columnDefinition = "VARCHAR(10) DEFAULT 'VND'")
    private String currency;

    @Column(name = "CREATED_AT", nullable = false, columnDefinition = "TIMESTAMP WITH TIME ZONE DEFAULT NOW()")
    private OffsetDateTime createdAt;

    @OneToMany(mappedBy = "wallet", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Transaction> transactions;

    @PrePersist
    protected void onCreate() {
        if (createdAt == null) {
            createdAt = OffsetDateTime.now();
        }
        if (balance == null) {
            balance = BigDecimal.ZERO;
        }
        if (type == null) {
            type = "cash";
        }
        if (currency == null) {
            currency = "VND";
        }
    }
}
