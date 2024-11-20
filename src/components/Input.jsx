import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";

const TextInput = ({ label, placeholder, disabled }) => {
  return (
    <div className="flex items-center gap-x-3 py-1">
      {/* <label className="w-1/3 text-sm font-medium text-gray-700">{label}</label> */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className="w-full py-1.5 pl-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        />
        {/* Icons */}
        <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
          <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
        </div>
      </div>
      <div className="rounded-sm px-3.5 py-2 flex items-center bg-blue-200 pointer-events-none">
        <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default TextInput;