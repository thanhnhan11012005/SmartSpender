# 🚀 HƯỚNG DẪN KẾT NỐI BE-FE GIAO DỊCH (TRANSACTIONS)

## 📋 TÓMLƯỢC

Backend và Frontend đã được cập nhật hoàn toàn để:
- ✅ Backend: Tự động ±balance ví khi tạo transaction (expense/income)
- ✅ Backend: API endpoint `GET /api/transactions?userId=...` sắp xếp DESC
- ✅ Frontend: Gọi API và render bảng giao dịch với dữ liệu thực từ PostgreSQL
- ✅ Frontend: Định dạng số tiền theo type (xanh+, đỏ-, xám transfer)

---

## 🔧 BƯỚC 1: INSERT TEST DATA VÀO PostgreSQL

### 1.1 Kết nối PostgreSQL
```bash
psql -U postgres -d SmartSpender
# Hoặc sử dụng pgAdmin
```

### 1.2 Chạy script SQL
Chạy nội dung file: `insert-test-transactions.sql`

**Hoặc copy-paste trực tiếp:**
```sql
-- Thêm danh mục
INSERT INTO CATEGORIES (USER_ID, NAME, ICON, COLOR) VALUES
(1, 'Thu nhập hàng tháng', '💰', '#4CAF50'),
(1, 'Thu nhập phụ', '📊', '#2196F3'),
(1, 'Mua sắm', '🛒', '#FF9800'),
(1, 'Giải trí', '🎬', '#E91E63'),
(1, 'Liên lạc', '📱', '#9C27B0');

-- Thêm giao dịch test (giả sử ví ID=1, user ID=1)
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES 
(1, 1, 1, 15000000.00, 'income', 'Lương', NULL, '2026-05-01'),
(1, 1, 3, 850000.00, 'expense', 'Siêu thị', 'Mua sắm', '2026-05-03'),
(1, 1, 3, 200000.00, 'expense', 'Surf Bar', 'Quy Nhơn, Gia Lai', '2026-05-08'),
(1, 1, 4, 150000.00, 'expense', 'Netflix', 'Giải trí', '2026-05-10'),
(1, 1, 2, 5000000.00, 'income', 'Dự án tự do', 'Thu nhập phụ', '2026-05-12'),
(1, 1, 3, 1200000.00, 'expense', 'Amazon', 'Mua sắm', '2026-05-13'),
(1, 1, 5, 50000.00, 'expense', 'Viber', 'Liên lạc', '2026-05-15');

-- Verify
SELECT t.ID, t.DESCRIPTION, c.NAME as CATEGORY, t.AMOUNT, t.TYPE, t.LOCATION, t.TRANSACTION_DATE
FROM TRANSACTIONS t
LEFT JOIN CATEGORIES c ON t.CATEGORY_ID = c.ID
WHERE t.USER_ID = 1
ORDER BY t.TRANSACTION_DATE DESC;
```

### 1.3 Xác nhận dữ liệu đã insert
```sql
-- Kiểm tra số lượng giao dịch
SELECT COUNT(*) as total_transactions FROM TRANSACTIONS WHERE USER_ID = 1;

-- Kiểm tra balance ví (tăng/giảm tự động nếu dùng API POST /transactions)
SELECT ID, NAME, BALANCE FROM WALLETS WHERE USER_ID = 1;
```

---

## ▶️ BƯỚC 2: CHẠY BACKEND SPRING BOOT

### 2.1 Tùy chọn A: Chạy từ Terminal

**PowerShell (Windows):**
```powershell
cd d:\N\SmartSpender\BE
.\mvnw.cmd spring-boot:run
```

**Bash (Mac/Linux):**
```bash
cd SmartSpender/BE
./mvnw spring-boot:run
```

### 2.2 Tùy chọn B: Chạy từ IDE
- Mở project BE trong VS Code / IntelliJ
- Tìm class `SmartSpenderApplication` 
- Click "Run" hoặc bấm F5
- Chờ cho đến khi thấy: `Started SmartSpenderApplication in... seconds`

### 2.3 Kiểm tra Backend sẵn sàng
- Terminal hiển thị: ✅ `Tomcat started on port(s): 8080`
- Truy cập: http://localhost:8080/api/actuator/health
- Response: `{"status":"UP"}`

---

## ▶️ BƯỚC 3: CHẠY FRONTEND

### 3.1 Mở Terminal mới (Backend vẫn chạy)
```powershell
cd d:\N\SmartSpender\FE
npm install  # Nếu chưa install dependencies
npm run dev
```

### 3.2 Truy cập ứng dụng
- Frontend: http://localhost:5173
- Hoặc: http://localhost:3000 (nếu cấu hình khác)

### 3.3 Đảm bảo user đã login
- Nếu chưa login, hãy login trước
- localStorage sẽ lưu: `{"id": 1, ...}`

---

## 🧪 BƯỚC 4: TEST GIAO DỊCH

### 4.1 Cách 1: Mở trang MyWallet
1. Vào http://localhost:5173
2. Menu chọn "Ví của tôi" hoặc tương tự
3. Scroll xuống phần "Lịch sử giao dịch"
4. Xem dữ liệu giao dịch (nên thấy các giao dịch vừa insert)

