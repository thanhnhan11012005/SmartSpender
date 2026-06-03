# SmartSpender Backend - Quick Start Guide

## ✅ Cài đặt và Chạy Dự án

### Bước 1: Thiết lập Database PostgreSQL

#### Option A: Docker Container (Recommended)
```bash
cd ../FE/src/db
docker-compose up -d
```

#### Option B: Local PostgreSQL
```bash
# Tạo database
createdb smartspender

# Chạy init script
psql -U postgres -d smartspender -f init.sql
```

### Bước 2: Cấu hình Connection String

Mở file `src/main/resources/application.yml`:
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/smartspender
    username: postgres
    password: postgres  # Thay đổi nếu cần
```

### Bước 3: Build và Run Backend

```bash
# Build project
mvn clean install

# Chạy development server
mvn spring-boot:run

# Hoặc dùng IDE (Run SmartSpenderApplication.java)
```

Backend sẽ chạy tại: **`http://localhost:8080/api`**

### Bước 4: Kiểm tra Health

```bash
curl http://localhost:8080/api/health
```

Response:
```json
{
  "success": true,
  "message": "SmartSpender Backend is running",
  "data": {
    "status": "UP",
    "timestamp": "2024-05-28T...",
    "application": "SmartSpender Backend API",
    "version": "1.0.0"
  }
}
```

## 🧪 Test API Endpoints

### Create User
```bash
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Demo User",
    "email": "demo@local",
    "phone": "0901234567"
  }'
```

### Get All Users
```bash
curl http://localhost:8080/api/users
```

### Create Wallet
```bash
curl -X POST http://localhost:8080/api/wallets \
  -H "Content-Type: application/json" \
  -d '{
    "userId": 1,
    "name": "My Wallet",
    "type": "cash",
    "balance": 1000000,
    "currency": "VND"
  }'
```

### Create Transaction
```bash
curl -X POST http://localhost:8080/api/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "walletId": 1,
    "userId": 1,
    "categoryId": 1,
    "amount": 250000,
    "type": "expense",
    "description": "Lunch at restaurant",
    "location": "District 1, HCMC",
    "transactionDate": "2024-05-28"
  }'
```

## 📋 Database Connection Info

| Property | Value |
|----------|-------|
| URL | `jdbc:postgresql://localhost:5432/smartspender` |
| Username | `postgres` |
| Password | `postgres` |
| Port | `5432` |

## 🛠️ IDE Setup

### Visual Studio Code
1. Install "Extension Pack for Java"
2. Install "Spring Boot Extension Pack"
3. Open workspace folder
4. Run > Run Without Debugging > Spring Boot App

### IntelliJ IDEA
1. Open project
2. File > Project Structure > Project SDK > Select Java 17
3. Right-click SmartSpenderApplication > Run

### Eclipse
1. Import as Existing Maven Project
2. Configure Runtime > Java 17
3. Run As > Spring Boot App

## 📦 Maven Commands

```bash
# Build project
mvn clean install

# Run application
mvn spring-boot:run

# Run tests
mvn test

# Create executable JAR
mvn clean package

# Run with specific profile
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=dev"
```

## 🔍 Troubleshooting

### Port 8080 already in use
```bash
# Find and kill process
lsof -i :8080
kill -9 <PID>
```

### Database connection refused
- Check PostgreSQL is running: `psql -U postgres -c "SELECT 1"`
- Check credentials in `application.yml`
- Verify database exists: `psql -U postgres -l`

### Entity validation errors
- Verify Entity columns match database schema exactly
- Column names must be UPPERCASE
- Run `select * from information_schema.columns where table_name='users';` to verify

### Build fails with Java version
```bash
mvn --version  # Check Maven version
java -version  # Check Java version (must be 17+)
```

## 📊 Database Schema Tables

| Table | Rows | Columns |
|-------|------|---------|
| USERS | - | ID, NAME, EMAIL, PHONE, PASSWORD_HASH, CREATED_AT |
| WALLETS | - | ID, USER_ID, NAME, TYPE, BALANCE, CURRENCY, CREATED_AT |
| CATEGORIES | - | ID, USER_ID, NAME, ICON, COLOR |
| BUDGETS | - | ID, USER_ID, CATEGORY_ID, AMOUNT, PERIOD, IS_ALERT_ENABLED |
| TRANSACTIONS | - | ID, WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, IMAGE_URL, TRANSACTION_DATE, CREATED_AT |

## 🚀 Production Deployment

### Using JAR
```bash
mvn clean package
java -jar target/backend-1.0.0.jar --spring.profiles.active=prod
```

### Environment Variables
```bash
export DB_HOST=prod-db.example.com
export DB_PORT=5432
export DB_NAME=smartspender_prod
export DB_USER=prod_user
export DB_PASSWORD=strong_password
```

### Docker Build
```bash
# Build Docker image
docker build -t smartspender-backend:1.0.0 .

# Run container
docker run -d -p 8080:8080 \
  -e DB_HOST=postgres \
  -e DB_PORT=5432 \
  -e DB_NAME=smartspender \
  -e DB_USER=postgres \
  -e DB_PASSWORD=postgres \
  smartspender-backend:1.0.0
```

## 📝 Useful Links

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Lombok Project](https://projectlombok.org/)

## 💡 Tips

1. Use Spring Boot DevTools for hot reload
2. Check logs in `target/` directory
3. Use curl, Postman, or Insomnia for API testing
4. Profile specific beans: `org.springframework.web=DEBUG`
5. Enable SQL logging: `show-sql: true` in application.yml

---

**Happy coding! 🎉**
