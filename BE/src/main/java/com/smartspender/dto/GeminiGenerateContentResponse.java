package com.smartspender.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class GeminiGenerateContentResponse {
    private List<Candidate> candidates;

    public String extractText() {
        if (candidates == null) {
            return null;
        }

        for (Candidate candidate : candidates) {
            if (candidate == null || candidate.getContent() == null || candidate.getContent().getParts() == null) {
                continue;
            }

            List<String> chunks = new ArrayList<>();
            for (Part part : candidate.getContent().getParts()) {
                if (part != null && part.getText() != null && !part.getText().isBlank()) {
                    chunks.add(part.getText());
                }
            }

            if (!chunks.isEmpty()) {
                return String.join("", chunks);
            }
        }

        return null;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Candidate {
        private Content content;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Content {
        private List<Part> parts;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Part {
        private String text;
    }
}