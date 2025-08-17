import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/Authentication/AuthPage";
import OtpSend from "./pages/Authentication/SignupOtpSend";
import SignUpOtpVerify from "./pages/Authentication/SignUpOtpVerify";
import LoginOtpVerify from "./pages/Authentication/LoginOtpVerify";
import LoginOtpSend from "./pages/Authentication/LoginOtpSend";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Gender from "./pages/Authentication/Gender";
import Role from "./pages/Authentication/Role";
import CategorySelection from "./pages/Authentication/CategorySelection";

function App() {
  // MainLayout
  function MainLayout() {}

  // AdminLayout
  function AdminLayout() {}

  // Routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage />,
    },
    {
      path: "/signup-otp-send",
      element: <OtpSend />,
    },
    {
      path: "/sign-up-otp",
      element: <SignUpOtpVerify />,
    },
    {
      path: "/gender",
      element: <Gender />,
    },
    {
      path: "/role",
      element: <Role />,
    },
    {
      path: "/select-category",
      element: <CategorySelection />,
    },
    {
      path: "/login-otp-send",
      element: <LoginOtpSend />,
    },
    {
      path: "/login-otp",
      element: <LoginOtpVerify />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
