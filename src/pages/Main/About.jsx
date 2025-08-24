"use client";

import { useState, useEffect } from "react";

// Mock blog data
const mockBlogs = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    category: "Technology",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/modern-web-dev-workspace.png",
    content:
      "Web development is evolving at an unprecedented pace. From the rise of AI-powered development tools to the increasing adoption of serverless architectures, developers need to stay ahead of the curve. This comprehensive guide explores the key trends that will define web development in 2024 and beyond.",
  },
  {
    id: 2,
    title: "Mastering React Hooks: A Complete Guide",
    excerpt:
      "Deep dive into React Hooks and learn how to build more efficient and maintainable React applications.",
    category: "Programming",
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    image: "/react-hooks-code-editor.png",
    content:
      "React Hooks revolutionized how we write React components. This comprehensive guide covers everything from basic useState and useEffect to advanced custom hooks, helping you write cleaner, more maintainable code.",
  },
  {
    id: 3,
    title: "UI/UX Design Principles for Modern Applications",
    excerpt:
      "Learn the essential design principles that create exceptional user experiences in modern applications.",
    category: "Design",
    author: "Emma Davis",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/modern-ui-ux-mockups.png",
    content:
      "Great design is invisible to users but crucial for success. This article explores fundamental UI/UX principles including accessibility, responsive design, and user-centered design methodologies.",
  },
  {
    id: 4,
    title: "Building Scalable APIs with Node.js",
    excerpt:
      "Best practices for creating robust and scalable APIs using Node.js and modern development patterns.",
    category: "Backend",
    author: "Alex Rodriguez",
    date: "2024-01-08",
    readTime: "10 min read",
    image: "/nodejs-api-development.png",
    content:
      "Building scalable APIs requires careful planning and implementation. Learn about RESTful design, authentication, rate limiting, and performance optimization techniques for Node.js applications.",
  },
  {
    id: 5,
    title: "The Art of Code Review: Best Practices",
    excerpt:
      "Improve your team's code quality and collaboration through effective code review practices.",
    category: "Development",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "7 min read",
    image: "/code-review-collaboration.png",
    content:
      "Code reviews are essential for maintaining code quality and team knowledge sharing. This guide covers best practices for both reviewers and authors to make the process more effective.",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "A comprehensive comparison of CSS Grid and Flexbox to help you choose the right layout method.",
    category: "CSS",
    author: "Tom Wilson",
    date: "2024-01-03",
    readTime: "4 min read",
    image: "/css-grid-flexbox-layout.png",
    content:
      "Understanding when to use CSS Grid versus Flexbox is crucial for modern web layouts. This article provides clear guidelines and practical examples for both layout methods.",
  },
];

const categories = [
  "All",
  "Technology",
  "Programming",
  "Design",
  "Backend",
  "Development",
  "CSS",
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState(mockBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState(mockBlogs);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // Filter blogs based on category and search term
  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, blogs]);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with gradient */}
      <header className="sticky top-0 z-40 bg-gradient-to-r from-primary to-secondary shadow-lg backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary-foreground">
              Professional Blog
            </h1>

            {/* Search Bar */}
            <div className="relative max-w-md w-full mx-8">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg bg-white/90 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="text-primary-foreground text-sm">
              {filteredBlogs.length} articles found
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-card rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4 text-card-foreground">
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            {/* Blog grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentBlogs.map((blog, index) => (
                <article
                  key={blog.id}
                  className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span>{blog.author}</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      currentPage === index + 1
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Blog Detail Popup */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-custom"
            onClick={() => setSelectedBlog(null)}
          />

          {/* Modal */}
          <div className="relative bg-popover rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Close button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selectedBlog.image || "/placeholder.svg"}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {selectedBlog.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4 text-popover-foreground">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center space-x-6 mb-6 text-muted-foreground">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {selectedBlog.author}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {selectedBlog.readTime}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(selectedBlog.date).toLocaleDateString()}
                </span>
              </div>

              <div className="prose prose-lg max-w-none text-popover-foreground">
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {selectedBlog.excerpt}
                </p>
                <div className="leading-relaxed">{selectedBlog.content}</div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
                <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-300">
                  Read More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
