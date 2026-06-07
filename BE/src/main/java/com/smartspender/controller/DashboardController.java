package com.smartspender.controller;

import com.smartspender.dto.DashboardDTO;
import com.smartspender.service.DashboardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
@Slf4j
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public ResponseEntity<DashboardDTO> getDashboard(@RequestParam Long userId) {
        log.info("Fetching dashboard data for user: {}", userId);
        return ResponseEntity.ok(dashboardService.getDashboardData(userId));
    }
}
