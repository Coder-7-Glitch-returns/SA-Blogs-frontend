"use client";

import { useState } from "react";

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data submitted:", formData);
      alert("Form submitted successfully!");
    } else {
      console.log("Validation errors:", validationErrors);
    }
  };

  const categoryFilters = [
    "All",
    "Commercial",
    "Design",
    "Nature",
    "People",
    "Photography",
    "Tech",
    "Travel",
    "Uncategorized",
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "Trip that you'll never ever forget",
      excerpt:
        "Quisque dictum eros vel, a maximus massa accumsan non. Aliquam eros velit volutpat ut feibus dui. Praesent.",
      category: "PEOPLE, TRAVEL",
      author: "dribbblehub",
      date: "November 25, 2018",
      readTime: "8 min read",
      image:
        "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
      comments: 6,
    },
    {
      id: 2,
      title: "Must-have gear",
      excerpt:
        "Ut et lacus sit. Aliquam dignissim mauris sit amet purus convallis, vitae vehicula lectus tristique. Nulla placerat.",
      category: "PHOTOGRAPHY, TECH",
      author: "dribbblehub",
      date: "November 25, 2018",
      readTime: "12 min read",
      image:
        "https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg",
      comments: 9,
    },
  ];

  const latestPosts = [
    {
      id: 1,
      title: "Trip that you'll never ever forget",
      category: "PEOPLE, TRAVEL",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvql28-JtFxUXD_zbbadH8KsoEH3nit1FeQ&s",
    },
    {
      id: 2,
      title: "Must-have gear",
      category: "PHOTOGRAPHY, TECH",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvql28-JtFxUXD_zbbadH8KsoEH3nit1FeQ&s",
    },
    {
      id: 3,
      title: "Movielike photo shoot - B&W",
      category: "DESIGN, PHOTOGRAPHY",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvql28-JtFxUXD_zbbadH8KsoEH3nit1FeQ&s",
    },
    {
      id: 4,
      title: "Craftsmen at work",
      category: "PEOPLE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvql28-JtFxUXD_zbbadH8KsoEH3nit1FeQ&s",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">SA Blogs</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="#style"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Style
              </a>
              <a
                href="#people"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                People
              </a>
              <a
                href="#design"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Design
              </a>
              <a
                href="#travel"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Travel
              </a>
              <a
                href="#commercial"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Commercial
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  className="w-5 h-5"
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
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-16 h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/aerial-ocean-waves-boats-ReFGMaaPe5gGlsRSbD2ONFYWqKfrUl.png')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shahbaz & Ahad Blogs
          </h1>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categoryFilters.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Featured Posts - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <div className="text-sm text-gray-500 mb-2">
                      by{" "}
                      <span className="text-gray-700 font-medium">
                        {post.author}
                      </span>{" "}
                      • {post.date}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        {post.category}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Latest Posts Sidebar - Right Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Latest posts
                </h3>

                <div className="space-y-6">
                  {latestPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-start space-x-4 group cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                          {post.category}
                        </div>
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Never Miss a Story
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest articles delivered
              straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Have a question or want to collaborate? We'd love to hear from you
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you have feedback, story ideas, or just want to say
                    hello, we're always excited to connect with our readers.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📧</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600">hello@sablogs.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600">💬</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        Response Time
                      </div>
                      <div className="text-gray-600">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold">SA Blogs</span>
              </div>
              <p className="text-gray-400">
                Inspiring stories and insights for the modern world.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#style"
                    className="hover:text-white transition-colors"
                  >
                    Style
                  </a>
                </li>
                <li>
                  <a
                    href="#people"
                    className="hover:text-white transition-colors"
                  >
                    People
                  </a>
                </li>
                <li>
                  <a
                    href="#design"
                    className="hover:text-white transition-colors"
                  >
                    Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Travel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    RSS Feed
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SA Blogs Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
