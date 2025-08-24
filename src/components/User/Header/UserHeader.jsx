import React from "react";
import { Link } from "react-router-dom";

function UserHeader() {
  return (
    <header className="bg-white shadow-sm border-b border-sky-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to={"/user-dashboard/"} className="flex items-center">
            <h1 className="text-2xl font-bold text-sky-900">SA Blogs</h1>
          </Link>
          <Link
            to={"profile"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src="/assets/hero-img.jpg"
              alt="IMG"
              className="rounded-full w-13 h-13"
            />
            <p className="text-lg font-medium hidden md:block">Muhammad Ahad</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default UserHeader;
