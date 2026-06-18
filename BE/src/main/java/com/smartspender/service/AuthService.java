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
                .avatarUrl(savedUser.getAvatarUrl())
                .language(savedUser.getLanguage())
                .dateFormat(savedUser.getDateFormat())
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
                .avatarUrl(user.getAvatarUrl())
                .language(user.getLanguage())
                .dateFormat(user.getDateFormat())
                .createdAt(user.getCreatedAt() != null ? user.getCreatedAt().toString() : null)
                .build();
    }

    private static final String GOOGLE_CLIENT_ID = "608691357879-3ntjeg9nvsdn374411pos762cmq001dn.apps.googleusercontent.com";

    public UserDTO loginWithGoogle(com.smartspender.dto.GoogleAuthRequest request) {
        log.info("Auth login attempt using Google access token");
        try {
            org.springframework.web.client.RestTemplate restTemplate = new org.springframework.web.client.RestTemplate();
            org.springframework.http.HttpHeaders headers = new org.springframework.http.HttpHeaders();
            headers.setBearerAuth(request.getCredential());
            org.springframework.http.HttpEntity<String> entity = new org.springframework.http.HttpEntity<>("", headers);

            org.springframework.http.ResponseEntity<java.util.Map> response = restTemplate.exchange(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    org.springframework.http.HttpMethod.GET,
                    entity,
                    java.util.Map.class
            );

            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                java.util.Map<String, Object> payload = response.getBody();

                String email = (String) payload.get("email");
                String name = (String) payload.get("name");
                String pictureUrl = (String) payload.get("picture");

                Optional<User> userOpt = userRepository.findByEmail(email);
                User user;
                if (userOpt.isEmpty()) {
                    user = User.builder()
                            .name(name)
                            .email(email)
                            .passwordHash(passwordEncoder.encode(java.util.UUID.randomUUID().toString()))
                            .avatarUrl(pictureUrl)
                            .build();
                    user = userRepository.save(user);
                    log.info("Registered new user via Google: {}", email);
                } else {
                    user = userOpt.get();
                    if (user.getAvatarUrl() == null && pictureUrl != null) {
                        user.setAvatarUrl(pictureUrl);
                        user = userRepository.save(user);
                    }
                    log.info("Logged in existing user via Google: {}", email);
                }

                return UserDTO.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .phone(user.getPhone())
                        .address(user.getAddress())
                        .avatarUrl(user.getAvatarUrl())
                        .language(user.getLanguage())
                        .dateFormat(user.getDateFormat())
                        .createdAt(user.getCreatedAt() != null ? user.getCreatedAt().toString() : null)
                        .build();
            } else {
                log.warn("Invalid Google access token.");
                throw new BadCredentialsException("Invalid Google access token");
            }
        } catch (Exception e) {
            log.error("Google authentication failed", e);
            throw new BadCredentialsException("Google authentication failed");
        }
    }

    public UserDTO loginWithFacebook(com.smartspender.dto.FacebookAuthRequest request) {
        log.info("Auth login attempt using Facebook access token");
        try {
            org.springframework.web.client.RestTemplate restTemplate = new org.springframework.web.client.RestTemplate();
            
            String url = "https://graph.facebook.com/me?fields=id,name,email,picture.type(large)&access_token=" + request.getAccessToken();
            org.springframework.http.ResponseEntity<java.util.Map> response = restTemplate.getForEntity(url, java.util.Map.class);

            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                java.util.Map<String, Object> payload = response.getBody();

                String facebookId = (String) payload.get("id");
                String name = (String) payload.get("name");
                String email = (String) payload.get("email");
                
                // Fallback for hidden emails on Facebook
                if (email == null || email.isBlank()) {
                    email = facebookId + "@facebook.com";
                }

                String pictureUrl = null;
                java.util.Map<String, Object> pictureObj = (java.util.Map<String, Object>) payload.get("picture");
                if (pictureObj != null && pictureObj.get("data") != null) {
                    java.util.Map<String, Object> data = (java.util.Map<String, Object>) pictureObj.get("data");
                    pictureUrl = (String) data.get("url");
                }

                Optional<User> userOpt = userRepository.findByEmail(email);
                User user;
                if (userOpt.isEmpty()) {
                    user = User.builder()
                            .name(name)
                            .email(email)
                            .passwordHash(passwordEncoder.encode(java.util.UUID.randomUUID().toString()))
                            .avatarUrl(pictureUrl)
                            .build();
                    user = userRepository.save(user);
                    log.info("Registered new user via Facebook: {}", email);
                } else {
                    user = userOpt.get();
                    if (user.getAvatarUrl() == null && pictureUrl != null) {
                        user.setAvatarUrl(pictureUrl);
                        user = userRepository.save(user);
                    }
                    log.info("Logged in existing user via Facebook: {}", email);
                }

                return UserDTO.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .phone(user.getPhone())
                        .address(user.getAddress())
                        .avatarUrl(user.getAvatarUrl())
                        .language(user.getLanguage())
                        .dateFormat(user.getDateFormat())
                        .createdAt(user.getCreatedAt() != null ? user.getCreatedAt().toString() : null)
                        .build();
            } else {
                log.warn("Invalid Facebook access token.");
                throw new BadCredentialsException("Invalid Facebook access token");
            }
        } catch (Exception e) {
            log.error("Facebook authentication failed", e);
            throw new BadCredentialsException("Facebook authentication failed");
        }
    }
}
