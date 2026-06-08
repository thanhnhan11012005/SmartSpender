import React, { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";

type SidebarPage = "overview" | "transactions" | "wallet" | "budget" | "ai" | "settings" | "login" | "register";

export default function FinanceSidebar({
  active,
  onNavigate,
}: {
  active?: SidebarPage;
  onNavigate?: (p: SidebarPage) => void;
}) {
  const [displayName, setDisplayName] = useState<string>("Nguyễn Hồ Hoàng Tiến");
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null);
  const { t } = useTranslation();

  // Keep avatar/user in sync with localStorage per-user keys: userAvatar:{id}
  useEffect(() => {
    const sync = () => {
      try {
        const raw = localStorage.getItem("user");
        if (!raw) {
          setDisplayName("Người dùng");
          setAvatarSrc(null);
          return;
        }
        const parsed = JSON.parse(raw) as { id?: number; email?: string; name?: string; avatarUrl?: string };
        setDisplayName(parsed.name || "Người dùng");
        setAvatarSrc(parsed.avatarUrl || null);
      } catch {
        setDisplayName("Người dùng");
        setAvatarSrc(null);
      }
    };

    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("user-updated", sync as EventListener);
    window.addEventListener("avatar-updated", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("user-updated", sync as EventListener);
      window.removeEventListener("avatar-updated", sync as EventListener);
    };
  }, []);

  // Icon helpers (thin stroke, currentColor so color classes apply)
  const Icon = ({ children }: { children: React.ReactNode }) => (
    <span className="size-5 inline-flex items-center justify-center">{children}</span>
  );

  // BỘ ICON ĐÃ ĐƯỢC CHUẨN HÓA ĐỒNG BỘ STROKE 2PX CAO CẤP
  const menu = [
    { 
      key: "overview" as SidebarPage, 
      label: t("sidebar.overview"), 
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      ) 
    },
    { 
      key: "transactions" as SidebarPage, 
      label: t("sidebar.transactions"), 
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ) 
    },
    { 
      key: "wallet" as SidebarPage, 
      label: t("sidebar.wallet"), 
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9" />
          <circle cx="16" cy="14" r="1" />
        </svg>
      ) 
    },
    { 
      key: "budget" as SidebarPage, 
      label: t("sidebar.budget"), 
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ) 
    },
    { 
      key: "ai" as SidebarPage, 
      label: t("sidebar.ai"), 
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
        </svg>
      ) 
    },
  ];

  const accountMenu = [
    { 
      key: "settings" as SidebarPage, 
      label: t("sidebar.settings"), 
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ) 
    },
  ];

  return (
    <aside className="flex h-full min-h-0 w-full shrink-0 flex-col overflow-hidden border-r border-gray-100 bg-white px-4 py-6 select-none">
      {/* Top: avatar + main menu */}
      <div className="min-h-0 flex-1 space-y-6 overflow-y-auto">
        <div className="flex items-center gap-3 px-1">
          <div className="h-11 w-11 rounded-full overflow-hidden bg-gray-100 ring-2 ring-purple-100 shadow-sm relative flex-shrink-0">
            {avatarSrc ? (
              <img src={avatarSrc} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-700 font-semibold text-sm">
                {displayName.split(" ").map(p => p[0]).slice(0, 2).join("")}
              </div>
            )}
          </div>
          <div className="truncate">
            <div className="text-sm font-semibold text-gray-900 truncate tracking-wide">{displayName}</div>
            <div className="text-xs text-green-500 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block"></span>
              Đang hoạt động
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3">Menu Chính</div>
          <nav className="flex flex-col gap-1">
            {menu.map((m) => {
              const isActive = active === m.key;
              return (
                <button
                  key={m.key}
                  onClick={() => onNavigate?.(m.key)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 h-11 text-sm w-full transition-all duration-200 group ${
                    isActive
                      ? "bg-purple-50 text-purple-600 font-medium"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Icon>
                    <span className={`transition-colors ${isActive ? "text-purple-600" : "text-gray-400 group-hover:text-gray-600"}`}>{m.icon}</span>
                  </Icon>
                  <span className="truncate text-left">{m.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom: account actions */}
      <div className="shrink-0 border-t border-gray-50 pb-2 pt-4">
        <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3">Tài khoản</div>
        <div className="flex flex-col gap-1">
          {accountMenu.map((a) => {
            const isActive = active === a.key;
            return (
              <button
                key={a.key}
                onClick={() => onNavigate?.(a.key)}
                className={`flex items-center gap-3 rounded-xl px-3 h-11 text-sm w-full transition-all duration-200 group ${
                  isActive ? "bg-purple-50 text-purple-600 font-medium" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Icon>
                  <span className={`transition-colors ${isActive ? "text-purple-600" : "text-gray-400 group-hover:text-gray-600"}`}>{a.icon}</span>
                </Icon>
                <span className="truncate text-left">{a.label}</span>
              </button>
            );
          })}

          <button
            onClick={() => {
              try {
                const raw = localStorage.getItem("user");
                if (raw) {
                  const u = JSON.parse(raw) as { id?: number; email?: string };
                  const key = u.id ? `userAvatar:${u.id}` : u.email ? `userAvatar:${u.email}` : null;
                  if (key) localStorage.removeItem(key);
                }
                localStorage.removeItem("user");
              } catch {}
              onNavigate?.("login");
            }}
            className="flex items-center gap-3 rounded-xl px-3 h-11 text-sm w-full transition-all duration-200 text-red-500 hover:text-red-600 hover:bg-red-50/60 group"
          >
            <Icon>
              <span className="text-red-400 group-hover:text-red-500">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
                </svg>
              </span>
            </Icon>
            <span className="truncate text-left">{t("sidebar.logout")}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}