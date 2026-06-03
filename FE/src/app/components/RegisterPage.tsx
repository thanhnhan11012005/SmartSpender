import React from "react";

export default function RegisterPage({
  onSuccess,
  onNavigateToLogin,
}: {
  onSuccess?: () => void;
  onNavigateToLogin?: () => void;
}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFormError(null);
    try {
      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedPhone = phone.trim();
      const trimmedPassword = password.trim();

      if (!trimmedName) {
        throw new Error("Vui lòng nhập họ tên");
      }
      if (!trimmedEmail) {
        throw new Error("Vui lòng nhập email");
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmedEmail)) {
        throw new Error("Vui lòng nhập email hợp lệ");
      }
      if (trimmedPhone && !/^\d{10}$/.test(trimmedPhone)) {
        throw new Error("Số điện thoại phải đúng 10 chữ số");
      }
      if (!trimmedPassword) {
        throw new Error("Vui lòng nhập mật khẩu");
      }
      if (trimmedPassword.length < 3) {
        throw new Error("Mật khẩu phải có ít nhất 3 ký tự");
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          password: trimmedPassword,
        }),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Đăng ký thất bại");
      }
      const user = await res.json();
      // Auto-login: save the returned user immediately after register.
      localStorage.setItem("user", JSON.stringify(user));
      if (onSuccess) onSuccess();
      else alert("Đăng ký thành công");
    } catch (err: any) {
      const message = err.message ?? "Đăng ký thất bại";
      setFormError(message);
      alert(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_15%_15%,#19a7ce_0%,#126d8c_36%,#0d4259_68%,#08202c_100%)] p-4 sm:p-6">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
      <div className="pointer-events-none absolute right-4 top-24 h-64 w-64 rounded-full bg-teal-200/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-sky-200/12 blur-3xl" />

      <div className="relative mx-auto mt-8 flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center rounded-[28px] border border-white/10 bg-[#08354a]/55 px-4 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_50px_rgba(1,18,46,0.35)]">
        <div className="pointer-events-none absolute left-16 top-24 h-8 w-24 rotate-[-36deg] rounded-full bg-gradient-to-r from-cyan-100/80 to-cyan-300/60 shadow-lg" />
        <div className="pointer-events-none absolute right-24 top-20 h-44 w-44 rotate-12 rounded-full border-[16px] border-cyan-900/45 border-t-cyan-400/40 border-l-cyan-400/40 blur-[1px]" />
        <div className="pointer-events-none absolute -right-10 -bottom-8 h-36 w-72 rounded-full bg-gradient-to-r from-sky-200/25 via-cyan-300/35 to-sky-200/25 blur-[1px]" />

        <div className="grid w-full max-w-[980px] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="hidden text-white lg:block">
              <p className="text-sm font-semibold tracking-[0.24em] text-cyan-100/80">SMARTSPENDER</p>
            <h1 className="mt-4 max-w-xl text-5xl font-black leading-tight text-white">
              Tạo tài khoản miễn phí và bắt đầu theo dõi tài chính rõ ràng.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/72">
              Đăng ký một lần để quản lý thu nhập, chi tiêu, ngân sách, ví tiền và gợi ý thông minh ở một nơi.
            </p>

            <div className="mt-8 grid max-w-lg gap-3 text-sm text-white/85 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur">
                Truy cập bảng điều khiển ngay sau khi đăng ký
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur">
                Có thể dùng số điện thoại để đăng nhập nhanh
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur">
                Miễn phí cho giai đoạn phát triển local
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur">
                Tự động đăng nhập sau khi đăng ký thành công
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full rounded-[28px] border border-white/20 bg-white/10 p-6 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7">
            <div className="mb-6 text-center">
              <p className="text-sm font-semibold tracking-wide text-white/90">SmartSpender</p>
              <h2 className="mt-5 text-3xl font-bold">Đăng ký miễn phí</h2>
              <p className="mt-2 text-sm text-white/75">Tạo tài khoản trong chưa tới một phút.</p>
            </div>

            {formError ? (
              <div className="mb-4 rounded-xl border border-red-300/40 bg-red-500/15 px-3 py-2 text-sm text-red-100">
                {formError}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-medium text-white/85">Họ và tên</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-cyan-200/70 focus:ring-2 focus:ring-cyan-200/30"
                  placeholder="Hồ Thanh Nhàn"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/85">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-cyan-200/70 focus:ring-2 focus:ring-cyan-200/30"
                  placeholder="ban@vidu.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/85">Số điện thoại</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputMode="numeric"
                  className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-cyan-200/70 focus:ring-2 focus:ring-cyan-200/30"
                  placeholder="0372592762"
                />
                <p className="mt-1 text-[11px] text-white/60">Không bắt buộc. Nếu nhập thì phải đúng 10 chữ số.</p>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/85">Mật khẩu</label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 pr-10 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-cyan-200/70 focus:ring-2 focus:ring-cyan-200/30"
                    placeholder="Tạo mật khẩu"
                  />
                  <svg className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" />
                    <circle cx="12" cy="12" r="2.4" strokeWidth={1.8} />
                  </svg>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-11 w-full rounded-xl bg-[#0b1f2f] text-sm font-semibold text-white shadow-[0_10px_22px_rgba(2,12,31,0.65)] transition hover:bg-[#12324a] disabled:opacity-60"
              >
                {loading ? "Đang đăng ký..." : "Tạo tài khoản"}
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-white/72">
              Đã có tài khoản?{" "}
              <button type="button" onClick={onNavigateToLogin} className="font-semibold text-white hover:underline">
                Quay lại đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
