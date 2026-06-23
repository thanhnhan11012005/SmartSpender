import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Eye, EyeOff } from "lucide-react";

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
  const [showPassword, setShowPassword] = React.useState(false);
  const [isForgotPassword, setIsForgotPassword] = React.useState(false);
  const [forgotEmail, setForgotEmail] = React.useState("");
  const [forgotMessage, setForgotMessage] = React.useState<{type: "success" | "error", text: string} | null>(null);

  const responseFacebook = async (response: any) => {
    if (response.accessToken) {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/facebook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accessToken: response.accessToken }),
        });
        if (!res.ok) throw new Error("Lỗi khi xác thực bằng Facebook");
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        if (onSuccess) onSuccess();
        else alert("Đăng nhập Facebook thành công");
      } catch (err: any) {
        alert(err.message ?? "Đăng nhập Facebook thất bại");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Đăng nhập Facebook bị hủy hoặc thất bại");
    }
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      try {
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ credential: tokenResponse.access_token }),
        });
        if (!res.ok) throw new Error("Lỗi khi xác thực bằng Google");
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        if (onSuccess) onSuccess();
        else alert("Đăng nhập Google thành công");
      } catch (err: any) {
        alert(err.message ?? "Đăng nhập Google thất bại");
      } finally {
        setLoading(false);
      }
    },
    onError: () => {
      alert("Đăng nhập Google thất bại");
    }
  });

  async function handleForgotPassword(e: React.FormEvent) {
    e.preventDefault();
    if (!forgotEmail) return;
    setLoading(true);
    setForgotMessage(null);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail.trim() }),
      });
      if (!res.ok) throw new Error("Gửi email thất bại. Vui lòng kiểm tra lại email.");
      setForgotMessage({ type: "success", text: "Mật khẩu mới đã được gửi vào email của bạn!" });
    } catch (err: any) {
      setForgotMessage({ type: "error", text: err.message ?? "Có lỗi xảy ra" });
    } finally {
      setLoading(false);
    }
  }

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
          {isForgotPassword ? (
            <div className="w-full">
              <div className="mb-7 text-center">
                <p className="text-sm font-semibold tracking-wide text-white/90">SmartSpender</p>
                <h2 className="mt-5 text-2xl font-bold">Quên mật khẩu</h2>
                <p className="mt-2 text-sm text-white/75">Nhập email của bạn để nhận mật khẩu mới.</p>
              </div>

              {forgotMessage && (
                <div className={`mb-4 rounded-xl p-3 text-sm ${forgotMessage.type === "success" ? "bg-green-500/20 text-green-100 border border-green-500/30" : "bg-red-500/20 text-red-100 border border-red-500/30"}`}>
                  {forgotMessage.text}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleForgotPassword}>
                <div>
                  <label className="mb-2 block text-xs font-medium text-white/85">Email của bạn</label>
                  <input
                    type="email"
                    required
                    placeholder="user@gmail.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-sky-200/70 focus:ring-2 focus:ring-sky-200/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="h-11 w-full rounded-xl bg-[#091935] text-sm font-semibold text-white shadow-[0_10px_22px_rgba(2,12,31,0.65)] transition hover:bg-[#0f244b] disabled:opacity-60"
                >
                  {loading ? "Đang gửi..." : "Gửi mật khẩu mới"}
                </button>
              </form>

              <div className="mt-5 text-center">
                <button type="button" onClick={() => setIsForgotPassword(false)} className="text-xs text-white/80 transition hover:text-white hover:underline">
                  Quay lại đăng nhập
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full">
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
                      type={showPassword ? "text" : "password"}
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 pr-10 text-sm text-white placeholder:text-white/55 outline-none transition focus:border-sky-200/70 focus:ring-2 focus:ring-sky-200/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/55 transition hover:text-white/85"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="text-left">
                  <button type="button" onClick={() => setIsForgotPassword(true)} className="text-xs text-white/80 transition hover:text-white">
                    Quên mật khẩu?
                  </button>
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

              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => loginGoogle()} disabled={loading} className="flex h-10 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-white/95 transition hover:bg-white/25 disabled:opacity-60">
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.5 12 2.5a9.5 9.5 0 1 0 0 19c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-2H12z" />
                  </svg>
                </button>
                <FacebookLogin
                  appId="27519853940999018"
                  autoLoad={false}
                  scope="public_profile"
                  fields="name,picture"
                  callback={responseFacebook}
                  render={(renderProps: any) => (
                    <button type="button" onClick={renderProps.onClick} disabled={loading} className="flex h-10 items-center justify-center rounded-xl border border-white/15 bg-white/15 text-white/95 transition hover:bg-white/25 disabled:opacity-60">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2">
                        <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.3h3.4l-.6 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z" />
                      </svg>
                    </button>
                  )}
                />
              </div>

              <p className="mt-5 text-center text-[11px] text-white/70">
                Don&apos;t have an account yet?{" "}
                <button type="button" onClick={onNavigateToRegister} className="font-semibold text-white hover:underline">
                  Đăng ký miễn phí
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
