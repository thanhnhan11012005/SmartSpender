package com.smartspender.controller;

import com.smartspender.util.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/health")
@Slf4j
public class HealthController {

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, String>>> health() {
        log.info("Health check request");
        
        Map<String, String> healthInfo = new HashMap<>();
        healthInfo.put("status", "UP");
        healthInfo.put("timestamp", OffsetDateTime.now().toString());
        healthInfo.put("application", "SmartSpender Backend API");
        healthInfo.put("version", "1.0.0");
        
        return ResponseEntity.ok(ApiResponse.ok(healthInfo, "SmartSpender Backend is running"));
    }
}
