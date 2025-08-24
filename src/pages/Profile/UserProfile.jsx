"use client";

import { useState } from "react";

export default function UserProfile() {
  // Store user profile data in an array using useState
  const [profile, setProfile] = useState([
    {
      id: 1,
      name: "Muhammad Ahad",
      email: "user@example.com",
      bio: "Full Stack Web Developer | Anime Enthusiast | Gamer | Always leveling up in code, stories, and strategy.",
      joinDate: "2023-01-15",
    },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (profileToEdit) => {
    setEditForm({ ...profileToEdit });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfile(profile.map((p) => (p.id === editForm.id ? editForm : p)));
    setIsEditing(false);
    setEditForm({});
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm({});
  };

  const handleInputChange = (field, value) => {
    setEditForm({ ...editForm, [field]: value });
  };

  // Corrected line: Access the first element of the array
  const currentProfile = profile[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-sky-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-sky-800">
                      {currentProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {currentProfile.name}
                    </h2>
                    <p className="text-sky-100">{currentProfile.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEdit(currentProfile)}
                  className="bg-white text-sky-600 px-4 py-2 rounded-lg hover:bg-sky-50 transition-colors"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-sky-900 mb-2">
                    About
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentProfile.bio}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-sky-900 mb-2">
                    User Since
                  </h3>
                  <p className="text-gray-700">
                    {new Date(currentProfile.joinDate).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-sky-900 mb-4">
              Edit Profile
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={editForm.name || ""}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={editForm.email || ""}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  value={editForm.bio || ""}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
