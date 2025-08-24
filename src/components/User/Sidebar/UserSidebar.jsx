import React from "react";
import { Link } from "react-router-dom";

function UserSidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm border-r border-sky-200 min-h-screen">
      <nav className="p-6">
        <Link to={'/user-dashboard/'}>
          <h2 className="text-lg font-bold text-sky-900 mb-4">SA Blogs</h2>
        </Link>
        <ul className="space-y-2">
          <li>
            <Link
              to={"/user-dashboard/"}
              className="flex items-center gap-3 px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors"
            >
              <span className="text-lg">📊</span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={"add-blog"}
              className="flex items-center gap-3 px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors"
            >
              <span className="text-lg">✍️</span>
              Add Blog
            </Link>
          </li>
          <li>
            <Link
              to={"blogs"}
              className="flex items-center gap-3 px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors"
            >
              <span className="text-lg">📖</span>
              View Blogs
            </Link>
          </li>
          <li>
            <Link
              to={"settings"}
              className="flex items-center gap-3 px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors"
            >
              <span className="text-lg">⚙️</span>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default UserSidebar;
