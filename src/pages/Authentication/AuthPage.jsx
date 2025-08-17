import React, { useState } from "react";
import LoginForm from "./../../components/Authentication/LoginForm";
import SignupForm from "./../../components/Authentication/SignupForm";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabSwitch = (tab) => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTransitioning(false);
      }, 150);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-[length:60px_60px]"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(14 165 233 / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(14 165 233 / 0.15) 1px, transparent 1px)
          `,
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-sky-300/40 to-blue-400/30 rounded-full blur-2xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-blue-300/40 to-indigo-400/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-sky-400/30 to-cyan-300/30 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-indigo-300/30 to-purple-300/20 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div
        className="absolute top-32 right-20 w-16 h-16 border-2 border-sky-300/40 rotate-45 animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-sky-300/30 transform rotate-12 animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "3s" }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="rounded-xl w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-md ring-1 ring-sky-200/50">
          <div className="space-y-4 p-6 pb-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-1.5 shadow-inner">
              <button
                onClick={() => handleTabSwitch("signup")}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                  activeTab === "signup"
                    ? "bg-white text-sky-600 shadow-lg scale-105 ring-2 ring-sky-200"
                    : "text-sky-500 hover:text-sky-600 hover:bg-white/50 hover:scale-102"
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => handleTabSwitch("login")}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300 transform ${
                  activeTab === "login"
                    ? "bg-white text-sky-600 shadow-lg scale-105 ring-2 ring-sky-200"
                    : "text-sky-500 hover:text-sky-600 hover:bg-white/50 hover:scale-102"
                }`}
              >
                Login
              </button>
            </div>

            <div className="text-center">
              <h3
                className={`text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent transition-opacity duration-300 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {activeTab === "login" ? "Welcome Back" : "Create Account"}
              </h3>
              <p
                className={`text-gray-600 mt-2 transition-opacity duration-300 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {activeTab === "login"
                  ? "Sign in to your account to continue"
                  : "Sign up to get started with your account"}
              </p>
            </div>
          </div>

          <div className="space-y-4 p6 pt-0">
            <div
              className={`transition-all duration-300 ease-in-out transform ${
                isTransitioning
                  ? "opacity-0 scale-95 translate-y-2"
                  : "opacity-100 scale-100 translate-y-0"
              }`}
            >
              {activeTab === "login" ? <LoginForm /> : <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
