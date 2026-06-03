package com.smartspender.service;

import com.smartspender.dto.CategoryDTO;
import com.smartspender.entity.Category;
import com.smartspender.entity.User;
import com.smartspender.repository.CategoryRepository;
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
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        log.info("Creating category: {}", categoryDTO.getName());

        if (categoryDTO.getUserId() == null) {
            throw new IllegalArgumentException("User ID is required");
        }

        String normalizedName = categoryDTO.getName().trim();
        
        User user = userRepository.findById(categoryDTO.getUserId())
                .orElseThrow(() -> {
                    log.error("User not found with id: {}", categoryDTO.getUserId());
                    return new IllegalArgumentException("User not found: " + categoryDTO.getUserId());
                });

        boolean categoryExists = categoryRepository.findByUserIdOrUserIdIsNull(categoryDTO.getUserId()).stream()
                .anyMatch(category -> category.getName() != null && category.getName().trim().equalsIgnoreCase(normalizedName));

        if (categoryExists) {
            throw new IllegalArgumentException("Category already exists: " + normalizedName);
        }

        Category category = Category.builder()
                .user(user)
                .name(normalizedName)
                .icon(categoryDTO.getIcon())
                .color(categoryDTO.getColor())
                .build();

        Category savedCategory = categoryRepository.save(category);
        log.info("Category created successfully with id: {}", savedCategory.getId());
        
        return convertToDTO(savedCategory);
    }

    public CategoryDTO getCategoryById(Long categoryId) {
        log.info("Fetching category with id: {}", categoryId);
        return categoryRepository.findById(categoryId)
                .map(this::convertToDTO)
                .orElseThrow(() -> {
                    log.error("Category not found with id: {}", categoryId);
                    return new IllegalArgumentException("Category not found: " + categoryId);
                });
    }

    public List<CategoryDTO> getCategoriesByUserId(Long userId) {
        log.info("Fetching categories for user: {}", userId);
        
        if (!userRepository.existsById(userId)) {
            log.error("User not found with id: {}", userId);
            throw new IllegalArgumentException("User not found: " + userId);
        }

        return categoryRepository.findByUserId(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<CategoryDTO> getDefaultCategories() {
        log.info("Fetching default categories");
        return categoryRepository.findByUserIdIsNull().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<CategoryDTO> getAllCategoriesForUser(Long userId) {
        log.info("Fetching all categories (user and default) for user: {}", userId);

        if (!userRepository.existsById(userId)) {
            log.error("User not found with id: {}", userId);
            throw new IllegalArgumentException("User not found: " + userId);
        }

        return categoryRepository.findByUserIdOrUserIdIsNull(userId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public CategoryDTO updateCategory(Long categoryId, CategoryDTO categoryDTO) {
        log.info("Updating category with id: {}", categoryId);
        
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> {
                    log.error("Category not found with id: {}", categoryId);
                    return new IllegalArgumentException("Category not found: " + categoryId);
                });

        if (categoryDTO.getName() != null) {
            category.setName(categoryDTO.getName());
        }
        if (categoryDTO.getIcon() != null) {
            category.setIcon(categoryDTO.getIcon());
        }
        if (categoryDTO.getColor() != null) {
            category.setColor(categoryDTO.getColor());
        }

        Category updatedCategory = categoryRepository.save(category);
        log.info("Category updated successfully with id: {}", categoryId);
        
        return convertToDTO(updatedCategory);
    }

    public void deleteCategory(Long categoryId) {
        log.info("Deleting category with id: {}", categoryId);
        
        if (!categoryRepository.existsById(categoryId)) {
            log.error("Category not found with id: {}", categoryId);
            throw new IllegalArgumentException("Category not found: " + categoryId);
        }

        categoryRepository.deleteById(categoryId);
        log.info("Category deleted successfully with id: {}", categoryId);
    }

    private CategoryDTO convertToDTO(Category category) {
        return CategoryDTO.builder()
                .id(category.getId())
                .userId(category.getUser() != null ? category.getUser().getId() : null)
                .name(category.getName())
                .icon(category.getIcon())
                .color(category.getColor())
                .build();
    }
}
