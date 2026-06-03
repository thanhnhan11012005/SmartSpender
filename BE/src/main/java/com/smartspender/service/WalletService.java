package com.smartspender.service;

import com.smartspender.dto.WalletDTO;
import com.smartspender.dto.TransferRequest;
import com.smartspender.entity.User;
import com.smartspender.entity.Transaction;
import com.smartspender.entity.Wallet;
import com.smartspender.enums.TransactionType;
import com.smartspender.repository.UserRepository;
import com.smartspender.repository.TransactionRepository;
import com.smartspender.repository.WalletRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class WalletService {

    private final WalletRepository walletRepository;
    private final UserRepository userRepository;
    private final TransactionRepository transactionRepository;

    public WalletDTO createWallet(WalletDTO walletDTO) {
        log.info("Creating wallet for user: {}", walletDTO.getUserId());

        User user = userRepository.findById(walletDTO.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + walletDTO.getUserId()));

        Wallet wallet = Wallet.builder()
                .user(user)
                .name(walletDTO.getName())
                .type(walletDTO.getType() != null ? walletDTO.getType() : "cash")
                .accountNumber(walletDTO.getAccountNumber())
                .description(walletDTO.getDescription())
                .color(walletDTO.getColor())
                .balance(walletDTO.getBalance() != null ? walletDTO.getBalance() : BigDecimal.ZERO)
                .currency(walletDTO.getCurrency() != null ? walletDTO.getCurrency() : "VND")
                .build();

        return convertToDTO(walletRepository.save(wallet));
    }

    @Transactional(readOnly = true)
    public WalletDTO getWalletById(Long walletId) {
        return walletRepository.findById(walletId)
                .map(this::convertToDTO)
                .orElseThrow(() -> new IllegalArgumentException("Wallet not found: " + walletId));
    }

    @Transactional(readOnly = true)
    public List<WalletDTO> getWalletsByUserId(Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new IllegalArgumentException("User not found: " + userId);
        }

        return walletRepository.findByUser_Id(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public WalletDTO updateWallet(Long walletId, WalletDTO walletDTO) {
        Wallet wallet = walletRepository.findById(walletId)
                .orElseThrow(() -> new IllegalArgumentException("Wallet not found: " + walletId));

        if (walletDTO.getName() != null) {
            wallet.setName(walletDTO.getName());
        }
        if (walletDTO.getType() != null) {
            wallet.setType(walletDTO.getType());
        }
        if (walletDTO.getAccountNumber() != null) {
            wallet.setAccountNumber(walletDTO.getAccountNumber());
        }
        if (walletDTO.getDescription() != null) {
            wallet.setDescription(walletDTO.getDescription());
        }
        if (walletDTO.getColor() != null) {
            wallet.setColor(walletDTO.getColor());
        }
        if (walletDTO.getBalance() != null) {
            wallet.setBalance(walletDTO.getBalance());
        }
        if (walletDTO.getCurrency() != null) {
            wallet.setCurrency(walletDTO.getCurrency());
        }

        return convertToDTO(walletRepository.save(wallet));
    }

    public void deleteWallet(Long walletId) {
        if (!walletRepository.existsById(walletId)) {
            throw new IllegalArgumentException("Wallet not found: " + walletId);
        }
        walletRepository.deleteById(walletId);
    }

    public void transferMoney(TransferRequest request) {
        if (request.getFromWalletId().equals(request.getToWalletId())) {
            throw new IllegalArgumentException("Nguồn và đích chuyển tiền phải khác nhau");
        }

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + request.getUserId()));

        Wallet fromWallet = walletRepository.findById(request.getFromWalletId())
                .orElseThrow(() -> new IllegalArgumentException("Wallet nguồn không tồn tại: " + request.getFromWalletId()));
        Wallet toWallet = walletRepository.findById(request.getToWalletId())
                .orElseThrow(() -> new IllegalArgumentException("Wallet đích không tồn tại: " + request.getToWalletId()));

        if (!fromWallet.getUser().getId().equals(request.getUserId()) || !toWallet.getUser().getId().equals(request.getUserId())) {
            throw new IllegalArgumentException("Chỉ được chuyển tiền giữa các ví của cùng một người dùng");
        }

        BigDecimal amount = request.getAmount();
        if (fromWallet.getBalance().compareTo(amount) < 0) {
            throw new IllegalArgumentException("Số dư ví nguồn không đủ");
        }

        fromWallet.setBalance(fromWallet.getBalance().subtract(amount));
        toWallet.setBalance(toWallet.getBalance().add(amount));

        walletRepository.saveAll(Arrays.asList(fromWallet, toWallet));

        String description = request.getDescription() != null && !request.getDescription().isBlank()
                ? request.getDescription().trim()
                : "Chuyển tiền nội bộ";

        Transaction debitTransaction = Transaction.builder()
                .wallet(fromWallet)
                .user(user)
                .amount(amount.negate())
                .type(TransactionType.TRANSFER)
                .description(description + " - Trừ ví nguồn")
                .build();

        Transaction creditTransaction = Transaction.builder()
                .wallet(toWallet)
                .user(user)
                .amount(amount)
                .type(TransactionType.TRANSFER)
                .description(description + " - Cộng ví đích")
                .build();

        transactionRepository.save(debitTransaction);
        transactionRepository.save(creditTransaction);
    }

    private WalletDTO convertToDTO(Wallet wallet) {
        return WalletDTO.builder()
                .id(wallet.getId())
                .userId(wallet.getUser() != null ? wallet.getUser().getId() : null)
                .name(wallet.getName())
                .type(wallet.getType())
                .accountNumber(wallet.getAccountNumber())
                .description(wallet.getDescription())
                .color(wallet.getColor())
                .balance(wallet.getBalance())
                .currency(wallet.getCurrency())
                .createdAt(wallet.getCreatedAt() != null ? wallet.getCreatedAt().toString() : null)
                .build();
    }
}
