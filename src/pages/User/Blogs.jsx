"use client";

import { useState } from "react";

export default function Blogs() {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React Hooks",
      category: "Technology",
      content:
        "Learn the fundamentals of React Hooks and how they can improve your development workflow...",
      image: "/react-hooks-tutorial.png",
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      category: "Technology",
      content:
        "Discover how to create beautiful, responsive designs using Tailwind CSS utility classes...",
      image: "/tailwind-responsive-design.png",
      createdAt: "2024-01-12T14:20:00Z",
    },
    {
      id: 3,
      title: "Next.js App Router: Complete Guide",
      category: "Technology",
      content:
        "A comprehensive guide to using the new App Router in Next.js 13+ for better performance...",
      image: "/nextjs-app-router-guide.png",
      createdAt: "2024-01-10T09:15:00Z",
    },
    {
      id: 4,
      title: "JavaScript ES6+ Features You Should Know",
      category: "Technology",
      content:
        "Explore the latest JavaScript features that will make your code more efficient and readable...",
      image: "/javascript-es6-code.png",
      createdAt: "2024-01-08T16:45:00Z",
    },
    {
      id: 5,
      title: "State Management in Modern React Applications",
      category: "Technology",
      content:
        "Compare different state management solutions and learn when to use each approach...",
      image: "/react-state-management.png",
      createdAt: "2024-01-05T11:30:00Z",
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox: When to Use Which",
      category: "Technology",
      content:
        "Understanding the differences between CSS Grid and Flexbox for layout design...",
      image: "/css-grid-flexbox.png",
      createdAt: "2024-01-03T13:20:00Z",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100">
      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-sky-900">
                All Blog Posts
              </h2>
              <p className="text-sky-600 mt-2">
                Manage and view all your published blog posts
              </p>
            </div>
            <div className="text-sm text-sky-600">
              Showing {startIndex + 1}-
              {Math.min(startIndex + postsPerPage, blogPosts.length)} of{" "}
              {blogPosts.length} posts
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm border border-sky-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-sky-50 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
                      {post.category}
                    </span>
                    <span className="text-sm text-sky-500">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sky-600 text-sm line-clamp-3 mb-4">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="text-sky-600 hover:text-sky-800 font-medium text-sm transition-colors">
                      Read More →
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                        ✏️
                      </button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sky-600 hover:text-sky-800 hover:bg-sky-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-sky-600 text-white"
                    : "text-sky-600 hover:text-sky-800 hover:bg-sky-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 text-sky-600 hover:text-sky-800 hover:bg-sky-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
