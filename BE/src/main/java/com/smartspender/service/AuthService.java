package com.smartspender.service;

import com.smartspender.dto.LoginRequest;
import com.smartspender.dto.RegisterRequest;
import com.smartspender.dto.UserDTO;
import com.smartspender.entity.User;
import com.smartspender.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserDTO register(RegisterRequest request) {
        log.info("Auth register attempt using email={} phone={}", request.getEmail(), request.getPhone());

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already exists: " + request.getEmail());
        }

        if (request.getPhone() != null && !request.getPhone().isBlank()) {
            userRepository.findByPhone(request.getPhone()).ifPresent(existing -> {
                throw new IllegalArgumentException("Phone already exists: " + request.getPhone());
            });
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .phone(request.getPhone())
            .address(null)
            .passwordHash(passwordEncoder.encode(request.getPassword()))
                .build();

        User savedUser = userRepository.save(user);
        log.info("User registered successfully with id: {}", savedUser.getId());

        return UserDTO.builder()
                .id(savedUser.getId())
                .name(savedUser.getName())
                .email(savedUser.getEmail())
                .phone(savedUser.getPhone())
            .address(savedUser.getAddress())
                .createdAt(savedUser.getCreatedAt() != null ? savedUser.getCreatedAt().toString() : null)
                .build();
    }

    public UserDTO login(LoginRequest request) {
        log.info("Auth login attempt using email={} phone={}", request.getEmail(), request.getPhone());

        Optional<User> userOpt = Optional.empty();

        if (request.getEmail() != null && !request.getEmail().isBlank()) {
            userOpt = userRepository.findByEmail(request.getEmail());
        } else if (request.getPhone() != null && !request.getPhone().isBlank()) {
            userOpt = userRepository.findByPhone(request.getPhone());
        } else {
            throw new BadCredentialsException("Missing credentials");
        }

        User user = userOpt.orElseThrow(() -> new BadCredentialsException("Invalid credentials"));

        String provided = request.getPassword() == null ? "" : request.getPassword();
        String actual = user.getPasswordHash() == null ? "" : user.getPasswordHash();

        boolean matchesEncoded = false;
        try {
            matchesEncoded = passwordEncoder.matches(provided, actual);
        } catch (Exception ignored) {
            matchesEncoded = false;
        }

        // Legacy compatibility: existing seed data may still store plain text passwords.
        if (!matchesEncoded && !provided.equals(actual)) {
            throw new BadCredentialsException("Invalid credentials");
        }

        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
            .address(user.getAddress())
                .createdAt(user.getCreatedAt() != null ? user.getCreatedAt().toString() : null)
                .build();
    }
}
