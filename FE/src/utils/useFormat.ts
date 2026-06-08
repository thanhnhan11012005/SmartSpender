import { useState, useEffect } from "react";

export function useFormat() {
  const [language, setLanguage] = useState<string>("vi");
  const [currency] = useState<string>("VND"); // default to VND as currency option is removed
  const [dateFormat, setDateFormat] = useState<string>("DD/MM/YYYY");

  useEffect(() => {
    const sync = () => {
      try {
        const raw = localStorage.getItem("user");
        if (raw) {
          const parsed = JSON.parse(raw) as { language?: string; dateFormat?: string };
          setLanguage(parsed.language || "vi");
          setDateFormat(parsed.dateFormat || "DD/MM/YYYY");
        }
      } catch (e) {
        setLanguage("vi");
        setDateFormat("DD/MM/YYYY");
      }
    };

    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("user-updated", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("user-updated", sync as EventListener);
    };
  }, []);

  const formatCurrency = (amount: number | string | null | undefined): string => {
    if (amount === null || amount === undefined) return "";
    const val = typeof amount === "string" ? parseFloat(amount) : amount;
    if (isNaN(val)) return "";

    const isUSD = currency === "USD";
    const displayVal = isUSD ? val / 25000 : val;

    if (isUSD) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(displayVal);
    } else {
      return new Intl.NumberFormat("vi-VN").format(displayVal) + " đ";
    }
  };

  const formatDate = (dateString: string | null | undefined): string => {
    if (!dateString) return "";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString; // fallback

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    if (dateFormat === "MM/DD/YYYY") return `${month}/${day}/${year}`;
    if (dateFormat === "YYYY-MM-DD") return `${year}-${month}-${day}`;
    return `${day}/${month}/${year}`; // default DD/MM/YYYY
  };

  return { formatCurrency, formatDate, currency, language, dateFormat };
}
