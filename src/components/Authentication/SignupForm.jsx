import React, { useState } from "react";
import { Link, data, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons from react-icons
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SignupForm = () => {
  // State for all form fields in a single object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for show/hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

 const navigate = useNavigate();

  // Handle changes for signup form fields
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    // Update the form data state using the input's name
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error for the current input field as the user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post(
          "https://sa-blogs-backend-ashy.vercel.app/api/users/signup",
          formData
        )
        .then((res) => {
          navigate("/signup-otp-send");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || "Try again later!");
        });

    } else {
      // Form has errors, update state to display them
      setErrors(validationErrors);
    }
  };

  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  return (
    <>
    <div className="font-sans">
      <form className="space-y-4 p-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-gray-700 font-medium">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName" // Added name attribute
              placeholder="John"
              value={formData.firstName}
              onChange={handleSignupChange}
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2
              border rounded-lg focus:outline-none focus:ring-2"
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-gray-700 font-medium">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName" // Added name attribute
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleSignupChange}
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2
              border rounded-lg focus:outline-none focus:ring-2"
            />
            {errors.lastName && (
              <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="signupEmail" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            id="signupEmail"
            name="email" // Added name attribute
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleSignupChange}
            className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2
            border rounded-lg focus:outline-none focus:ring-2"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="signupPassword" className="text-gray-700 font-medium">
            Password
          </label>
          <div className="relative">
            <input
              id="signupPassword"
              name="password" // Added name attribute
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={formData.password}
              onChange={handleSignupChange}
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
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">{errors.password}</div>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="confirmPassword"
            className="text-gray-700 font-medium"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPassword" // Added name attribute
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleSignupChange}
              className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2
              border rounded-lg focus:outline-none focus:ring-2"
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="h-5 w-5 text-gray-400" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-400" />
              )}
            </span>
          </div>
          {errors.confirmPassword && (
            <div className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg font-medium w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600
          hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Create Account
        </button>
      </form>
    </div>
    </>
  );
};

export default SignupForm;
