import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/assets/Logo.png";
import { toast, ToastContainer } from "react-toastify";

function SignUpOtpVerify() {
  // State for the single OTP input
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const signUpOtp = localStorage.getItem("Sign-Up-OTP");

  // Handles input change for the single text field
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Only allow digits and limit to 6 characters
    if (!/^\d*$/.test(value) || value.length > 6) {
      return;
    }
    setOtp(value);
  };

  const handleVerify = () => {
    // Check if the input has exactly 6 digits
    if (otp.length !== 6) {
      toast.error("Please enter all 6 digits");
      return;
    }

    if (otp === signUpOtp) {
      navigate("/gender");
      localStorage.removeItem("Sign-Up-OTP");
    } else {
      toast.error("OTP does not match");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-40 w-60 h-60 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0
          bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
        ></div>

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
              <div className="w-25 h-25 rounded-full flex items-center justify-center">
                <img src={Logo} alt="IMG" />
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
              <input
                type="text"
                value={otp}
                onChange={handleInputChange}
                className="w-full h-14 text-center text-2xl font-bold border-2 border-sky-200 rounded-lg focus:border-sky-500 focus:outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                autoComplete="off"
                placeholder="Enter 6-digit code"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="6"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleVerify}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpOtpVerify;
