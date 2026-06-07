package com.smartspender.controller;

import com.smartspender.dto.AiChatRequest;
import com.smartspender.dto.AiChatResponse;
import com.smartspender.dto.ChatHistoryDTO;
import com.smartspender.service.AiChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ai")
@RequiredArgsConstructor
@Slf4j
public class AiChatController {

    private final AiChatService aiChatService;

    @PostMapping("/chat")
    public ResponseEntity<AiChatResponse> chat(@RequestBody AiChatRequest request) {
        log.info("Received AI chat request for user: {}", request.getUserId());
        AiChatResponse response = aiChatService.handleChat(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/chat/history")
    public ResponseEntity<List<ChatHistoryDTO>> getHistory(@RequestParam Long userId) {
        log.info("Fetching chat history for user: {}", userId);
        return ResponseEntity.ok(aiChatService.getHistoryByUserId(userId));
    }
}
