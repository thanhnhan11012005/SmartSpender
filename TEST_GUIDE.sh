#!/bin/bash
# ===================================
# HƯỚNG DẪN TEST BỬC-FE GIAO DỊCH
# ===================================

echo "=== BƯỚC 1: Chạy Backend Spring Boot ==="
echo "1. Mở Terminal và chạy:"
echo "   cd BE"
echo "   ./mvnw spring-boot:run"
echo ""

echo "=== BƯỚC 2: Insert Test Data vào PostgreSQL ==="
echo "1. Kết nối PostgreSQL:"
echo "   psql -U postgres -d smartspender"
echo ""
echo "2. Chạy script SQL:"
echo "   \\i insert-test-transactions.sql"
echo ""
echo "3. Kiểm tra dữ liệu đã insert:"
echo "   SELECT * FROM TRANSACTIONS WHERE USER_ID = 1 ORDER BY TRANSACTION_DATE DESC;"
echo ""

echo "=== BƯỚC 3: Test API Endpoint ==="
echo "1. Mở URL trong browser hoặc Postman:"
echo "   http://localhost:8080/api/transactions?userId=1"
echo ""
echo "2. Kiểm tra response:"
echo "   - Status code: 200"
echo "   - Response body: Mảng các transaction objects"
echo "   - Mỗi transaction có: id, walletId, userId, categoryId, category, amount, type, description, location, transactionDate"
echo ""

echo "=== BƯỚC 4: Kiểm tra Frontend ==="
echo "1. Mở browser DevTools (F12)"
echo "2. Tab Network: kiểm tra request tới /api/transactions?userId=..."
echo "3. Tab Console: kiểm tra xem có error không (fetch failed, JSON parse error, etc)"
echo "4. Mở trang 'Lịch sử giao dịch' và xem dữ liệu được hiển thị"
echo ""

echo "=== BƯỚC 5: Nếu gặp vấn đề ==="
echo "1. Kiểm tra CORS: Backend có allow localhost:3000 và localhost:5173 không"
echo "2. Kiểm tra userId trong localStorage: mở DevTools > Application > Local Storage"
echo "3. Kiểm tra category.name hiển thị không: transaction có categoryId và category object không"
echo "4. Kiểm tra số tiền định dạng: type='income' là xanh + dấu +, type='expense' là đỏ + dấu -"
echo ""

echo "=== CURL COMMAND KỂM TRA API ==="
echo "curl -X GET 'http://localhost:8080/api/transactions?userId=1' \\"
echo "  -H 'Content-Type: application/json'"
echo ""
