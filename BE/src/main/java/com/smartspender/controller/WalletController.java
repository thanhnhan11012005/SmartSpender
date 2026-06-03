package com.smartspender.controller;

import com.smartspender.dto.WalletDTO;
import com.smartspender.dto.TransferRequest;
import com.smartspender.service.WalletService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wallets")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}, allowedHeaders = "*", allowCredentials = "true")
public class WalletController {

    private final WalletService walletService;

    @PostMapping
    public ResponseEntity<WalletDTO> createWallet(@Valid @RequestBody WalletDTO walletDTO) {
        log.info("POST /wallets - Creating new wallet");
        WalletDTO createdWallet = walletService.createWallet(walletDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdWallet);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WalletDTO> getWalletById(@PathVariable Long id) {
        log.info("GET /wallets/{} - Fetching wallet", id);
        WalletDTO wallet = walletService.getWalletById(id);
        return ResponseEntity.ok(wallet);
    }

    @GetMapping
    public ResponseEntity<List<WalletDTO>> getWalletsByUserId(@RequestParam("userId") Long userId) {
        log.info("GET /wallets?userId={} - Fetching wallets for user", userId);
        List<WalletDTO> wallets = walletService.getWalletsByUserId(userId);
        return ResponseEntity.ok(wallets);
    }

    @PutMapping("/{id}")
    public ResponseEntity<WalletDTO> updateWallet(@PathVariable Long id, @Valid @RequestBody WalletDTO walletDTO) {
        log.info("PUT /wallets/{} - Updating wallet", id);
        WalletDTO updatedWallet = walletService.updateWallet(id, walletDTO);
        return ResponseEntity.ok(updatedWallet);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWallet(@PathVariable Long id) {
        log.info("DELETE /wallets/{} - Deleting wallet", id);
        walletService.deleteWallet(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/transfer")
    public ResponseEntity<Void> transferMoney(@Valid @RequestBody TransferRequest request) {
        log.info("POST /wallets/transfer - Transferring money from {} to {}", request.getFromWalletId(), request.getToWalletId());
        walletService.transferMoney(request);
        return ResponseEntity.ok().build();
    }
}
