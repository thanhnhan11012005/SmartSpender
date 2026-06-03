# Project Structure Summary

## Backend Spring Boot 3.x Architecture

```
BE/
├── pom.xml                                  # Maven configuration với tất cả dependencies
├── .gitignore                               # Git ignore file
├── README.md                                # Documentation
│
└── src/
    ├── main/
    │   ├── java/com/smartspender/
    │   │   ├── SmartSpenderApplication.java     # Entry point
    │   │   │
    │   │   ├── config/                          # Configuration classes
    │   │   │   ├── WebSecurityConfig.java       # Security & CORS
    │   │   │   └── JpaAuditingConfig.java       # JPA Auditing
    │   │   │
    │   │   ├── entity/                          # JPA Entities
    │   │   │   ├── User.java                    # USER table
    │   │   │   ├── Wallet.java                  # WALLETS table
    │   │   │   ├── Category.java                # CATEGORIES table
    │   │   │   ├── Budget.java                  # BUDGETS table
    │   │   │   └── Transaction.java             # TRANSACTIONS table
    │   │   │
    │   │   ├── repository/                      # JPA Repositories
    │   │   │   ├── UserRepository.java
    │   │   │   ├── WalletRepository.java
    │   │   │   ├── CategoryRepository.java
    │   │   │   ├── BudgetRepository.java
    │   │   │   └── TransactionRepository.java
    │   │   │
    │   │   ├── service/                         # Business Logic Services
    │   │   │   ├── UserService.java
    │   │   │   ├── WalletService.java
    │   │   │   ├── CategoryService.java
    │   │   │   ├── BudgetService.java
    │   │   │   └── TransactionService.java
    │   │   │
    │   │   ├── controller/                      # REST API Controllers
    │   │   │   ├── HealthController.java        # Health check endpoint
    │   │   │   ├── UserController.java
    │   │   │   ├── WalletController.java
    │   │   │   ├── CategoryController.java
    │   │   │   ├── BudgetController.java
    │   │   │   └── TransactionController.java
    │   │   │
    │   │   ├── dto/                             # Data Transfer Objects
    │   │   │   ├── UserDTO.java
    │   │   │   ├── WalletDTO.java
    │   │   │   ├── CategoryDTO.java
    │   │   │   ├── BudgetDTO.java
    │   │   │   └── TransactionDTO.java
    │   │   │
    │   │   ├── enums/                           # Enumerations
    │   │   │   └── TransactionType.java         # EXPENSE, INCOME, TRANSFER
    │   │   │
    │   │   ├── exception/                       # Exception Handling
    │   │   │   ├── GlobalExceptionHandler.java  # Global exception handler
    │   │   │   └── ErrorResponse.java           # Error response DTO
    │   │   │
    │   │   └── util/                            # Utilities
    │   │       └── ApiResponse.java             # Generic API response wrapper
    │   │
    │   └── resources/
    │       ├── application.yml                  # Main configuration
    │       ├── application-dev.yml              # Development profile
    │       └── application-prod.yml             # Production profile
    │
    └── test/
        └── java/com/smartspender/
            └── SmartSpenderApplicationTests.java # Unit tests
```

## Key Architecture Features

### 1. **Entity Classes (JPA)**
- Ánh xạ 100% với database schema từ `init.sql`
- Sử dụng annotations: `@Entity`, `@Table`, `@Column`
- Relationships: OneToMany, ManyToOne
- Timestamps: CreatedAt với `@PrePersist`

### 2. **Repository Layer**
- Spring Data JPA repositories
- Custom query methods cho complex operations
- @Query annotations for JPQL queries

### 3. **Service Layer**
- Business logic separation
- Dependency Injection
- Transaction management
- Logging

### 4. **Controller Layer**
- REST API endpoints
- CORS configuration
- Request validation
- Exception handling

### 5. **DTO Classes**
- Separation of concerns
- Validation annotations
- Prevent entity exposure

### 6. **Security**
- CORS configuration
- CSRF disabled (stateless API)
- Session stateless (JWT ready)

## Database Configuration

### Hibernate Configuration
```yaml
jpa:
  hibernate:
    ddl-auto: validate  # Không tự động tạo/update bảng
  show-sql: true
  properties:
    hibernate:
      dialect: org.hibernate.dialect.PostgreSQLDialect
      format_sql: true
```

**Important**: Với `ddl-auto: validate`, Entity phải khớp 100% với database schema.

## Development Workflow

### 1. Build Project
```bash
mvn clean install
```

### 2. Run Application
```bash
mvn spring-boot:run
```

### 3. Test API
- Health check: `GET http://localhost:8080/api/health`
- Users API: `http://localhost:8080/api/users`

## Validation & Error Handling

- Bean Validation annotations (`@NotNull`, `@NotBlank`, `@Positive`, etc.)
- Global exception handler cho tất cả errors
- Structured error responses

## API Endpoints Summary

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/health` | Health check |
| GET | `/users` | List all users |
| GET | `/users/{id}` | Get user by ID |
| POST | `/users` | Create new user |
| PUT | `/users/{id}` | Update user |
| DELETE | `/users/{id}` | Delete user |
| GET | `/wallets/user/{userId}` | Get user wallets |
| POST | `/wallets` | Create wallet |
| GET | `/categories/user/{userId}/all` | Get all categories (user + default) |
| POST | `/transactions` | Create transaction |
| GET | `/transactions/user/{userId}/range` | Get transactions by date range |

## Next Steps

1. Configure database connection in `application.yml`
2. Run PostgreSQL container: `cd ../FE/src/db && docker-compose up`
3. Build and run Backend: `mvn spring-boot:run`
4. Frontend will connect to `http://localhost:8080/api`

## Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Java | 17 | Programming language |
| Spring Boot | 3.3.0 | Framework |
| Spring Data JPA | - | ORM |
| PostgreSQL | - | Database |
| Lombok | - | Code generation |
| JWT | 0.12.3 | Authentication (ready) |
| Maven | - | Build tool |

## Notes

- Tất cả timestamps sử dụng `OffsetDateTime` cho timezone support
- Monetary values sử dụng `BigDecimal` cho accuracy
- Enums được sử dụng cho TransactionType
- Services-Controllers là 1:1 mapping để clear responsibility
- CORS enabled cho development (localhost:3000, localhost:5173)
