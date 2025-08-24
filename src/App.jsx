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
import About from "./pages/Main/About";
import Header from "./components/Main/Header/Header";

// AdminLayout
import AdminSidebar from "./components/Admin/Sidebar/AdminSidebar";
import AdminHeader from "./components/Admin/AdminHeader/AdminHeader";

// ProfileLayout
import UserProfile from "./pages/Profile/UserProfile";
import UserSettings from "./pages/Profile/UserSettings";

// User Dashboard
import UserDashboard from "./pages/User/UserDashboard";
import UserSidebar from "./components/User/Sidebar/UserSidebar";
import UserHeader from "./components/User/Header/UserHeader";
import Blogs from "./pages/User/Blogs";
import AddBlogs from "./pages/User/AddBlogs";

// Admin Dashboard
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminCategory from "./pages/Admin/AdminCategory";
import AllBlogs from "./pages/Main/AllBlogs";
import Footer from "./components/Main/Footer/Footer";
import AdminProfile from "./pages/Admin/Admin_Profile/AdminProfile";

// Admin-Categories
import Artificial_Intelligence_AI from "./components/Admin/Cats/Artificial_Intelligence_AI";
import Books_and_Writing from "./components/Admin/Cats/Books_and_Writing";
import Personal_Finance from "./components/Admin/Cats/Personal_Finance";
import Health_and_Wellness from "./components/Admin/Cats/Health_and_Wellness";
import Sustainable_Living from "./components/Admin/Cats/Sustainable_Living";
import Digital_Marketing from "./components/Admin/Cats/Digital_Marketing";
import Gaming from "./components/Admin/Cats/Gaming";
import Food_Recipies from "./components/Admin/Cats/Food_Recipies";
import Travel from "./components/Admin/Cats/Travel";
import Remote_work_and_productivity from "./components/Admin/Cats/Remote_work_and_productivity";
import Home_Decor from "./components/Admin/Cats/Home_Decor";
import Personal_Development from "./components/Admin/Cats/Personal_Development";
import Tech from "./components/Admin/Cats/Tech";
import AdminSettings from "./pages/Admin/Admin_Profile/AdminSettings";

function App() {
  // MainLayout
  function MainLayout() {
    return (
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
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
        <Footer />
      </div>
    );
  }

  // UserLayout
  function UserLayout() {
    return (
      <div className="flex w-full">
        <UserSidebar />
        <div className="w-full">
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
    return (
      <div className="flex">
        <AdminSidebar />
        <div className="w-full">
          <AdminHeader />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    );
  }

  // CategoryLayout
  function CategoryLayout() {
    return (
      <main>
        <Outlet />
      </main>
    );
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
          path: "about",
          element: <About />,
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
          element: <UserDashboard />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
        {
          path: "add-blog",
          element: <AddBlogs />,
        },
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
          path: "admin-profile",
          element: <AdminProfile />,
        },
        {
          path: "settings",
          element: <AdminSettings />,
        },
        {
          path: "category",
          element: <CategoryLayout />,
          children: [
            {
              path: "ai",
              element: <Artificial_Intelligence_AI />,
            },
            {
              path: "finance",
              element: <Personal_Finance />,
            },
            {
              path: "health",
              element: <Health_and_Wellness />,
            },
            {
              path: "living",
              element: <Sustainable_Living />,
            },
            {
              path: "marketing",
              element: <Digital_Marketing />,
            },
            {
              path: "gaming",
              element: <Gaming />,
            },
            {
              path: "food-recipe",
              element: <Food_Recipies />,
            },
            {
              path: "travel",
              element: <Travel />,
            },
            {
              path: "remote-work",
              element: <Remote_work_and_productivity />,
            },
            {
              path: "home-decor",
              element: <Home_Decor />,
            },
            {
              path: "personal-development",
              element: <Personal_Development />,
            },
            {
              path: "tech-gadgets",
              element: <Tech />,
            },
            {
              path: "books",
              element: <Books_and_Writing />,
            },
            {
              path: "remote-work",
              element: <Remote_work_and_productivity />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
