import React from "react";
import { Link } from "react-router-dom";

function LoginOtpSend() {
  return (
    <div className="flex items-center justify-center h-screen relative">
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
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent transition-opacity duration-300 opacity-100">
              Send Code
            </h1>
            <p className="text-gray-600 mt-2 transition-opacity duration-300">
              Enter your email to verify
            </p>
          </div>
        </div>
        <form className="space-y-4 p-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>
          <Link to={"/login-otp"}>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg font-medium w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              OTP Send
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginOtpSend;
