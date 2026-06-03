/**
 * ============================================================
 * KIỂM TRA DANH SÁCH - KẾT NỐI BE-FE GIAO DỊCH
 * ============================================================
 */

// ✅ BACKEND CHECKLIST

1. ✅ TransactionEntity.java
   - Có @ManyToOne với Wallet, User, Category
   - Có @Enumerated(EnumType.STRING) cho type
   - @PrePersist set transactionDate và createdAt

2. ✅ TransactionRepository.java 
   - Có method: findByUserIdOrderByTransactionDateDesc(Long userId)
   - Kế thừa JpaRepository<Transaction, Long>

3. ✅ TransactionService.java
   - createTransaction() tự động ±balance cho EXPENSE/INCOME
   - getTransactionsByUserId() gọi findByUserIdOrderByTransactionDateDesc()
   - convertToDTO() mapping đầy đủ category object + tất cả fields

4. ✅ TransactionController.java
   - @RequestMapping("/transactions") với @CrossOrigin đủ origins
   - @GetMapping với @RequestParam Long userId (query parameter)
   - POST /api/transactions - tạo giao dịch: tự động update balance
   - GET /api/transactions?userId=X - lấy danh sách sắp xếp DESC

5. ✅ TransactionDTO.java
   - Có field: category: CategoryDTO (ngoài categoryId)
   - Validation: @NotNull, @Positive trên amount

// ✅ FRONTEND CHECKLIST

1. ✅ MyWallet.tsx
   - Type Transaction: có id, walletId, userId, category, amount, type, description, location, transactionDate
   - Type Category trong Transaction
   - State: transactions[], isLoadingTransactions

2. ✅ fetchTransactions() 
   - Lấy userId từ localStorage
   - Gọi GET /api/transactions?userId={userId}
   - Parse response thành Transaction[]
   - Lưu vào transactions state

3. ✅ useEffect
   - Gọi fetchTransactions() khi component mount

4. ✅ Render bảng giao dịch
   - Filter: walletTransactions = transactions.filter(t => t.walletId === selectedWallet.id)
   - Sort: DESC theo transactionDate
   - Take 5 giao dịch gần nhất
   - Hiển thị:
     * Description (+ icon ⇄ cho transfer)
     * location (text xám nhỏ)
     * category.name + date
     * Số tiền color: 
       - income: +1.000.000 (xanh)
       - expense: -1.000.000 (đỏ)
       - transfer: 1.000.000 (xám)

// ✅ DATABASE CHECKLIST

1. ✅ Bảng CATEGORIES
   - INSERT các danh mục test (Thu nhập hàng tháng, Mua sắm, Giải trí, etc)

2. ✅ Bảng WALLETS
   - INSERT ít nhất 1 ví với USER_ID = 1

3. ✅ Bảng TRANSACTIONS
   - INSERT test transactions với:
     * WALLET_ID, USER_ID, CATEGORY_ID (FK)
     * amount, type (expense/income/transfer)
     * description, location, transaction_date
   - Run: insert-test-transactions.sql

// ✅ CONFIGURATION CHECKLIST

1. ✅ application.yml
   - server.servlet.context-path: /api
   - spring.datasource.url: jdbc:postgresql://localhost:5432/smartspender
   - spring.jpa.hibernate.ddl-auto: update

2. ✅ CORS
   - TransactionController @CrossOrigin(origins = {...allow localhost:3000, 5173...})
   - WalletController cũng có CORS config

3. ✅ localStorage
   - user object phải có id field
   - Khi login, localStorage.setItem("user", JSON.stringify({id: 1, ...}))

// 🔧 TROUBLESHOOTING

ĐÊU 1: "Không thể lấy dữ liệu giao dịch"
→ Kiểm tra:
  - Backend đang chạy port 8080?
  - userId có trong localStorage?
  - Network tab có error 404/500?
  → Fix: Restart backend, kiểm tra userId, check server logs

MẬU 2: "Hiển thị loading vĩnh viễn"
→ Kiểm tra:
  - API /api/transactions?userId=1 có trả data không?
  - Fetch catch block có detect lỗi?
  - Network tab: response status, body
  → Fix: Test API trực tiếp bằng curl hoặc Postman

LỬI 3: "Số tiền không định dạng"
→ Kiểm tra:
  - formatVND() function hoạt động?
  - amount field có phải number?
  - Test: formatVND(1000000) → "1.000.000 ₫"

LỖI 4: "Category.name undefined"
→ Kiểm tra:
  - Backend convertToDTO() mapping categoryDTO không?
  - Response JSON có category object?
  - category.name có null check?

LỖI 5: "Transaction location không hiển thị"
→ Kiểm tra:
  - Database TRANSACTIONS.LOCATION có dữ liệu?
  - TransactionDTO mapping location?
  - Render có condition: {txn.location && <div>...}
*/
