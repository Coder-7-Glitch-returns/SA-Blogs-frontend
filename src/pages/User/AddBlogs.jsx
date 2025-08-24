import { useState } from "react";
import { FiCamera } from "react-icons/fi";

export default function AddBlog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result); // Set the image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const blogData = {
      id: Date.now(),
      title: formData.get("title"),
      category: formData.get("category"),
      content: formData.get("content"),
      image: selectedImage, // Use the selected image data URL
      createdAt: new Date().toISOString(),
    };

    setBlogPosts((prev) => [...prev, blogData]);

    console.log("[v0] Form submitted with data:", blogData);
    console.log("[v0] All blog posts:", [...blogPosts, blogData]);

    // Reset form and image state
    e.target.reset();
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-100">
      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Blog Form */}
          <div className="bg-white rounded-xl shadow-sm border border-sky-200 p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-sky-900 mb-2"
                >
                  Blog Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title..."
                  className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-colors"
                />
              </div>

              {/* Category Row */}
              <div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-sky-900 mb-2"
                  >
                    Category *
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value="Technology"
                    disabled
                    className="w-full px-4 py-3 border border-sky-200 rounded-lg bg-sky-50 text-sky-700 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Featured Image */}
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-sky-900 mb-2"
                >
                  Featured Image
                </label>
                <label
                  htmlFor="image"
                  className="border-2 border-dashed border-sky-200 rounded-lg p-6 text-center hover:border-sky-300 transition-colors cursor-pointer flex items-center justify-center flex-col"
                  style={{
                    backgroundImage: selectedImage
                      ? `url(${selectedImage})`
                      : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "200px",
                  }}
                >
                  {!selectedImage && (
                    <>
                      <div className="text-sky-400 mb-2">
                        <span className="text-4xl">
                          <FiCamera className="mx-auto" />
                        </span>
                      </div>
                      <p className="text-sky-600 mb-2">Click to upload</p>
                    </>
                  )}
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              {/* Content */}
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-sky-900 mb-2"
                >
                  Content *
                </label>
                <div className="border border-sky-200 rounded-lg">
                  <textarea
                    id="content"
                    name="content"
                    rows="12"
                    placeholder="Write your blog content here..."
                    className="w-full px-4 py-3 border-0 focus:ring-0 outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end pt-6 border-t border-sky-200">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="px-6 py-3 border border-sky-200 text-sky-700 hover:bg-sky-50 rounded-lg transition-colors"
                  >
                    Preview
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Publish Blog
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
