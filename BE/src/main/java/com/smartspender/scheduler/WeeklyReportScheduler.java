package com.smartspender.scheduler;

import com.smartspender.entity.Transaction;
import com.smartspender.entity.User;
import com.smartspender.enums.TransactionType;
import com.smartspender.repository.TransactionRepository;
import com.smartspender.repository.UserRepository;
import com.smartspender.service.EmailService;
import com.smartspender.config.GeminiAIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Component
public class WeeklyReportScheduler {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private GeminiAIService geminiAIService;

    // Runs every Monday at 08:00 AM
    @Scheduled(cron = "0 0 8 * * MON")
    public void sendWeeklyReports() {
        System.out.println("Starting Weekly Report Job...");
        List<User> users = userRepository.findAll();
        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusDays(7);

        for (User user : users) {
            if (Boolean.TRUE.equals(user.getWeeklyReport()) && user.getEmail() != null && !user.getEmail().isEmpty()) {
                generateAndSendReport(user, startDate, endDate);
            }
        }
        System.out.println("Finished Weekly Report Job.");
    }

    private void generateAndSendReport(User user, LocalDate startDate, LocalDate endDate) {
        List<Transaction> transactions = transactionRepository.findByUserIdAndDateRange(
                user.getId(), startDate, endDate
        );

        BigDecimal totalIncome = BigDecimal.ZERO;
        BigDecimal totalExpense = BigDecimal.ZERO;

        for (Transaction t : transactions) {
            if (t.getType() == TransactionType.INCOME) {
                totalIncome = totalIncome.add(t.getAmount());
            } else if (t.getType() == TransactionType.EXPENSE) {
                totalExpense = totalExpense.add(t.getAmount());
            }
        }

        String aiComment = "Chúc bạn một tuần mới nhiều năng lượng!";
        if (transactions.size() > 0) {
            try {
                String prompt = String.format("Tôi đã chi tiêu %s VND và thu nhập %s VND trong tuần qua. Hãy viết một nhận xét (dưới 50 từ) thân thiện và chuyên nghiệp để chèn vào email báo cáo tài chính hàng tuần của tôi.", 
                        totalExpense.toPlainString(), totalIncome.toPlainString());
                aiComment = geminiAIService.call(prompt);
            } catch (Exception e) {
                System.err.println("Failed to get AI comment: " + e.getMessage());
            }
        }

        String subject = "SmartSpender - Báo cáo tài chính hàng tuần của bạn";
        String htmlBody = buildHtmlEmail(user.getName(), startDate, endDate, totalIncome, totalExpense, transactions.size(), aiComment);

        emailService.sendHtmlEmail(user.getEmail(), subject, htmlBody);
    }

    private String buildHtmlEmail(String name, LocalDate startDate, LocalDate endDate, BigDecimal income, BigDecimal expense, int transactionCount, String aiComment) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formattedStart = startDate.format(formatter);
        String formattedEnd = endDate.format(formatter);

        return "<html>" +
                "<body style='font-family: Arial, sans-serif; background-color: #f4f4f5; padding: 20px;'>" +
                "<div style='max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);'>" +
                "<h2 style='color: #8b5cf6; text-align: center; margin-bottom: 5px;'>SmartSpender</h2>" +
                "<p style='color: #374151; font-size: 16px;'>Chào <b>" + (name != null ? name : "bạn") + "</b>,</p>" +
                "<p style='color: #4b5563; line-height: 1.6;'>Dưới đây là tóm tắt tình hình tài chính của bạn trong tuần qua (từ " + formattedStart + " đến " + formattedEnd + "):</p>" +
                "<table style='width: 100%; border-collapse: collapse; margin-top: 20px;'>" +
                "<tr><td style='padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;'>Số lượng giao dịch</td>" +
                "<td style='padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; text-align: right;'>" + transactionCount + "</td></tr>" +
                "<tr><td style='padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;'>Tổng thu nhập</td>" +
                "<td style='padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #10b981; text-align: right;'>+" + String.format("%,d", income.longValue()) + " đ</td></tr>" +
                "<tr><td style='padding: 10px; border-bottom: 1px solid #e5e7eb; color: #6b7280;'>Tổng chi tiêu</td>" +
                "<td style='padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #ef4444; text-align: right;'>-" + String.format("%,d", expense.longValue()) + " đ</td></tr>" +
                "</table>" +
                "<div style='margin-top: 20px; background-color: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6;'>" +
                "<p style='color: #4b5563; font-size: 14px; margin: 0; font-style: italic;'><b>💡 Nhận xét từ AI:</b><br/>" + aiComment + "</p>" +
                "</div>" +
                "<div style='text-align: center; margin-top: 30px;'>" +
                "<a href='http://localhost:5173' style='background-color: #8b5cf6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;'>Mở Ứng dụng</a>" +
                "</div>" +
                "</div>" +
                "</body>" +
                "</html>";
    }
}
