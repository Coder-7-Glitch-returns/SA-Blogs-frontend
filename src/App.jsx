import React from "react";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// Authentications
import AuthPage from "./pages/Authentication/AuthPage";
import OtpSend from "./pages/Authentication/SignupOtpSend";
import SignUpOtpVerify from "./pages/Authentication/SignUpOtpVerify";
import LoginOtpVerify from "./pages/Authentication/LoginOtpVerify";
import LoginOtpSend from "./pages/Authentication/LoginOtpSend";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Gender from "./pages/Authentication/Gender";
import Role from "./pages/Authentication/Role";
import CategorySelection from "./pages/Authentication/CategorySelection";

// MainLayout
import HomePage from "./pages/Main/HomePage";
import Cateogries from "./pages/Main/Cateogries";
import About from "./pages/Main/About";
import Header from "./components/Main/Header/Header";

// AdminLayout
import Sidebar from "./components/Admin/Sidebar/Sidebar";
import AdminHeader from "./components/Admin/AdminHeader/AdminHeader";

// ProfileLayout
import UserProfile from "./pages/Profile/UserProfile";
import UserSettings from "./pages/Profile/UserSettings";

// User Dashboard
import UserSidebar from "./components/User/Sidebar/UserSidebar";
import UserHeader from './components/User/Header/UserHeader';
import Blogs from "./pages/User/Blogs";
import AddBlogs from "./pages/User/AddBlogs";

// Admin Dashboard
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminCategory from "./pages/Admin/AdminCategory";
import BlogsPage from "./pages/Main/About";
import AllBlogs from "./pages/Main/AllBlogs";

function App() {
  // MainLayout
  function MainLayout() {
    return (
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }

  // ProfileLayout
  function ProfileLayout() {
    return (
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }

  // UserLayout
  function UserLayout() {
    return (
      <div className="flex">
        <UserSidebar />
        <div>
          <UserHeader />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    );
  }

  // AdminLayout
  function AdminLayout() {
    <div className="flex">
      <Sidebar />
      <div>
        <AdminHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </div>;
  }

  // Routes
  const router = createBrowserRouter([
    // Authentication
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

    // MainLayout
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "blogs",
          element: <AllBlogs />,
        },
      ],
    },

    // UserProfile
    {
      path: "/profile",
      element: <ProfileLayout />,
      children: [
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "settings",
          element: <UserSettings />,
        },
      ],
    },

    // User Dashboard
    {
      path: "/user-dashboard",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <Blogs />,
        },
        {
          path: "add-blog",
          element: <AddBlogs />,
        },
      ],
    },

    // Admin Dashboard
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminDashboard />,
        },
        {
          path: "admin-user",
          element: <AdminUsers />,
        },
        {
          path: "admin-category",
          element: <AdminCategory />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
