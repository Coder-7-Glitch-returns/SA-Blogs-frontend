import React, { useState } from "react";

function Parenting() {
  const blogs = [
    {
      id: 1,
      name: "Introduction to AI",
      description:
        "An overview of what AI is, its history, and its different types.",
      createdAt: "08/24/2025",
      createdOn: "9:00 AM",
      fullDescription:
        "This blog post provides a comprehensive introduction to the field of Artificial Intelligence. We start with a brief history, tracing its roots from early theoretical concepts to modern machine learning. We then break down the different branches of AI, including machine learning, deep learning, natural language processing, and computer vision. The post also touches upon the ethical considerations and future potential of AI.",
    },
    {
      id: 2,
      name: "Machine Learning Basics",
      description:
        "A beginner's guide to machine learning, covering supervised, unsupervised, and reinforcement learning.",
      createdAt: "08/23/2025",
      createdOn: "11:30 AM",
      fullDescription:
        'Dive into the fundamentals of machine learning with this easy-to-understand guide. We explain the core concepts of supervised, unsupervised, and reinforcement learning with simple examples. You\'ll learn the difference between algorithms like regression and classification, and get a feel for how machines "learn" from data. This is a perfect starting point for anyone interested in building their own models.',
    },
    {
      id: 3,
      name: "AI in Healthcare",
      description:
        "Exploring how AI is transforming diagnostics, drug discovery, and patient care.",
      createdAt: "08/22/2025",
      createdOn: "2:15 PM",
      fullDescription:
        "Discover the revolutionary impact of AI on the healthcare industry. This article highlights how AI-powered tools are improving the accuracy of medical diagnostics, accelerating the drug discovery process, and personalizing patient care. We discuss real-world applications, such as using deep learning for medical image analysis and AI-driven predictive analytics to manage public health crises. The future of medicine is here, and it's powered by AI.",
    },
  ];
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openPopup = (blog) => {
    setSelectedBlog(blog);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-slate-300">
          <thead className="bg-sky-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left border-b border-slate-300">
                #
              </th>
              <th className="py-3 px-4 text-left border-b border-slate-300">
                Blog Name
              </th>
              <th className="py-3 px-4 text-left border-b border-slate-300">
                Blog Description
              </th>
              <th className="py-3 px-4 text-left border-b border-slate-300">
                Created On
              </th>
              <th className="py-3 px-4 text-left border-b border-slate-300">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                className="hover:bg-sky-100 cursor-pointer transition-colors duration-200"
                onClick={() => openPopup(blog)}
              >
                <td className="py-3 px-4 border-b border-slate-200">
                  {blog.id}
                </td>
                <td className="py-3 px-4 border-b border-slate-200 font-medium text-slate-800">
                  {blog.name}
                </td>
                <td className="py-3 px-4 border-b border-slate-200 text-sm text-slate-600 line-clamp-1">
                  {blog.description}
                </td>
                <td className="py-3 px-4 border-b border-slate-200 text-sm text-slate-600">
                  {blog.createdOn}
                </td>
                <td className="py-3 px-4 border-b border-slate-200 text-sm text-slate-600">
                  {blog.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isPopupOpen && selectedBlog && (
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
              {selectedBlog.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">
              Created: {selectedBlog.createdAt} at {selectedBlog.createdOn}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {selectedBlog.fullDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Parenting;
