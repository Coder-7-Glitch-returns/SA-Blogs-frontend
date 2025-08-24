export default function UserDashboard() {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
      author: "John Doe",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      image: "/react-hooks-tutorial.png",
    },
    {
      id: 2,
      title: "Building Responsive Layouts with Tailwind CSS",
      excerpt:
        "Master the art of creating beautiful, responsive designs using Tailwind's utility classes.",
      author: "Jane Smith",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "CSS",
      image: "/tailwind-responsive-design.png",
    },
    {
      id: 3,
      title: "Next.js App Router: A Complete Guide",
      excerpt:
        "Explore the new App Router in Next.js 13+ and learn how to build modern web applications.",
      author: "Mike Johnson",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Next.js",
      image: "/nextjs-app-router-guide.png",
    },
  ];

  // Sample stats data
  const stats = [
    { label: "Total Posts", value: "24", icon: "📝" },
    { label: "Total Views", value: "12.5K", icon: "👁️" },
    { label: "Comments", value: "89", icon: "💬" },
    { label: "Likes", value: "456", icon: "❤️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-sky-900 mb-2">
                Welcome back!
              </h2>
              <p className="text-sky-700">
                Here's what's happening with your content today.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-sky-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sky-600 text-sm font-medium">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold text-sky-900 mt-1">
                        {stat.value}
                      </p>
                    </div>
                    <div className="text-2xl">{stat.icon}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Blog Posts Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-sky-200 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-sky-900">
                      Recent Blog Posts
                    </h3>
                    <button className="text-sky-600 hover:text-sky-800 font-medium text-sm">
                      View All
                    </button>
                  </div>

                  <div className="space-y-6">
                    {blogs.map((blog) => (
                      <div
                        key={blog.id}
                        className="flex gap-4 p-4 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                      >
                        <img
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-sky-100 text-sky-800 rounded-full">
                              {blog.category}
                            </span>
                            <span className="text-xs text-sky-600">
                              {blog.readTime}
                            </span>
                          </div>
                          <h4 className="font-semibold text-sky-900 mb-1 line-clamp-1">
                            {blog.title}
                          </h4>
                          <p className="text-sm text-sky-700 mb-2 line-clamp-2">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-sky-600">
                            <span>By {blog.author}</span>
                            <span>{blog.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-sky-200 p-6">
                  <h3 className="text-lg font-bold text-sky-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      New Post
                    </button>
                    <button className="w-full bg-sky-100 hover:bg-sky-200 text-sky-800 font-medium py-2 px-4 rounded-lg transition-colors">
                      View All Blogs
                    </button>
                    <button className="w-full bg-sky-100 hover:bg-sky-200 text-sky-800 font-medium py-2 px-4 rounded-lg transition-colors">
                      Manage Categories
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border border-sky-200 p-6">
                  <h3 className="text-lg font-bold text-sky-900 mb-4">
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-sky-900">
                          Post "Tailwind CSS" published
                        </p>
                        <p className="text-xs text-sky-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-sky-900">
                          Post "Tailwind CSS" published
                        </p>
                        <p className="text-xs text-sky-600">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-sky-900">
                          Post "lorem" published
                        </p>
                        <p className="text-xs text-sky-600">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
