import { useEffect, useMemo, useRef, useState } from "react";
import imgAvatarByewind from "../../imports/Sidebar/5d1e58c8086fe7ad86b64a6151f47a2a2aa8357a.png";
import { useTranslation } from "../../hooks/useTranslation";

type SettingsTab = "profile" | "preferences" | "notifications" | "data";

const timePeriods = [
  { value: "all", label: "Tất cả dữ liệu" },
  { value: "2026-05", label: "Tháng 5/2026" },
  { value: "2026-04", label: "Tháng 4/2026" },
  { value: "custom", label: "Tùy chỉnh" },
];

export default function SettingsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<SettingsTab>("profile");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarStorageKey, setAvatarStorageKey] = useState<string | null>(null);
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [pendingAvatar, setPendingAvatar] = useState<string | null>(null);
  const [language, setLanguage] = useState("vi");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [smsAlert, setSmsAlert] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);
  const [exportPeriod, setExportPeriod] = useState("2026-05");

  useEffect(() => {
    const loadProfile = async () => {
      setLoadingProfile(true);
      setProfileError(null);

      try {
        const rawUser = localStorage.getItem("user");
        if (!rawUser) {
          throw new Error("Không tìm thấy phiên đăng nhập. Vui lòng đăng nhập lại.");
        }

        const currentUser = JSON.parse(rawUser) as { id?: number; email?: string; name?: string; phone?: string };
        let endpoint = "";
        const nextAvatarKey = currentUser.id ? `userAvatar:${currentUser.id}` : currentUser.email ? `userAvatar:${currentUser.email}` : null;

        if (currentUser.id) {
          endpoint = `/api/users/${currentUser.id}`;
        } else if (currentUser.email) {
          endpoint = `/api/users/email/${encodeURIComponent(currentUser.email)}`;
        } else {
          throw new Error("Dữ liệu người dùng không hợp lệ. Vui lòng đăng nhập lại.");
        }

        const response = await fetch(endpoint, { headers: { "Content-Type": "application/json" } });
        if (!response.ok) {
          throw new Error("Không thể tải hồ sơ từ máy chủ.");
        }

        const user = await response.json();

        setProfile({
          name: user.name ?? "",
          phone: user.phone ?? "",
          email: user.email ?? "",
          address: user.address ?? "",
        });
        setLanguage(user.language ?? "vi");
        setDateFormat(user.dateFormat ?? "DD/MM/YYYY");
        setAvatarPreview(user.avatarUrl ?? null);
        setSmsAlert(user.smsAlert ?? false);
        setWeeklyReport(user.weeklyReport ?? false);
      } catch (error: any) {
        setProfileError(error?.message ?? "Không thể tải hồ sơ.");
      } finally {
        setLoadingProfile(false);
      }
    };

    loadProfile();
  }, []);

  const settingsMenu = useMemo(
    () => [
      { key: "profile" as const, label: t("settings.profile") },
      { key: "preferences" as const, label: t("settings.preferences") },
      { key: "notifications" as const, label: t("settings.notifications") },
      { key: "data" as const, label: t("settings.data") },
    ],
    [t]
  );

  const handleExport = () => {
    const rows = [
      ["Loai", "Gia tri"],
      ["Ky xuat", exportPeriod],
      ["Ngon ngu", language],
      ["Dang ngay", dateFormat],
      ["SMS canh bao", smsAlert ? "Bat" : "Tat"],
      ["Bao cao AI hang tuan", weeklyReport ? "Bat" : "Tat"],
    ];

    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/\"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `settings-export-${exportPeriod}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const openAvatarPicker = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setAvatarPreview(result);
      setPendingAvatar(result);
    };
    reader.readAsDataURL(file);

    event.target.value = "";
  };

  const saveProfile = async () => {
    setSavingProfile(true);
    setProfileError(null);

    try {
      const rawUser = localStorage.getItem("user");
      if (!rawUser) {
        throw new Error("Không tìm thấy phiên đăng nhập. Vui lòng đăng nhập lại.");
      }

      const currentUser = JSON.parse(rawUser) as { id?: number; email?: string };
      const userId = currentUser.id;

      if (!userId) {
        throw new Error("Không tìm thấy mã người dùng. Vui lòng đăng nhập lại.");
      }

      const response = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...profile,
          avatarUrl: pendingAvatar || avatarPreview,
          language,
          dateFormat,
          smsAlert,
          weeklyReport
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Không thể lưu thay đổi.");
      }

      const updatedUser = await response.json();
      localStorage.setItem("user", JSON.stringify(updatedUser));

      if (pendingAvatar) {
        setPendingAvatar(null);
      }

      window.dispatchEvent(new Event("user-updated"));
      window.dispatchEvent(new Event("avatar-updated"));
    } catch (error: any) {
      setProfileError(error?.message ?? "Không thể lưu thay đổi.");
    } finally {
      setSavingProfile(false);
    }
  };

  const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: (value: boolean) => void }) => (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${enabled ? "bg-[#8b5cf6]" : "bg-[rgba(0,0,0,0.15)]"}`}
      aria-pressed={enabled}
    >
      <span
        className={`inline-block size-5 transform rounded-full bg-white shadow-sm transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="rounded-2xl bg-white p-3 shadow-sm">
        <div className="mb-3 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[rgba(0,0,0,0.45)]">{t("settings.title")}</div>
        <nav className="space-y-1">
          {settingsMenu.map((item) => {
            const active = activeTab === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveTab(item.key)}
                className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-[14px] font-medium transition-colors ${
                  active ? "bg-[#8b5cf6] text-white shadow-sm" : "text-[rgba(0,0,0,0.72)] hover:bg-[rgba(0,0,0,0.04)]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">{t("settings.profile.title")}</h1>
              <p className="mt-1 text-sm text-[rgba(0,0,0,0.55)]">{t("settings.profile.desc")}</p>
            </div>

            {profileError ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {profileError}
              </div>
            ) : null}

            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[rgba(0,0,0,0.12)] bg-[rgba(0,0,0,0.02)] p-6">
                <div className="size-24 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[rgba(0,0,0,0.06)]">
                  <img src={avatarPreview || imgAvatarByewind} alt="Avatar" className="size-full object-cover" />
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                <button type="button" onClick={openAvatarPicker} className="rounded-full bg-[#8b5cf6] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7c3aed]">
                  {t("settings.profile.uploadAvatar")}
                </button>
                <p className="text-xs text-[rgba(0,0,0,0.45)]">{t("settings.profile.avatarInfo")}</p>
              </div>

              <div className="grid flex-1 gap-4">
                {[
                  { label: t("settings.profile.fullname"), value: profile.name, key: "name" as const },
                  { label: t("settings.profile.phone"), value: profile.phone, key: "phone" as const },
                  { label: t("settings.profile.email"), value: profile.email, key: "email" as const },
                  { label: t("settings.profile.address"), value: profile.address, key: "address" as const },
                ].map((field) => (
                  <label key={field.key} className="grid gap-2">
                    <span className="text-sm font-medium text-[rgba(0,0,0,0.72)]">{field.label}</span>
                    <input
                      value={field.value}
                      onChange={(e) => setProfile((prev) => ({ ...prev, [field.key]: e.target.value }))}
                      placeholder={field.key === "address" ? "Gia Lai" : undefined}
                      disabled={loadingProfile}
                      className="h-12 rounded-xl border border-[rgba(0,0,0,0.08)] px-4 text-[14px] outline-none transition-colors focus:border-[#8b5cf6]"
                    />
                  </label>
                ))}

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={saveProfile}
                    disabled={loadingProfile || savingProfile}
                    className="rounded-xl bg-[#8b5cf6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#7c3aed] disabled:opacity-60"
                  >
                    {loadingProfile ? t("settings.profile.loading") : savingProfile ? t("settings.profile.saving") : t("settings.profile.save")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "preferences" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">{t("settings.pref.title")}</h1>
              <p className="mt-1 text-sm text-[rgba(0,0,0,0.55)]">{t("settings.pref.desc")}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-[rgba(0,0,0,0.72)]">{t("settings.pref.language")}</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="h-12 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white px-4 text-[14px] outline-none transition-colors focus:border-[#8b5cf6]"
                >
                  <option value="vi">{t("settings.pref.lang.vi")}</option>
                  <option value="en">{t("settings.pref.lang.en")}</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-[rgba(0,0,0,0.72)]">{t("settings.pref.dateFormat")}</span>
                <select
                  value={dateFormat}
                  onChange={(e) => setDateFormat(e.target.value)}
                  className="h-12 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white px-4 text-[14px] outline-none transition-colors focus:border-[#8b5cf6]"
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </label>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={saveProfile}
                disabled={loadingProfile || savingProfile}
                className="rounded-xl bg-[#8b5cf6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#7c3aed] disabled:opacity-60"
              >
                {savingProfile ? t("settings.profile.saving") : t("settings.profile.save")}
              </button>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">{t("settings.notif.title")}</h1>
              <p className="mt-1 text-sm text-[rgba(0,0,0,0.55)]">{t("settings.notif.desc")}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.02)] p-4">
                <div>
                  <p className="font-medium text-black">{t("settings.notif.sms.title")}</p>
                  <p className="text-sm text-[rgba(0,0,0,0.5)]">{t("settings.notif.sms.desc")}</p>
                </div>
                <Toggle enabled={smsAlert} onChange={setSmsAlert} />
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.02)] p-4">
                <div>
                  <p className="font-medium text-black">{t("settings.notif.email.title")}</p>
                  <p className="text-sm text-[rgba(0,0,0,0.5)]">{t("settings.notif.email.desc")}</p>
                </div>
                <Toggle enabled={weeklyReport} onChange={setWeeklyReport} />
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="button"
                onClick={saveProfile}
                disabled={loadingProfile || savingProfile}
                className="rounded-xl bg-[#8b5cf6] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#7c3aed] disabled:opacity-60"
              >
                {savingProfile ? t("settings.profile.saving") : t("settings.profile.save")}
              </button>
            </div>
          </div>
        )}

        {activeTab === "data" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">{t("settings.data.title")}</h1>
              <p className="mt-1 text-sm text-[rgba(0,0,0,0.55)]">{t("settings.data.desc")}</p>
            </div>

            <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-[rgba(0,0,0,0.02)] p-4">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[rgba(0,0,0,0.72)]">{t("settings.data.period")}</span>
                  <select
                    value={exportPeriod}
                    onChange={(e) => setExportPeriod(e.target.value)}
                    className="h-12 rounded-xl border border-[rgba(0,0,0,0.08)] bg-white px-4 text-[14px] outline-none transition-colors focus:border-[#8b5cf6]"
                  >
                    {timePeriods.map((period) => (
                      <option key={period.value} value={period.value}>
                        {period.label}
                      </option>
                    ))}
                  </select>
                </label>

                <button
                  type="button"
                  onClick={handleExport}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[rgba(0,0,0,0.12)] bg-white px-4 text-sm font-semibold text-black transition-colors hover:bg-[rgba(0,0,0,0.03)]"
                >
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                  </svg>
                  {t("settings.data.export")}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
              <h2 className="text-lg font-bold text-red-700">{t("settings.data.dangerZone")}</h2>
              <p className="mt-1 text-sm text-red-600/80">
                {t("settings.data.dangerDesc")}
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  className="rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                >
                  {t("settings.data.deleteAccount")}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}