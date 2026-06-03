package com.smartspender.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Set;

@Entity
@Table(name = "CATEGORIES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", referencedColumnName = "id")
    private User user; // NULL nếu là danh mục mặc định chung

    @Column(name = "NAME", length = 100, nullable = false)
    private String name;

    @Column(name = "ICON", length = 25)
    private String icon; // Emoji hoặc tên class icon

    @Column(name = "COLOR", length = 15)
    private String color;

    @OneToMany(mappedBy = "category")
    private Set<Budget> budgets;

    @OneToMany(mappedBy = "category")
    private Set<Transaction> transactions;
}