### 4.2 Cách 2: Kiểm tra Network (Browser DevTools)
1. F12 → Network tab
2. Refresh page
3. Tìm request: `transactions?userId=1`
4. Xem Response: JSON array with transaction objects
5. Kiểm tra: 
   - Status: 200
   - Có field: `category`, `description`, `location`, `amount`, `type`
   - `type` có giá trị: "income", "expense", hoặc "transfer"

### 4.3 Cách 3: Test API trực tiếp
**PowerShell script:**
```powershell
# Chạy file test-api.ps1
.\test-api.ps1
```

**Hoặc curl:**
```bash
curl -X GET "http://localhost:8080/api/transactions?userId=1" \
  -H "Content-Type: application/json"
```

**Hoặc Postman:**
- Method: GET
- URL: http://localhost:8080/api/transactions?userId=1
- Headers: Content-Type: application/json
- Bấm Send
- Kiểm tra Response

---

## ✅ KIỂM TRA KẾT QUẢ

### Bảng giao dịch phải hiển thị:

| Tên | Danh mục | Ngày | Số tiền |
|-----|----------|------|--------|
| ⇄ (chỉ transfer) Lương | Thu nhập hàng tháng | 2026-05-01 | +15.000.000 ₫ (xanh) |
| Siêu thị | Mua sắm | 2026-05-03 | -850.000 ₫ (đỏ) |
| Surf Bar*Quy Nhơn, Gia Lai | Mua sắm | 2026-05-08 | -200.000 ₫ (đỏ) |
| Netflix | Giải trí | 2026-05-10 | -150.000 ₫ (đỏ) |
| Dự án tự do | Thu nhập phụ | 2026-05-12 | +5.000.000 ₫ (xanh) |
| Amazon | Mua sắm | 2026-05-13 | -1.200.000 ₫ (đỏ) |
| Viber | Liên lạc | 2026-05-15 | -50.000 ₫ (đỏ) |

### ✅ Tiêu chí thành công:
- [ ] Bảng giao dịch hiển thị dữ liệu từ PostgreSQL (không phải mock data)
- [ ] Số tiền được sắp xếp theo ngày DESC (mới nhất trước)
- [ ] Số tiền có dấu +/- theo type
- [ ] Màu sắc đúng: income=xanh, expense=đỏ, transfer=xám
- [ ] Category.name hiển thị
- [ ] Location hiển thị dưới tên giao dịch (text xám)
- [ ] Không có lỗi console (F12 → Console tab)

---

## 🐛 TROUBLESHOOTING

### ❌ "Không có dữ liệu giao dịch" / "Empty List"

**Nguyên nhân:**
1. Dữ liệu chưa insert vào DB
2. userId không khớp
3. API không trả data

**Fix:**
```sql
-- Kiểm tra
SELECT COUNT(*) FROM TRANSACTIONS WHERE USER_ID = 1;
SELECT * FROM USERS; -- Xác nhận user ID=1 tồn tại
SELECT * FROM WALLETS WHERE USER_ID = 1; -- Xác nhận ví ID=1 tồn tại
```

---

### ❌ "Loading vĩnh viễn"

**Nguyên nhân:**
- Backend không chạy
- Fetch API failed
- CORS issue

**Fix:**
```bash
# Kiểm tra backend
curl http://localhost:8080/api/actuator/health

# Xem network error (F12 → Console)
# Xem server logs (terminal backend)
```

---

### ❌ "Category.name là undefined"

**Nguyên nhân:**
- Server không mapping category object
- Category record không tồn tại

**Fix:**
```java
// TransactionService.convertToDTO() đã có mapping:
if (transaction.getCategory() != null) {
    categoryDTO = CategoryDTO.builder()...build();
}

// Frontend có null check:
{txn.category?.name && <span>{txn.category.name}</span>}
```

---

### ❌ Số tiền không định dạng (hiển thị: 1000000 thay vì 1.000.000)

**Nguyên nhân:**
- formatVND() function lỗi
- amount không phải number type

**Fix:**
```typescript
// Kiểm tra ở browser console:
formatVND(1000000) // Phải return "1.000.000 ₫"

// Nếu lỗi, kiểm tra currency.ts
```

---

### ❌ Location không hiển thị

**Nguyên nhân:**
- DB location NULL
- Render không có condition check

**Fix:**
```typescript
// Đảm bảo render có condition:
{txn.location && (
  <div className="text-xs text-gray-400">{txn.location}</div>
)}
```

---

## 📝 NOTES

- ⚠️ **ddl-auto: validate** - DB schema phải exist, không tự tạo
- ⚠️ Nếu table chưa tồn tải, run hoặc db/init.sql trước
- ⚠️ userId trong localStorage phải match với DB
- ⚠️ Giao dịch TRANSFER không tự động ±balance (xử lý riêng ở transferMoney())

---

## 📚 FILE LIÊN QUAN

- `BE/src/main/java/.../TransactionService.java` - Service logic
- `BE/src/main/java/.../TransactionController.java` - REST endpoints
- `BE/src/main/java/.../TransactionRepository.java` - DB queries
- `FE/src/app/components/MyWallet.tsx` - UI & fetch logic
- `insert-test-transactions.sql` - Test data SQL script
- `test-api.ps1` - PowerShell API test script

---

**Bạn cần hỗ trợ thêm không?** 🎯
