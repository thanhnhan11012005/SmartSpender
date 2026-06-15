package com.smartspender.controller;

import com.smartspender.dto.NotificationDTO;
import com.smartspender.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/notifications")
@CrossOrigin(origins = "*")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private com.smartspender.scheduler.WeeklyReportScheduler weeklyReportScheduler;

    @GetMapping("/test-weekly-report")
    public ResponseEntity<String> testWeeklyReport() {
        weeklyReportScheduler.sendWeeklyReports();
        return ResponseEntity.ok("Weekly report sent successfully!");
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<NotificationDTO>> getUserNotifications(@PathVariable Long userId) {
        return ResponseEntity.ok(notificationService.getUserNotifications(userId));
    }

    @GetMapping("/user/{userId}/unread-count")
    public ResponseEntity<Long> getUnreadCount(@PathVariable Long userId) {
        return ResponseEntity.ok(notificationService.getUnreadCount(userId));
    }

    @PutMapping("/{id}/read")
    public ResponseEntity<?> markAsRead(@PathVariable Long id) {
        notificationService.markAsRead(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/user/{userId}/read-all")
    public ResponseEntity<?> markAllAsRead(@PathVariable Long userId) {
        notificationService.markAllAsRead(userId);
        return ResponseEntity.ok().build();
    }

    @PostMapping
    public ResponseEntity<NotificationDTO> createNotification(@RequestBody Map<String, Object> payload) {
        Long userId = Long.valueOf(payload.get("userId").toString());
        String title = payload.get("title").toString();
        String message = payload.get("message").toString();
        String type = payload.get("type").toString();

        return ResponseEntity.ok(notificationService.createNotification(userId, title, message, type));
    }
}
