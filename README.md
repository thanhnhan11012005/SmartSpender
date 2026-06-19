# 💰 SmartSpender - Personal Finance Management

SmartSpender là một ứng dụng quản lý tài chính cá nhân hiện đại, giúp người dùng dễ dàng theo dõi thu chi, quản lý các ví tiền, lập ngân sách thông minh và nhận được các báo cáo trực quan.

## ✨ Tính năng nổi bật

- 🔐 **Xác thực an toàn:** Hỗ trợ đăng nhập/đăng ký bằng tài khoản nội bộ và tích hợp đăng nhập mạng xã hội (Google OAuth2 & Facebook Login).
- 👛 **Quản lý đa ví:** Theo dõi số dư trên nhiều nguồn tiền khác nhau (Tiền mặt, Ngân hàng, Ví điện tử, Thẻ tín dụng).
- 📊 **Thống kê trực quan:** Các biểu đồ báo cáo tài chính đẹp mắt, giúp bạn có cái nhìn tổng quan về dòng tiền theo từng tháng.
- 🎯 **Lập ngân sách:** Đặt hạn mức chi tiêu cho từng danh mục và nhận cảnh báo khi vượt ngân sách.
- 🤖 **AI Assistant:** Giao diện trò chuyện (Chat) thông minh giúp phân tích tài chính (Tương lai).
- 📱 **Giao diện hiện đại:** Thiết kế UI/UX theo xu hướng tối màu (Dark Mode), hiệu ứng mượt mà và thân thiện với người dùng.

## 🛠 Công nghệ sử dụng

Dự án được chia thành 2 phần độc lập (Micro-services architecture):

### Frontend (FE)
- **Framework:** React 18, Vite
- **Styling:** Tailwind CSS, Radix UI, Framer Motion (Animations)
- **Biểu đồ:** Recharts
- **Tính năng mở rộng:** `@react-oauth/google`, `react-facebook-login`

### Backend (BE)
- **Framework:** Java Spring Boot 3
- **Bảo mật:** Spring Security, JWT (JSON Web Token), OAuth2 Validation
- **Database:** PostgreSQL
- **Công cụ ORM:** Spring Data JPA / Hibernate

---

## 🚀 Hướng dẫn cài đặt và chạy dự án (Local Development)

### 1. Chuẩn bị môi trường
- Cài đặt **Node.js** (phiên bản 18 trở lên).
- Cài đặt **Java JDK 17** trở lên.
- Cài đặt **PostgreSQL** và pgAdmin/DBeaver.

### 2. Thiết lập Cơ sở dữ liệu
1. Tạo một cơ sở dữ liệu trống trong PostgreSQL mang tên `smartspender`.
2. Mở file `BE/database.sql` và chạy toàn bộ mã SQL bên trong để khởi tạo cấu trúc bảng và dữ liệu mẫu (Seed Data).

### 3. Khởi chạy Backend (Spring Boot)
Di chuyển vào thư mục BE:
```bash
cd BE
```
Cấu hình kết nối Database trong file `src/main/resources/application.properties` (Đổi username/password cho phù hợp với máy của bạn).

Sau đó chạy ứng dụng:
```bash
# Đối với Windows
mvnw spring-boot:run

# Đối với Mac/Linux
./mvnw spring-boot:run
```
> Backend sẽ chạy ở địa chỉ: `http://localhost:8080`

### 4. Khởi chạy Frontend (React Vite)
Mở một terminal mới, di chuyển vào thư mục FE:
```bash
cd FE
```
Cài đặt thư viện và chạy ứng dụng:
```bash
npm install --legacy-peer-deps
npm run dev
```
> Frontend sẽ chạy ở địa chỉ: `http://localhost:5173`

---

## 🌎 Cấu hình Deploy (Dự kiến)
- **Database:** Supabase / Render
- **Backend:** Render.com / Railway.app
- **Frontend:** Vercel / Netlify

*(Cần cập nhật các biến môi trường `.env` và thiết lập CORS trước khi đẩy lên Cloud).*

---

*Được phát triển với niềm đam mê xây dựng giải pháp tài chính cá nhân thông minh.*
