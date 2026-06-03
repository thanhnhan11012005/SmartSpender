package com.smartspender.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryDTO {
    private Long id;

    private Long userId; // null nếu danh mục mặc định chung

    @NotBlank(message = "Category name is required")
    @Size(max = 100, message = "Category name must not exceed 100 characters")
    private String name;

    @Size(max = 25, message = "Icon must not exceed 25 characters")
    private String icon; // Emoji hoặc tên class icon

    @Size(max = 15, message = "Color must not exceed 15 characters")
    private String color; // Màu hex hoặc tên màu
}
