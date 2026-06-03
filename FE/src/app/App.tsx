import { useState } from "react";
import FinanceSidebar from "./components/FinanceSidebar";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
// Right bar removed
import FinanceStatsCards from "./components/FinanceStatsCards";
import CashFlowChart from "./components/CashFlowChart";
import RecentTransactions from "./components/RecentTransactions";
import TransactionHistory from "./components/TransactionHistory";
import ExpenseCategories from "./components/ExpenseCategories";
import MyWallet from "./components/MyWallet";
import Budget from "./components/Budget";
import AIInsights from "./components/AIInsights";
import SettingsPage from "./components/SettingsPage";

export default function App() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [page, setPage] = useState<"overview" | "transactions" | "wallet" | "budget" | "ai" | "settings" | "login" | "register">(
    () => (localStorage.getItem("user") ? "overview" : "login")
  );

  // if on login/register show the auth page alone
  if (page === "login") {
    return <LoginPage onSuccess={() => setPage("overview")} onNavigateToRegister={() => setPage("register")} />;
  }
  if (page === "register") {
    return <RegisterPage onSuccess={() => setPage("overview")} onNavigateToLogin={() => setPage("login")} />;
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f5f5f7]">
      {/* Mobile Menu Button - Left */}
      <button
        onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
        className="fixed left-4 top-4 z-50 flex size-10 items-center justify-center rounded-lg bg-white shadow-lg lg:hidden"
        aria-label="Toggle menu"
      >
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>


      {/* Overlay for mobile */}
      {leftSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => {
            setLeftSidebarOpen(false);
          }}
        />
      )}

      {/* Left Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 h-screen w-[280px] transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 lg:static lg:h-full lg:w-[212px] lg:overflow-hidden lg:shadow-none ${
          leftSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <FinanceSidebar active={page} onNavigate={setPage} />
      </div>

      {/* Main Content */}
      <div className="min-w-0 flex-1 overflow-y-auto overflow-x-hidden">
        <div className="p-4 pt-16 sm:p-6 sm:pt-6 lg:p-[20px]">
          {page === "overview" ? (
            <>
              {/* Stats Cards */}
              <div className="mb-4 sm:mb-6 lg:mb-[20px]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[28px]">
                  <FinanceStatsCards />
                </div>
              </div>

              {/* Cash Flow Chart */}
              <div className="mb-4 sm:mb-6 lg:mb-[20px]">
                <CashFlowChart />
              </div>

              {/* Bottom Widgets */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[20px]">
                <RecentTransactions onViewAll={() => setPage("transactions")} />
                <ExpenseCategories />
              </div>
            </>
          ) : page === "transactions" ? (
            <div className="mb-4 sm:mb-6 lg:mb-[20px]">
              <TransactionHistory />
            </div>
          ) : page === "wallet" ? (
            <MyWallet />
          ) : page === "budget" ? (
            <Budget onNavigateToAI={() => setPage("ai")} />
          ) : page === "ai" ? (
            <AIInsights />
          ) : page === "settings" ? (
            <SettingsPage />
          ) : null}
        </div>
      </div>

      {/* Right sidebar removed */}
    </div>
  );
}