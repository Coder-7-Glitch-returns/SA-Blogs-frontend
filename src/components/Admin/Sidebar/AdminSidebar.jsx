import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminSidebar() {
  const [cats, setCats] = useState(false);
  const categories = [
    { name: "Artificial Intelligence (AI)", link: "category/ai" },
    { name: "Personal Finance", link: "category/finance" },
    { name: "Health and Wellness", link: "category/health" },
    { name: "Sustainable Living", link: "category/living" },
    { name: "Digital Marketing", link: "category/marketing" },
    { name: "Remote Work and Productivity", link: "category/" },
    { name: "Gaming", link: "category/gaming" },
    { name: "Food and Recipes", link: "category/food-recipe" },
    { name: "Travel", link: "category/travel" },
    { name: "Home Decor & DIY", link: "category/home-decor" },
    { name: "Parenting", link: "category/" },
    { name: "Personal Development", link: "category/personal-development" },
    { name: "Tech & Gadget Reviews", link: "category/tech-gadgets" },
    { name: "Book and Writing", link: "category/books" },
  ];
  return (
    <aside className="w-90 bg-white shadow-sm border-r border-sky-200 min-h-screen">
      <nav className="p-6">
        <Link to={"/admin/"}>
          <h2 className="text-lg font-bold text-sky-900 mb-4">SA Blogs</h2>
        </Link>
        <ul className="space-y-2">
          <li>
            <Link
              to={"/admin/"}
              className="flex items-center gap-3 px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors"
            >
              <span className="text-lg">📊</span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={"admin-user"}
              className="flex items-center gap-3 px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors"
            >
              <span className="text-lg">✍️</span>
              Users
            </Link>
          </li>
          <li
            className="cursor-pointer relative"
            onClick={() => setCats(!cats)}
          >
            <div className="px-3 py-2 flex items-center justify-between w-full text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-t-lg transition-colors">
              <div>
                <span className="text-lg mr-2">📖</span>
                Categories
              </div>
              <span>
                <FaChevronDown
                  className={`transition-transform ease-linear ml-5 ${
                    cats ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </div>
            {cats && (
              <div className="px-3 py-2 w-full shadow-md rounded-b-lg">
                <ul className="flex flex-col text-start">
                  {categories.map((data, i) => (
                    <Link to={data.link} key={i}>
                      <li className="px-3 py-2 w-full text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors">
                        {data.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              to={"settings"}
              className="flex items-center gap-3 px-3 py-2 text-sky-700 hover:bg-sky-50 hover:text-sky-900 rounded-lg transition-colors"
            >
              <span className="text-lg">⚙️</span>
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
