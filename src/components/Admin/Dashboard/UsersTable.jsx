import React, { useState } from "react";

// Sample data for the users
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    gmail: "alice.j@example.com",
    role: "admin",
    category: null,
    bio: "An expert in system administration and security protocols. She oversees all user permissions.",
    createdAt: "08/24/2025",
    createdOn: "10:15 AM",
  },
  {
    id: 2,
    name: "Bob Smith",
    gmail: "bob.s@example.com",
    role: "writer",
    category: "Technology",
    bio: "A passionate blogger focused on emerging trends in artificial intelligence.",
    createdAt: "08/23/2025",
    createdOn: "09:00 AM",
  },
  {
    id: 3,
    name: "Charlie Davis",
    gmail: "charlie.d@example.com",
    role: "user",
    category: null,
    bio: "A new user exploring the platform for the first time. Interested in all content.",
    createdAt: "08/22/2025",
    createdOn: "1:40 PM",
  },
  {
    id: 4,
    name: "Dana Lee",
    gmail: "dana.l@example.com",
    role: "blogger",
    category: null,
    bio: "A creative blogger who writes about lifestyle, travel, and food.",
    createdAt: "08/21/2025",
    createdOn: "04:30 PM",
  },
  {
    id: 5,
    name: "Charlie Davis",
    gmail: "charlie.d@example.com",
    role: "user",
    category: null,
    bio: "A new user exploring the platform for the first time. Interested in all content.",
    createdAt: "08/22/2025",
    createdOn: "1:40 PM",
  },
  {
    id: 6,
    name: "Dana Lee",
    gmail: "dana.l@example.com",
    role: "blogger",
    category: null,
    bio: "A creative blogger who writes about lifestyle, travel, and food.",
    createdAt: "08/21/2025",
    createdOn: "04:30 PM",
  },
];

function UsersTable() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openPopup = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="shadow-lg rounded-lg overflow-x-auto">
        <table className="rounded-lg table-auto min-w-full bg-white border border-slate-300">
          <thead className="bg-sky-500 text-white">
            <tr>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-1/12 font-semibold">
                #
              </th>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-2/12 font-semibold">
                Name
              </th>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-2/12 font-semibold">
                Gmail
              </th>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-1/12 font-semibold">
                Role
              </th>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-1/12 font-semibold">
                Category
              </th>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-3/12 font-semibold">
                Bio
              </th>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-1/12 font-semibold">
                Created On
              </th>
              <th className="py-3 px-2 text-left border-b border-slate-300 w-1/12 font-semibold">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, 4).map((user) => (
              <tr
                key={user.id}
                className="hover:bg-sky-100 cursor-pointer transition-colors duration-200"
                onClick={() => openPopup(user)}
              >
                <td className="py-3 px-3 border-b border-slate-200 text-sm">
                  {user.id}
                </td>
                <td className="py-3 px-3 border-b border-slate-200 text-sm font-medium text-slate-800 whitespace-nowrap overflow-hidden">
                  {user.name}
                </td>
                <td className="py-3 px-3 border-b border-slate-200 text-sm text-slate-600 whitespace-nowrap overflow-hidden">
                  {user.gmail}
                </td>
                <td className="py-3 px-3 border-b border-slate-200 text-sm text-slate-600 capitalize whitespace-nowrap overflow-hidden">
                  {user.role}
                </td>
                <td className="py-3 px-3 border-b border-slate-200 text-sm text-slate-600 whitespace-nowrap overflow-hidden">
                  {user.category || "—"}
                </td>
                <td className="py-3 px-3 border-b border-slate-200 text-sm text-slate-600">
                  {user.bio.slice(0, 38) + "..."}
                </td>
                <td className="py-3 px-3 border-b border-slate-200 text-sm text-slate-600 whitespace-nowrap overflow-hidden">
                  {user.createdOn}
                </td>
                <td className="py-3 px-3 border-b border-slate-200 text-sm text-slate-600 whitespace-nowrap overflow-hidden">
                  {user.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative transform transition-all duration-300 scale-95 animate-scale-in">
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-2 text-sky-700">
              {selectedUser.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">
              <span className="font-semibold text-gray-700">Role:</span>{" "}
              {selectedUser.role}
              {selectedUser.category && (
                <span className="ml-4 font-semibold text-gray-700">
                  Category:
                </span>
              )}{" "}
              {selectedUser.category}
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-700">Bio:</span>{" "}
              {selectedUser.bio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UsersTable;
