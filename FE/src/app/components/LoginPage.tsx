import React from "react";

export default function LoginPage({
  onSuccess,
  onNavigateToRegister,
}: {
  onSuccess?: () => void;
  onNavigateToRegister?: () => void;
}) {
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const trimmed = identifier.trim();
      const isPhone = /^\d{10}$/.test(trimmed);
      const isEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed);
      if (!isPhone && !isEmail) throw new Error("Vui lòng nhập email hợp lệ hoặc số điện thoại 10 chữ số");

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isPhone
            ? { phone: trimmed, password }
            : { email: trimmed, password }
        ),
      });
      if (!res.ok) throw new Error("Sai thông tin đăng nhập");
      const user = await res.json();
      // simple client-side storage — adapt to your auth strategy
      localStorage.setItem("user", JSON.stringify(user));
      if (onSuccess) onSuccess();
      else alert("Đăng nhập thành công");
    } catch (err: any) {
      alert(err.message ?? "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_15%_15%,#1d6fd8_0%,#0f57b7_30%,#0b3f88_60%,#072c61_100%)] p-4 sm:p-6">
      {/* Atmosphere glow */}
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-8 top-28 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-sky-200/15 blur-3xl" />

      {/* Background stage */}
      <div className="relative mx-auto mt-8 flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center rounded-[28px] border border-white/10 bg-[#0c468f]/65 px-4 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(1,18,46,0.35)]">
        {/* Abstract 3D-like shapes */}
        <div className="pointer-events-none absolute left-16 top-24 h-8 w-24 rotate-[-36deg] rounded-full bg-gradient-to-r from-blue-100/90 to-blue-300/70 shadow-lg" />
        <div className="pointer-events-none absolute left-24 top-40 h-6 w-16 rotate-[-40deg] rounded-full bg-gradient-to-r from-blue-100/70 to-blue-300/60 shadow-lg" />
        <div className="pointer-events-none absolute left-1/4 top-[56%] h-16 w-28 -rotate-12 rounded-full border-8 border-sky-200/35 border-t-transparent border-l-transparent blur-[1px]" />
        <div className="pointer-events-none absolute right-28 top-20 h-44 w-44 rotate-12 rounded-full border-[16px] border-blue-900/50 border-t-blue-500/45 border-l-blue-500/45 blur-[1px]" />
        <div className="pointer-events-none absolute right-20 bottom-24 h-20 w-40 rounded-full bg-gradient-to-r from-sky-200/40 via-blue-300/40 to-sky-200/40 blur-[1px]" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-56 w-56 rounded-full border-[18px] border-blue-200/15 border-r-transparent border-t-transparent" />
        <div className="pointer-events-none absolute -right-10 -bottom-8 h-36 w-72 rounded-full bg-gradient-to-r from-sky-200/35 via-blue-300/40 to-sky-200/35 blur-[1px]" />

        {/* Glass card */}
        <div className="relative z-10 w-full max-w-[360px] rounded-[28px] border border-white/20 bg-white/10 p-6 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7">
          <div className="mb-7 text-center">
            <p className="text-sm font-semibold tracking-wide text-white/90">SmartSpender</p>
            <h2 className="mt-5 text-3xl font-bold">Đăng nhập</h2>
            <p className="mt-2 text-sm text-white/75">Đăng nhập bằng email hoặc số điện thoại.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-xs font-medium text-white/85">Email hoặc số điện thoại</label>
              <input
                type="text"
                inputMode="email"
                autoComplete="username"
                placeholder="user1@gmail.com hoặc 0123456789"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-sky-200/70 focus:ring-2 focus:ring-sky-200/30"
              />
              <p className="mt-1 text-[11px] text-white/60">Bạn có thể dùng email hoặc số điện thoại 10 chữ số.</p>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-white/85">Mật khẩu</label>
              <div className="relative">
                <input
                  type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 pr-10 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-sky-200/70 focus:ring-2 focus:ring-sky-200/30"
                />
                <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
                  <circle cx="12" cy="12" r="2.4" strokeWidth={1.8} />
                </svg>
              </div>
            </div>

            <div className="text-left">
              <a href="#" className="text-xs text-white/80 transition hover:text-white">
                Quên mật khẩu?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-xl bg-[#091935] text-sm font-semibold text-white shadow-[0_10px_22px_rgba(2,12,31,0.65)] transition hover:bg-[#0f244b] disabled:opacity-60"
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

          <div className="relative my-4 flex items-center">
            <div className="h-px flex-1 bg-white/20" />
            <span className="px-3 text-xs text-white/65">hoặc tiếp tục với</span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <button type="button" className="flex h-10 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-white/95 transition hover:bg-white/25">
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.5 12 2.5a9.5 9.5 0 1 0 0 19c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-2H12z" />
              </svg>
            </button>
            <button type="button" className="flex h-10 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-white/95 transition hover:bg-white/25">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 .5C5.6.5.5 5.7.5 12.1c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6V20c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.8-2.7-.3-5.6-1.4-5.6-6a4.7 4.7 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.5 1.3.2 2.6.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.9 5.7-5.7 6 .5.4.9 1.1.9 2.3v3.4c0 .4.2.8.8.6a11.7 11.7 0 0 0 8.1-11.2C23.5 5.7 18.4.5 12 .5z" />
              </svg>
            </button>
            <button type="button" className="flex h-10 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-white/95 transition hover:bg-white/25">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2">
                <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.6 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z" />
              </svg>
            </button>
          </div>

          <p className="mt-5 text-center text-[11px] text-white/70">
            Don&apos;t have an account yet?{" "}
            <button type="button" onClick={onNavigateToRegister} className="font-semibold text-white hover:underline">
              Đăng ký miễn phí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
