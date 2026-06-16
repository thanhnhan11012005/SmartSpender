package com.smartspender.service;

import com.smartspender.dto.UserDTO;
import com.smartspender.entity.User;
import com.smartspender.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final com.smartspender.repository.ChatHistoryRepository chatHistoryRepository;
    private final com.smartspender.repository.NotificationRepository notificationRepository;

    public UserDTO createUser(UserDTO userDTO) {
        log.info("Creating user with email: {}", userDTO.getEmail());
        
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new IllegalArgumentException("Email already exists: " + userDTO.getEmail());
        }

        User user = User.builder()
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .phone(userDTO.getPhone())
                .address(userDTO.getAddress())
                .build();

        User savedUser = userRepository.save(user);
        log.info("User created successfully with id: {}", savedUser.getId());
        
        return convertToDTO(savedUser);
    }

    public UserDTO getUserById(Long userId) {
        log.info("Fetching user with id: {}", userId);
        return userRepository.findById(userId)
                .map(this::convertToDTO)
                .orElseThrow(() -> {
                    log.error("User not found with id: {}", userId);
                    return new IllegalArgumentException("User not found: " + userId);
                });
    }

    public UserDTO getUserByEmail(String email) {
        log.info("Fetching user with email: {}", email);
        return userRepository.findByEmail(email)
                .map(this::convertToDTO)
                .orElseThrow(() -> {
                    log.error("User not found with email: {}", email);
                    return new IllegalArgumentException("User not found: " + email);
                });
    }

    public List<UserDTO> getAllUsers() {
        log.info("Fetching all users");
        return userRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public UserDTO updateUser(Long userId, UserDTO userDTO) {
        log.info("Updating user with id: {}", userId);
        
        User user = userRepository.findById(userId)
                .orElseThrow(() -> {
                    log.error("User not found with id: {}", userId);
                    return new IllegalArgumentException("User not found: " + userId);
                });

        if (userDTO.getEmail() != null && !userDTO.getEmail().equalsIgnoreCase(user.getEmail())) {
            userRepository.findByEmail(userDTO.getEmail()).ifPresent(existing -> {
                if (!existing.getId().equals(userId)) {
                    throw new IllegalArgumentException("Email already exists: " + userDTO.getEmail());
                }
            });
        }

        if (userDTO.getName() != null) {
            user.setName(userDTO.getName());
        }
        if (userDTO.getEmail() != null) {
            user.setEmail(userDTO.getEmail());
        }
        if (userDTO.getPhone() != null) {
            user.setPhone(userDTO.getPhone());
        }
        if (userDTO.getAddress() != null) {
            user.setAddress(userDTO.getAddress());
        }
        if (userDTO.getAvatarUrl() != null) {
            user.setAvatarUrl(userDTO.getAvatarUrl());
        }
        if (userDTO.getLanguage() != null) {
            user.setLanguage(userDTO.getLanguage());
        }
        if (userDTO.getDateFormat() != null) {
            user.setDateFormat(userDTO.getDateFormat());
        }
        if (userDTO.getSmsAlert() != null) {
            user.setSmsAlert(userDTO.getSmsAlert());
        }
        if (userDTO.getWeeklyReport() != null) {
            user.setWeeklyReport(userDTO.getWeeklyReport());
        }

        User updatedUser = userRepository.save(user);
        log.info("User updated successfully with id: {}", userId);
        
        return convertToDTO(updatedUser);
    }

    public void deleteUser(Long userId) {
        log.info("Deleting user with id: {}", userId);
        
        if (!userRepository.existsById(userId)) {
            log.error("User not found with id: {}", userId);
            throw new IllegalArgumentException("User not found: " + userId);
        }

        chatHistoryRepository.deleteByUserId(userId);
        notificationRepository.deleteByUserId(userId);

        userRepository.deleteById(userId);
        log.info("User deleted successfully with id: {}", userId);
    }

    private UserDTO convertToDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .address(user.getAddress())
                .avatarUrl(user.getAvatarUrl())
                .language(user.getLanguage())
                .dateFormat(user.getDateFormat())
                .smsAlert(user.getSmsAlert() != null ? user.getSmsAlert() : false)
                .weeklyReport(user.getWeeklyReport() != null ? user.getWeeklyReport() : false)
                .createdAt(user.getCreatedAt() != null ? user.getCreatedAt().toString() : null)
                .build();
    }
}
