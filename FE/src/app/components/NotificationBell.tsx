import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { useFormat } from "../../utils/useFormat";

interface Notification {
  id: number;
  title: string;
  message: string;
  type: string;
  isRead: boolean;
  createdAt: string;
}

export default function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { formatDate } = useFormat();

  const userId = (() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) return JSON.parse(raw).id;
    } catch {}
    return null;
  })();

  const fetchNotifications = async () => {
    if (!userId) return;
    try {
      const res = await fetch(`/api/notifications/user/${userId}`);
      if (res.ok) {
        const data = await res.json();
        setNotifications(data);
        setUnreadCount(data.filter((n: Notification) => !n.isRead).length);
      }
    } catch (err) {
      console.error("Failed to load notifications", err);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [userId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarkAsRead = async (id: number) => {
    try {
      await fetch(`/api/notifications/${id}/read`, { method: "PUT" });
      setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (err) {}
  };

  const handleMarkAllAsRead = async () => {
    if (!userId) return;
    try {
      await fetch(`/api/notifications/user/${userId}/read-all`, { method: "PUT" });
      setNotifications(notifications.map(n => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (err) {}
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "SYSTEM": return t("notification.typeSystem");
      case "BUDGET_ALERT": return t("notification.typeBudget");
      case "REMINDER": return t("notification.typeReminder");
      default: return type;
    }
  };

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center h-10 w-10 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm"
        aria-label="Notifications"
      >
        <svg className="w-[22px] h-[22px] text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-[400px] rounded-[20px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ring-1 ring-black/5 overflow-hidden flex flex-col max-h-[80vh]">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
            <h3 className="font-bold text-[16px] text-gray-900">{t("notification.title")}</h3>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                className="text-[13px] font-semibold text-[#8b5cf6] hover:text-[#7c3aed]"
              >
                {t("notification.markAllRead")}
              </button>
            )}
          </div>

          {/* List */}
          <div className="overflow-y-auto flex-1 bg-gray-50/50">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-sm text-gray-500">
                {t("notification.empty")}
              </div>
            ) : (
              <div className="divide-y divide-gray-100/80">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => {
                      if (!notif.isRead) handleMarkAsRead(notif.id);
                    }}
                    className={`flex gap-3 p-4 cursor-pointer transition-all hover:bg-white ${
                      notif.isRead ? "opacity-75 bg-white" : "bg-[#f5f3ff]"
                    }`}
                  >
                    <div className="shrink-0 mt-1">
                      <div className={`size-8 rounded-full flex items-center justify-center ${notif.isRead ? 'bg-gray-100 text-gray-500' : 'bg-[#ede9fe] text-[#8b5cf6]'}`}>
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className={`font-semibold text-[14px] ${notif.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
                          {notif.title}
                        </span>
                        <span className="shrink-0 text-[10px] tracking-wide uppercase font-bold px-2 py-0.5 rounded-md bg-gray-100 text-gray-500">
                          {getTypeLabel(notif.type)}
                        </span>
                      </div>
                      <p className={`text-[13px] leading-relaxed mb-2 ${notif.isRead ? 'text-gray-500' : 'text-gray-600'}`}>
                        {notif.message}
                      </p>
                      <span className="text-[11px] font-medium text-gray-400">
                        {formatDate(notif.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
