package com.smartspender.controller;

import com.smartspender.dto.LoginRequest;
import com.smartspender.dto.RegisterRequest;
import com.smartspender.dto.UserDTO;
import com.smartspender.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}, allowedHeaders = "*", allowCredentials = "true")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> register(@Valid @RequestBody RegisterRequest request) {
        try {
            log.info("Register request: email={}, phone={}", request.getEmail(), request.getPhone());
            UserDTO user = authService.register(request);
            log.info("Register successful for user: {}", user.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(user);
        } catch (IllegalArgumentException ex) {
            log.warn("Register failed: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } catch (Exception ex) {
            log.error("Unexpected error during register", ex);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> login(@RequestBody LoginRequest request) {
        try {
            log.info("Login request: email={}, phone={}", request.getEmail(), request.getPhone());
            UserDTO user = authService.login(request);
            log.info("Login successful for user: {}", user.getId());
            return ResponseEntity.ok(user);
        } catch (BadCredentialsException ex) {
            log.warn("Login failed: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } catch (Exception ex) {
            log.error("Unexpected error during login", ex);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/google")
    public ResponseEntity<UserDTO> loginWithGoogle(@Valid @RequestBody com.smartspender.dto.GoogleAuthRequest request) {
        try {
            log.info("Google login request received");
            UserDTO user = authService.loginWithGoogle(request);
            log.info("Google Login successful for user: {}", user.getId());
            return ResponseEntity.ok(user);
        } catch (BadCredentialsException ex) {
            log.warn("Google Login failed: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } catch (Exception ex) {
            log.error("Unexpected error during Google login", ex);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/facebook")
    public ResponseEntity<UserDTO> loginWithFacebook(@Valid @RequestBody com.smartspender.dto.FacebookAuthRequest request) {
        try {
            log.info("Facebook login request received");
            UserDTO user = authService.loginWithFacebook(request);
            log.info("Facebook Login successful for user: {}", user.getId());
            return ResponseEntity.ok(user);
        } catch (BadCredentialsException ex) {
            log.warn("Facebook Login failed: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        } catch (Exception ex) {
            log.error("Unexpected error during Facebook login", ex);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @PostMapping("/forgot-password")
    public ResponseEntity<Void> forgotPassword(@Valid @RequestBody com.smartspender.dto.ForgotPasswordRequest request) {
        try {
            log.info("Forgot password request received for: {}", request.getEmail());
            authService.forgotPassword(request.getEmail());
            return ResponseEntity.ok().build();
        } catch (Exception ex) {
            log.error("Unexpected error during forgot password", ex);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
