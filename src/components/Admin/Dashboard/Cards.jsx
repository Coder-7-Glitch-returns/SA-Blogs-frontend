import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RiBloggerLine } from "react-icons/ri";

function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow flex justify-between p-3">
        {/* Content */}
        <div>
          <p className="text-gray-500 font-medium text-xl">Users</p>
          <h1 className="font-bold mt-3 text-3xl text-sky-500">1</h1>
        </div>

        {/* Icon */}
        <div className="bg-sky-200/70 w-10 h-10 rounded-lg grid place-items-center">
          <FaRegUser className="text-sky-600 text-lg" />
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow flex justify-between p-3">
        {/* Content */}
        <div>
          <p className="text-gray-500 font-medium text-xl">Active Users</p>
          <h1 className="font-bold mt-3 text-3xl text-sky-500">1</h1>
        </div>

        {/* Icon */}
        <div className="bg-sky-200/70 w-10 h-10 rounded-lg grid place-items-center">
          <FaRegUser className="text-sky-600 text-lg" />
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow flex justify-between p-3">
        {/* Content */}
        <div>
          <p className="text-gray-500 font-medium text-xl">Total Blogs</p>
          <h1 className="font-bold mt-3 text-3xl text-sky-500">100</h1>
        </div>

        {/* Icon */}
        <div className="bg-sky-200/70 w-10 h-10 rounded-lg grid place-items-center">
          <RiBloggerLine className="text-sky-600 text-lg" />
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow flex justify-between p-3">
        {/* Content */}
        <div>
          <p className="text-gray-500 font-medium text-xl">Blocked Users</p>
          <h1 className="font-bold mt-3 text-3xl text-sky-500">2</h1>
        </div>

        {/* Icon */}
        <div className="bg-sky-200/70 w-10 h-10 rounded-lg grid place-items-center">
          <FaRegUser className="text-sky-600 text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
