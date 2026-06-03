# SmartSpender Backend API

Backend API cho ứng dụng quản lý tài chính SmartSpender.

## Công nghệ sử dụng

- **Java 17**
- **Spring Boot 3.3.0**
- **Spring Data JPA**
- **PostgreSQL**
- **Lombok**
- **Maven**

## Yêu cầu

- Java 17 trở lên
- Maven 3.6+
- PostgreSQL 12+

## Cấu trúc dự án

```
BE/
├── src/main/java/com/smartspender/
│   ├── SmartSpenderApplication.java
│   ├── config/                       # Cấu hình Spring
│   ├── controller/                   # REST Controllers
│   ├── dto/                          # Data Transfer Objects
│   ├── entity/                       # JPA Entities
│   ├── enums/                        # Enums
│   ├── exception/                    # Exception handling
│   ├── repository/                   # JPA Repositories
│   └── service/                      # Business Logic
├── src/main/resources/
│   └── application.yml              # Cấu hình ứng dụng
├── pom.xml
└── README.md
```

## API Endpoints

### Users
- `GET /api/users` - Lấy tất cả người dùng
- `GET /api/users/{id}` - Lấy thông tin người dùng
- `GET /api/users/email/{email}` - Lấy người dùng theo email
- `POST /api/users` - Tạo người dùng mới
- `PUT /api/users/{id}` - Cập nhật thông tin người dùng
- `DELETE /api/users/{id}` - Xóa người dùng

### Wallets
- `GET /api/wallets/{id}` - Lấy thông tin ví
- `GET /api/wallets/user/{userId}` - Lấy danh sách ví của người dùng
- `POST /api/wallets` - Tạo ví mới
- `PUT /api/wallets/{id}` - Cập nhật ví
- `DELETE /api/wallets/{id}` - Xóa ví

### Categories
- `GET /api/categories/{id}` - Lấy thông tin danh mục
- `GET /api/categories/user/{userId}` - Lấy danh mục của người dùng
- `GET /api/categories/user/{userId}/all` - Lấy danh mục người dùng + danh mục mặc định
- `GET /api/categories/default` - Lấy danh mục mặc định
- `POST /api/categories` - Tạo danh mục mới
- `PUT /api/categories/{id}` - Cập nhật danh mục
- `DELETE /api/categories/{id}` - Xóa danh mục

### Budgets
- `GET /api/budgets/{id}` - Lấy thông tin ngân sách
- `GET /api/budgets/user/{userId}` - Lấy danh sách ngân sách của người dùng
- `GET /api/budgets/user/{userId}/period/{period}` - Lấy ngân sách theo kỳ
- `POST /api/budgets` - Tạo ngân sách mới
- `PUT /api/budgets/{id}` - Cập nhật ngân sách
- `DELETE /api/budgets/{id}` - Xóa ngân sách

### Transactions
- `GET /api/transactions/{id}` - Lấy thông tin giao dịch
- `GET /api/transactions/user/{userId}` - Lấy danh sách giao dịch của người dùng
- `GET /api/transactions/wallet/{walletId}` - Lấy danh sách giao dịch của ví
- `GET /api/transactions/user/{userId}/type/{type}` - Lấy giao dịch theo loại
- `GET /api/transactions/user/{userId}/range?startDate=&endDate=` - Lấy giao dịch trong khoảng thời gian
- `GET /api/transactions/wallet/{walletId}/range?startDate=&endDate=` - Lấy giao dịch ví trong khoảng thời gian
- `POST /api/transactions` - Tạo giao dịch mới
- `PUT /api/transactions/{id}` - Cập nhật giao dịch
- `DELETE /api/transactions/{id}` - Xóa giao dịch

## Khởi động dự án

### 1. Clone repository và điều hướng vào thư mục BE

```bash
cd BE
```

### 2. Cập nhật cấu hình database trong `application.yml`

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/smartspender
    username: postgres
    password: postgres
```

### 3. Tạo database PostgreSQL

```sql
CREATE DATABASE smartspender;
```

### 4. Khởi động PostgreSQL container (tùy chọn)

```bash
cd ../FE/src/db
docker-compose up -d
```

### 5. Chạy lệnh Maven để build và khởi động ứng dụng

```bash
mvn clean install
mvn spring-boot:run
```

Ứng dụng sẽ khởi động tại: `http://localhost:8080/api`

## Validation Rules

### User
- Name: Bắt buộc, tối đa 50 ký tự
- Email: Bắt buộc, định dạng email hợp lệ, tối đa 30 ký tự
- Phone: Tùy chọn, tối đa 10 ký tự

### Wallet
- User ID: Bắt buộc
- Name: Bắt buộc, tối đa 50 ký tự
- Balance: Bắt buộc, số dương
- Type: Tùy chọn (cash, bank, credit, ewallet)
- Currency: Tùy chọn (mặc định VND)

### Category
- Name: Bắt buộc, tối đa 100 ký tự
- Icon: Tùy chọn, tối đa 25 ký tự
- Color: Tùy chọn, tối đa 15 ký tự

### Budget
- User ID: Bắt buộc
- Amount: Bắt buộc, số dương
- Period: Tùy chọn (daily, weekly, monthly, quarterly, yearly)
- Is Alert Enabled: Tùy chọn, mặc định false

### Transaction
- Wallet ID: Bắt buộc
- User ID: Bắt buộc
- Amount: Bắt buộc, số dương
- Type: Bắt buộc (expense, income, transfer)
- Transaction Date: Bắt buộc

## Database Schema

Tất cả các bảng và cột được tạo từ file `init.sql` và Entity JPA được cấu hình để khớp 100% với schema database khi sử dụng `ddl-auto: validate`.

## Changelog

### v1.0.0
- Khởi tạo project Backend
- Tạo API CRUD cho Users, Wallets, Categories, Budgets, Transactions
- Cấu hình Spring Security và CORS
- Exception handling toàn cục

## License

MIT
