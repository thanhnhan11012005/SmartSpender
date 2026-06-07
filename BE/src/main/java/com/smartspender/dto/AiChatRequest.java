package com.smartspender.dto;

import lombok.Data;

import java.util.List;

@Data
public class AiChatRequest {
    private Long userId;
    private String userMessage;
    private String imageBase64;
    private String imageMimeType;
    private String currentDateTime;
    private List<BudgetContextItem> budgets;
    private List<CategoryContextItem> categories;

    @Data
    public static class BudgetContextItem {
        private Long id;
        private Long categoryId;
        private String categoryName;
        private Double limitAmount;
        private Double spentAmount;
        private String startDate;
        private String endDate;
    }

    @Data
    public static class CategoryContextItem {
        private Long id;
        private Long userId;
        private String name;
        private String icon;
        private String color;
    }
}
