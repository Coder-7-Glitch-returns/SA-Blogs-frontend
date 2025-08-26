import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify"; // ✅ import toast

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://sa-blogs-backend-ashy.vercel.app/api/users/login",
        formData
      );

      console.log(res.data);
      navigate("/main");
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Try again later!"); // ✅ error toast
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="font-sans">
      <form className="space-y-4 p-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleLoginChange}
            className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2
             border rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleLoginChange}
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2
              border rounded-lg focus:outline-none focus:ring-2"
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5 text-gray-400" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-400" />
              )}
            </span>
          </div>
        </div>

        <div className="text-end">
          <Link to={"/login-otp-send"}>
            <button
              type="button"
              className="text-sm text-sky-600 hover:text-sky-700 transition-colors duration-200 px-4 py-2 rounded-lg font-medium"
            >
              Forgot password?
            </button>
          </Link>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg font-medium w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600
          hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;