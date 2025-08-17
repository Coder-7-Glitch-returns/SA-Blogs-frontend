import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthPage from "./pages/Authentication/AuthPage";
import OtpSend from "./pages/Authentication/SignupOtpSend";
import SignUpOtpVerify from "./pages/Authentication/SignUpOtpVerify";
import LoginOtpVerify from "./pages/Authentication/LoginOtpVerify";
import LoginOtpSend from "./pages/Authentication/LoginOtpSend";
import ResetPassword from "./pages/Authentication/ResetPassword";

function App() {
  // MainLayout
  function MainLayout() {}

  // UserLayout
  function UserLayout() {}

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
      path: "/login-otp-send",
      element: <LoginOtpSend />,
    },
    {
      path: "/sign-up-otp",
      element: <SignUpOtpVerify />,
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
