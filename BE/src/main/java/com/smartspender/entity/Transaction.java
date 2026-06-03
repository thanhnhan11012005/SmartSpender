package com.smartspender.entity;

import com.smartspender.enums.TransactionType;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

@Entity
@Table(name = "TRANSACTIONS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "WALLET_ID", nullable = false, referencedColumnName = "id")
    private Wallet wallet;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false, referencedColumnName = "id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CATEGORY_ID", referencedColumnName = "id")
    private Category category;

    @Column(name = "AMOUNT", precision = 18, scale = 2, nullable = false)
    private BigDecimal amount;

    @Column(name = "TYPE", length = 16, nullable = false)
    private TransactionType type; // stored as custom string via TransactionTypeConverter

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "LOCATION", length = 255)
    private String location; // Hỗ trợ AI nhận diện địa điểm chi tiêu

    @Column(name = "IMAGE_URL")
    private String imageUrl; // Lưu đường dẫn ảnh hóa đơn

    @Column(name = "TRANSACTION_DATE", nullable = false, columnDefinition = "DATE DEFAULT CURRENT_DATE")
    private LocalDate transactionDate;

    @Column(name = "CREATED_AT", nullable = false, columnDefinition = "TIMESTAMP WITH TIME ZONE DEFAULT NOW()")
    private OffsetDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        if (transactionDate == null) {
            transactionDate = LocalDate.now();
        }
        if (createdAt == null) {
            createdAt = OffsetDateTime.now();
        }
    }
}
