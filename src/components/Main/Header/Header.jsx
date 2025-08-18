import React, { useRef, useState } from "react";
import Logo from "../../../../public/assets/Logo.png";
import { FaChevronDown, FaRegUserCircle } from "react-icons/fa";
import { FiCamera, FiPlus } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

function Header() {
  const imageRef = useRef();
  const [role, setRole] = useState("writer");
  const [isProfile, setIsProfile] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [userCategory, setUserCategory] = useState("AI");
  const [imageFile, setImageFile] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: userCategory,
  });
  const [errors, setErrors] = useState({}); // State for validation errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setBackgroundImage("");
    }
  };

  function validateForm() {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Blog title is required.";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Blog description is required.";
    }
    if (!imageFile) {
      newErrors.image = "An image is required for the blog.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const blogData = {
        ...formData,
        image: imageFile,
      };
      console.log("Blog Added successfully: ", blogData);

      // Close popup and reset form
      setIsPopUp(false);
      setFormData({
        title: "",
        description: "",
        category: userCategory,
      });
      setImageFile(null);
      setBackgroundImage("");
      setErrors({});
    } else {
      console.log("Form has validation errors.");
    }
  }

  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between shadow-lg bg-white px-12 h-[80px] relative">
        {/* Logo */}
        <div className="w-15 h-15">
          <Link to={"/main/"}>
            <img src={Logo} alt="IMG" />
          </Link>
        </div>

        {/* Nav Links */}
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
              <Link to={"category"}>Categories</Link>
            </li>
          </ul>
        </nav>

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
            {isProfile && (
              <div className="absolute w-full bg-white shadow-xl rounded-lg top-[55px] p-3">
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
            )}
          </li>

          {/* Add Blog Button */}
          <li>
            <FiPlus
              className={`text-2xl cursor-pointer hover:rotate-180 transition-transform ease-linear duration-200 ${
                role === "writer" ? "block" : "hidden"
              }`}
              onClick={() => setIsPopUp(true)}
            />
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
      </header>

      {/* Add Blog Popup */}
      {isPopUp && (
        <div className="fixed w-full h-screen bg-black/50 z-50 top-0 left-0 flex items-center justify-center">
          <div className="sm:w-[28rem] w-full bg-white absolute rounded-lg p-6 overflow-y-auto">
            <div className="text-center">
              <h1 className="text-2xl font-medium">
                Add Your Blog about {userCategory}
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 mt-4">
              {/* Image */}
              <div>
                <div
                  className="w-full h-40 bg-sky-300/50 place-items-center grid rounded-lg border-2 border-sky-600 mx-auto cursor-pointer text-sky-400"
                  onClick={() => imageRef.current.click()}
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!backgroundImage && <FiCamera className="w-7 h-7" />}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={imageRef}
                  onChange={handleImageChange}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                )}
              </div>

              {/* Title */}
              <div className="flex flex-col gap-2">
                <label htmlFor="title">Blog Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`border-2 ${
                    errors.title ? "border-red-500" : "border-sky-200"
                  } focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2`}
                  placeholder="Enter your blog title"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              {/* Descripiton */}
              <div className="flex flex-col gap-2">
                <label htmlFor="description">Blog Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={`border-2 ${
                    errors.description ? "border-red-500" : "border-sky-200"
                  } focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 resize-none`}
                  placeholder="Enter your blog descripiton"
                  rows={5}
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="flex flex-col gap-2">
                <label htmlFor="category">Blog Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="border-sky-200 focus:border-sky-400 focus:ring-sky-400 transition-all duration-200 hover:border-sky-300 w-full px-3
                  py-2 border rounded-lg focus:outline-none focus:ring-2"
                  readOnly
                  value={formData.category}
                />
              </div>
              <div className="flex items-center justify-center w-full gap-3.5">
                <div className="w-1/2">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg font-medium w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600
                  hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    onClick={() => setIsPopUp(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div className="w-1/2">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg font-medium w-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600
                    hover:via-blue-700 hover:to-indigo-700 text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    Add Blog
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
