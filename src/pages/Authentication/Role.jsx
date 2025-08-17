import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/Logo.png";

function Role() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  // Use useEffect to log the role after the state has been updated
  useEffect(() => {
    if (role) {
      console.log("User Role: ", role);
    }
  }, [role]);

  const handleNo = () => {
    setRole("user");
    navigate("/main");
  };

  const handleYes = () => {
    setRole("writer");
    navigate("/select-category");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 relative overflow-hidden flex items-center justify-center">
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

      <div
        className={"relative z-10 w-[400px] bg-white p-6 rounded-lg shadow-md"}
      >
        {/* Logo */}
        <div className="flex items-center justify-center w-25 h-25 mx-auto">
          <img src={Logo} alt="IMG" />
        </div>
        {/* Heading */}
        <div className="text-center text-2xl mt-3 font-medium text-blue-400">
          <h1>Want to become a writer?</h1>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="w-20 h-20 text-xl hover:border-sky-500 hover:bg-sky-500 text-blue-400 hover:text-white transition-colors grid
            place-items-center border-sky-400 border-2 rounded"
            onClick={handleNo}
          >
            No
          </button>
          <button
            type="button"
            className="w-20 h-20 text-xl hover:border-sky-500 hover:bg-sky-500 text-blue-400 hover:text-white transition-colors grid
              place-items-center border-sky-400 border-2 rounded"
            onClick={handleYes}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Role;
