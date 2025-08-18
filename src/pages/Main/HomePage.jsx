import React from "react";

function HomePage() {
  return (
    <div className="px-1.5 sm:px-3 md:px-6 lg:px-12 pt-12">
      <section className="text-center py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-5">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            SA Blogs: Your Source for Blogs & Beyond
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            From in-depth guides to daily inspiration, we explore the topics
            that matter most to you.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-lg
            bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-xl transition-all duration-300
            transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500"
          >
            Explore All Posts
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
