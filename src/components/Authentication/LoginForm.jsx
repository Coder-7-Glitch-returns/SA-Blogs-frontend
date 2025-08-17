import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons from react-icons

const LoginForm = () => {
  const [formData, setFormData] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (!formData.password || !formData.email) {
      setErrors("Fields are required.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email address is invalid.");
      return;
    }

    console.log("Login successful!", formData);
    setTimeout(() => {
      navigate("/main/");
    }, 2000);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    // Update the form data state using the input's name
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error for the current input field as the user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="font-sans">
      {errors && <div className="text-red-500 text-sm mt-1">{errors}</div>}
      <form className="space-y-4 p-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleLoginChange}
            className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
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
              value={formData.password}
              onChange={handleLoginChange}
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2"
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
          className="px-4 py-2 rounded-lg font-medium w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
