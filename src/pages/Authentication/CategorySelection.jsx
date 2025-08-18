import React, { useState } from "react";
import Logo from "/assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

// List of categories
const categories = [
  "Artificial Intelligence (AI)",
  "Personal Finance",
  "Health and Wellness",
  "Sustainable Living",
  "Digital Marketing",
  "Remote Work and Productivity",
  "Gaming",
  "Food and Recipes",
  "Travel",
  "Home Decor & DIY",
  "Parenting",
  "Personal Development",
  "Tech & Gadget Reviews",
  "Book and Writing",
];

function CategorySelection() {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [isSelected, setIsSelected] = useState("Choose your category");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleCategory() {
    // Check if a category has been selected
    if (isSelected === "Choose your category") {
      setError("Please select a category");
      return;
    }

    setIsLoading(true);

    // Simulate an API call or asynchronous operation
    setTimeout(() => {
      console.log("User's Category: ", isSelected);
      setError("");
      setIsSelected("Choose your category");
      setIsLoading(false);
      navigate("/main/");
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-[length:60px_60px]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(14 165 233 / 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(14 165 233 / 0.15) 1px, transparent 1px)
            `,
          }}
        />
      </div>

      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-sky-300/40 to-blue-400/30 rounded-full blur-2xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-br from-blue-300/40 to-indigo-400/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-sky-400/30 to-cyan-300/30 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-indigo-300/30 to-purple-300/20 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div
        className="absolute top-32 right-20 w-16 h-16 border-2 border-sky-300/40 rotate-45 animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-sky-300/30 transform rotate-12 animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "3s" }}
      />

      <div
        className={"relative z-10 w-[400px] bg-white p-6 rounded-lg shadow-md"}
      >
        {/* Logo */}
        <div className="flex items-center justify-center w-25 h-25 mx-auto">
          <img src={Logo} alt="IMG" />
        </div>
        <div className="mt-6">
          <div className="space-y-2">
            <h1 className="text-lg text-sky-400">Choose your category</h1>
            <div className="relative">
              <button
                type="button"
                className="w-full h-[40px] border-2 border-sky-200 rounded-lg focus:border-sky-500
                  transition-all duration-200 bg-white/80 flex items-center justify-between px-2"
                onClick={() => setDropdownToggle(!dropdownToggle)}
              >
                <p className="text-gray-600">{isSelected}</p>
                <FaChevronDown
                  className={`h-3 transition-transform ${
                    dropdownToggle ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {dropdownToggle && (
                <div className="absolute bg-white rounded-lg p-2.5 w-full max-h-60 overflow-y-auto mt-1">
                  <ul>
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="text-gray-600 hover:text-sky-500 transition-colors hover:bg-sky-50 px-3 py-2 rounded-lg cursor-pointer"
                        onClick={() => {
                          setIsSelected(category);
                          setDropdownToggle(false);
                          setError(""); // Clear error on selection
                        }}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
          <button
            type="button"
            className="mt-6 px-4 py-2 rounded-lg font-medium w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600
          hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            onClick={handleCategory}
            disabled={isLoading}
          >
            {isLoading ? "Redirecting..." : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategorySelection;
