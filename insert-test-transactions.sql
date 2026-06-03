-- ===========================
-- Thêm TEST DATA vào các bảng
-- ===========================

-- 1. Thêm các danh mục giao dịch
INSERT INTO CATEGORIES (USER_ID, NAME, ICON, COLOR) VALUES
(1, 'Thu nhập hàng tháng', '💰', '#4CAF50'),
(1, 'Thu nhập phụ', '📊', '#2196F3'),
(1, 'Mua sắm', '🛒', '#FF9800'),
(1, 'Giải trí', '🎬', '#E91E63'),
(1, 'Liên lạc', '📱', '#9C27B0'),
(1, 'Quy Nhơn, Gia Lai', '📍', '#607D8B');

-- 2. Lấy ID danh mục vừa tạo (sử dụng trong các giao dịch)
-- Giả sử ID từ 1-6 được tạo

-- 3. Thêm các giao dịch test vào ví đầu tiên
-- Giả sử ví có ID = 1, user có ID = 1

-- 3.1 Thu nhập hàng tháng
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES (1, 1, 1, 15000000.00, 'income', 'Lương', NULL, '2026-05-01');

-- 3.2 Mua sắm siêu thị
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES (1, 1, 3, 850000.00, 'expense', 'Siêu thị', 'Mua sắm', '2026-05-03');

-- 3.3 Chi tiêu Surf Bar
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES (1, 1, 3, 200000.00, 'expense', 'Surf Bar', 'Quy Nhơn, Gia Lai', '2026-05-08');

-- 3.4 Netflix (Giải trí)
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES (1, 1, 4, 150000.00, 'expense', 'Netflix', 'Giải trí', '2026-05-10');

-- 3.5 Thu nhập phụ từ dự án
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES (1, 1, 2, 5000000.00, 'income', 'Dự án tự do', 'Thu nhập phụ', '2026-05-12');

-- 3.6 Mua hàng Amazon
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES (1, 1, 3, 1200000.00, 'expense', 'Amazon', 'Mua sắm', '2026-05-13');

-- 3.7 Chi phí Viber (Communication)
INSERT INTO TRANSACTIONS (WALLET_ID, USER_ID, CATEGORY_ID, AMOUNT, TYPE, DESCRIPTION, LOCATION, TRANSACTION_DATE)
VALUES (1, 1, 5, 50000.00, 'expense', 'Viber', 'Liên lạc', '2026-05-15');

-- 4. Verify: Kiểm tra dữ liệu đã insert
SELECT 
    t.ID,
    t.DESCRIPTION,
    c.NAME as CATEGORY_NAME,
    t.AMOUNT,
    t.TYPE,
    t.LOCATION,
    t.TRANSACTION_DATE
FROM TRANSACTIONS t
LEFT JOIN CATEGORIES c ON t.CATEGORY_ID = c.ID
WHERE t.USER_ID = 1
ORDER BY t.TRANSACTION_DATE DESC;
