package com.smartspender.repository;

import com.smartspender.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {
    // Wallet.user is a ManyToOne relation, so the nested property path must be used.
    List<Wallet> findByUser_Id(Long userId);
}
