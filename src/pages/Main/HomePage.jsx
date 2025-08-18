import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdTravelExplore,
  MdOutlineHealthAndSafety,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { IoPricetagOutline, IoFastFoodOutline } from "react-icons/io5";
import { LuBookOpenText, LuLeaf } from "react-icons/lu";
import { GrTechnology, GrPersonalComputer } from "react-icons/gr";
import { RiHome2Line, RiParentLine } from "react-icons/ri";
import { GiArtificialIntelligence, GiConsoleController } from "react-icons/gi";
import { PiHandshakeLight } from "react-icons/pi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
function HomePage() {
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
    let newErrors = {};
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
      // Form is valid, you can now send the data
      console.log("Form data submitted:", formData);
      // Here you would typically send the data to a server
      alert("Form submitted successfully!");
    } else {
      console.log("Validation errors:", validationErrors);
    }
  };

  const categories = [
    {
      text: "AI",
      icon: GiArtificialIntelligence,
    },
    {
      text: "Personal Finance",
      icon: FaRegMoneyBillAlt,
    },
    {
      text: "Health and Wellness",
      icon: MdOutlineHealthAndSafety,
    },
    {
      text: "Sustainable Living",
      icon: LuLeaf,
    },
    {
      text: "Digital Marketing",
      icon: PiHandshakeLight,
    },
    {
      text: "Remote Work and Productivity",
      icon: MdProductionQuantityLimits,
    },
    {
      text: "Gaming",
      icon: GiConsoleController,
    },
    {
      text: "Food and Recipes",
      icon: IoFastFoodOutline,
    },
    {
      text: "Travel",
      icon: MdTravelExplore,
    },
    {
      text: "Home Decor & DIY",
      icon: RiHome2Line,
    },
    {
      text: "Parenting",
      icon: RiParentLine,
    },
    {
      text: "Personal Development",
      icon: GrPersonalComputer,
    },
    {
      text: "Tech & Gadget Reviews",
      icon: GrTechnology,
    },
    {
      text: "Book and Writing",
      icon: LuBookOpenText,
    },
  ];
  return (
    <div className="px-1.5 sm:px-3 md:px-6 lg:px-12 pt-12">
      {/* Home Section */}
      <section className="text-center py-20">
        <div className="max-w-5xl mx-auto space-y-5">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            SA Blogs: Your Source for Blogs & Beyond
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            From in-depth guides to daily inspiration, we explore the topics
            that matter most to you.
          </p>
          <Link
            to={"/main/category"}
            type="button"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-semibold text-lg
            bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-xl transition-all duration-300
            transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500"
          >
            Explore All Posts
          </Link>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-6">
        <div className="text-center">
          <h1
            className="text-2xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 
          leading-normal"
          >
            Our Latest Blogs
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {Array(3)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-lg hover:shadow-xl rounded-b-md group transition-shadow"
              >
                <div className="relative">
                  <img
                    src="../../../public/assets/depression.jpg"
                    alt="IMG"
                    className="w-full rounded-t-md"
                  />
                  <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 bg-black/50 rounded-t-md transition-opacity duration-300">
                    <button className="text-white p-3 translate-y-6 group-hover:translate-0 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-2 space-y-3">
                  <h1 className="text-xl font-semibold text-sky-500">
                    Blog Title
                  </h1>
                  <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, molestias cumque laborum facilis quis ad quo tempore
                    quae. Dolore dicta asperiores expedita. Voluptatem quo qui
                    rem atque, eaque molestiae itaque?
                  </p>
                  <div className="flex items-center gap-2">
                    <IoPricetagOutline className="w-6 h-6" />
                    Blog Category
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-6">
        <div className="text-center">
          <h1
            className="text-2xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 
          leading-normal"
          >
            Our Categories
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            From in-depth guides to daily inspiration, we explore the topics
            that matter most to you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
          {categories.map((data, i) => (
            <div
              className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              key={i}
            >
              <div className="w-16 h-16 rounded-full grid place-items-center bg-sky-500 text-white mb-4">
                <data.icon className="text-3xl" />
              </div>
              <h1 className="text-xl font-semibold text-sky-400">
                {data.text}
              </h1>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-6 bg-gray-50">
        <div className="text-center">
          <h1
            className="text-2xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 
        leading-normal"
          >
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            Get in touch with us and ask your queries
          </p>
        </div>
        <div className="bg-white shadow-lg h-[700px] max-w-2xl rounded-xl mx-auto mt-6 p-6">
          <div className="mx-auto w-30 h-30">
            <img src="../../../public/assets/Logo.png" alt="IMG" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  placeholder="your-email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  placeholder="Subject"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm resize-none"
                  placeholder="Your message..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
