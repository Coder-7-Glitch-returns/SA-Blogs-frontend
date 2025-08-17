import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginOtpVerify() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    const singleDigit = value.slice(-1);
    newOtp[index] = singleDigit;
    setOtp(newOtp);
    setError("");

    if (singleDigit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every((digit) => digit !== "") && index === 5) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    // Navigate back or to the next input with arrow keys
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = (otpCode = otp.join("")) => {
    if (otpCode.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }
    if (otpCode === "123456") {
      setTimeout(() => {
        setSuccess("OTP verified successfully!");
      }, 1500);
      setTimeout(() => {
        navigate("/reset-password");
      }, 2000);
    } else {
      setTimeout(() => {
        setError("OTP does not match");
      }, 1500);
    }
    setIsLoading(true);

    // --- YOUR ACTUAL API CALL FOR VERIFICATION GOES HERE ---
    console.log("Verifying OTP:", otpCode);
    setTimeout(() => {
      setIsLoading(false);
      console.log("OTP verified successfully!");
    }, 1500);
    // --- END OF API CALL PLACEHOLDER ---
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Back button */}
      <div className="absolute top-6 left-6 z-10">
        <Link to={"/"}>
          <button className="text-sky-600 hover:bg-white/50">← Back</button>
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-sky-100 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Verify Your Identity
            </h1>
            <p className="text-gray-600">
              We've sent a 6-digit verification code to
            </p>
            <p className="text-sky-600 font-medium">user@example.com</p>
          </div>

          {/* OTP Input */}
          <div className="mb-6">
            <div className="flex justify-center gap-3 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-14 h-14 text-center text-2xl font-bold border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  autoComplete="off"
                />
              ))}
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-500 text-sm text-center mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
                {success}
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handleVerify()}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 
                ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
                }`}
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginOtpVerify;
