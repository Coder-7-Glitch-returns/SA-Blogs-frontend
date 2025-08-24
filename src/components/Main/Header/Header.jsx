import React, { useRef, useState } from "react";
import Logo from "../../../../public/assets/Logo.png";
import { FaChevronDown, FaRegUserCircle } from "react-icons/fa";
import { FiCamera, FiPlus } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header() {
  // const imageRef = useRef();
  const [isProfile, setIsProfile] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  // const [userCategory, setUserCategory] = useState("AI");
  // const [imageFile, setImageFile] = useState(null);
  // const [backgroundImage, setBackgroundImage] = useState("");
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   category: userCategory,
  // });
  // const [errors, setErrors] = useState({}); // State for validation errors

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setImageFile(file);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setBackgroundImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setImageFile(null);
  //     setBackgroundImage("");
  //   }
  // };

  // function validateForm() {
  //   const newErrors = {};
  //   if (!formData.title.trim()) {
  //     newErrors.title = "Blog title is required.";
  //   }
  //   if (!formData.description.trim()) {
  //     newErrors.description = "Blog description is required.";
  //   }
  //   if (!imageFile) {
  //     newErrors.image = "An image is required for the blog.";
  //   }
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     const blogData = {
  //       ...formData,
  //       image: imageFile,
  //     };
  //     console.log("Blog Added successfully: ", blogData);

  //     // Close popup and reset form
  //     setIsPopUp(false);
  //     setFormData({
  //       title: "",
  //       description: "",
  //       category: userCategory,
  //     });
  //     setImageFile(null);
  //     setBackgroundImage("");
  //     setErrors({});
  //   } else {
  //     console.log("Form has validation errors.");
  //   }
  // }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/main/"}>
            <h1 className="text-2xl font-bold text-gray-800">SA Blogs</h1>
          </Link>
          {/* NavLinks */}
          <nav className="md:block hidden">
            <ul className="lg:flex items-center justify-center gap-5">
              <li
                className="cursor-pointer text-gray-700 font-medium hover:text-sky-500 transition-colors text-lg relative after:bg-sky-500 after:h-0.5
          after:bottom-0 after:left-0 after:absolute after:w-0 hover:after:w-full after:rounded-4xl after:transition-all after:duration-300"
              >
                <Link to={"/main/"}>Home</Link>
              </li>
              <li
                className="cursor-pointer text-gray-700 font-medium hover:text-sky-500 transition-colors text-lg relative after:bg-sky-500 after:h-0.5
          after:bottom-0 after:left-0 after:absolute after:w-0 hover:after:w-full after:rounded-4xl after:transition-all after:duration-300"
              >
                <Link to={"about"}>About</Link>
              </li>
              <li
                className="cursor-pointer text-gray-700 font-medium hover:text-sky-500 transition-colors text-lg relative after:bg-sky-500 after:h-0.5
          after:bottom-0 after:left-0 after:absolute after:w-0 hover:after:w-full after:rounded-4xl after:transition-all after:duration-300"
              >
                <Link to={"blogs"}>Blogs</Link>
              </li>
            </ul>
          </nav>

          {/* Additional Button */}
          {/* Additional Links */}
          <ul className="flex items-center justify-center gap-5">
            {/* Profile */}
            <li className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setIsProfile(!isProfile)}
              >
                <img
                  src="../../../../public/assets/hero-img.jpg"
                  alt="IMG"
                  className="rounded-full w-13 h-13"
                />
                <p className="text-lg font-medium hidden md:block">
                  Muhammad Ahad
                </p>
                <FaChevronDown
                  className={`transition-transform ease-linear hidden md:block ${
                    isProfile ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`absolute w-full bg-white shadow-xl rounded-lg top-[55px] p-3 transform transition-all duration-300 ease-in-out origin-top z-10 ${
                  isProfile ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                }`}
              >
                <ul className="space-y-3">
                  <Link to={"/profile/profile"}>
                    <li
                      className="hover:bg-sky-500/30 px-3 py-2 rounded transition-colors cursor-pointer flex items-center gap-2"
                      onClick={() => setIsToggle(false)}
                    >
                      <FaRegUserCircle className="w-5 h-5" />
                      Profile
                    </li>
                  </Link>
                  <Link to={"/profile/settings"}>
                    <li
                      className="hover:bg-sky-500/30 px-3 py-2 rounded transition-colors cursor-pointer flex items-center gap-2"
                      onClick={() => setIsToggle(false)}
                    >
                      <IoSettingsOutline className="w-5 h-5" />
                      Settings
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li
                      className="hover:bg-sky-500/30 px-3 py-2 rounded transition-colors cursor-pointer flex items-center gap-2"
                      onClick={() => setIsToggle(false)}
                    >
                      <MdLogout className="w-5 h-5" />
                      Logout
                    </li>
                  </Link>
                </ul>
              </div>
            </li>

            {/* Overlay Button */}
            <button
              type="button"
              onClick={() => setIsToggle(!isToggle)}
              className="text-2xl cursor-pointer md:hidden block"
            >
              <LuMenu />
            </button>
          </ul>

          {/* Mobile Overlay */}
          <div
            className={`absolute w-full top-[100%] left-0 bg-white shadow-lg z-10 transition-all px-12 ease-linear md:hidden block ${
              isToggle ? "h-[170px]" : "h-0"
            }`}
          >
            <nav
              className={`transition-opacity ease-linear ${
                isToggle ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul className="space-y-5 w-[10px] mt-6">
                <li className="cursor-pointer text-gray-700 font-medium hover:text-sky-500 transition-colors text-lg">
                  Home
                </li>
                <li className="cursor-pointer text-gray-700 font-medium hover:text-sky-500 transition-colors text-lg">
                  About
                </li>
                <li className="cursor-pointer text-gray-700 font-medium hover:text-sky-500 transition-colors text-lg">
                  Categories
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
