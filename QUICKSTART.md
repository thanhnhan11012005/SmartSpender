# 🎯 QUICK START - GIAO DỊCH (TRANSACTIONS)

## 📌 3 Bước để test giao dịch hoạt động

### **1️⃣ Insert Test Data (5 phút)**
```bash
# Mở PostgreSQL
psql -U postgres -d SmartSpender

# Copy-paste nội dung từ: insert-test-transactions.sql
# Hoặc chạy: \i insert-test-transactions.sql
```

### **2️⃣ Chạy Backend (5 phút)**
```bash
cd BE
./mvnw.cmd spring-boot:run  # Windows
# hoặc: ./mvnw spring-boot:run  # Mac/Linux
```
✅ Chờ: `Started SmartSpenderApplication...`

### **3️⃣ Chạy Frontend & Test (5 phút)**
```bash
cd FE
npm run dev
```
✅ Truy cập: http://localhost:5173  
✅ Vào "Ví của tôi" → Scroll xuống "Lịch sử giao dịch"  
✅ Xem dữ liệu từ PostgreSQL

---

## ✅ Checklist Bắt Buộc

- [ ] Backend running on port 8080
- [ ] Frontend running on port 5173 (hoặc 3000)
- [ ] PostgreSQL kết nối bình thường
- [ ] Test data đã insert (7 transactions)
- [ ] Bảng giao dịch hiển thị dữ liệu (không loading vô tận)
- [ ] User đã login (localStorage có "user" object)

---

## 🧪 Test API (Optional)

```bash
# PowerShell
.\test-api.ps1

# Hoặc curl
curl "http://localhost:8080/api/transactions?userId=1"
```

---

## 🆘 Nếu Có Vấn Đề

📖 Xem chi tiết: **[SETUP_GUIDE_VN.md](SETUP_GUIDE_VN.md)**

Thường gặp:
- ❌ "Empty list" → Check: Database có dữ liệu không? userId khớp không?
- ❌ "Loading forever" → Check: Backend chạy? F12 → Console có error?
- ❌ "Dữ liệu cũ" → Refresh page, check localStorage userId

---

**Good to go!** 🚀
