import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaUserPlus } from 'react-icons/fa';
import { IoWarning } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

const ClaimForm = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-end gap-x-2">
          <div className="flex flex-col gap-y-1">
            <div>Claim#</div>
            <label
              htmlFor="claim"
              className="bg-gray-200 rounded-md px-8 text-sm py-1.5 border"
            >
              New
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Reference #"
                className="w-full py-1.5 pl-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
                <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
                <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer ml-2" />
              </div>
            </div>
            <p className="flex items-center gap-x-1">
              <span>
                <IoWarning className="text-base text-yellow-400" />
              </span>
              Claim is incomplete
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            Select Claim Frequency
            <FaChevronDown />
          </button>
          {/* Dropdown options can be added here */}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        <div className="flex items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">Patient</label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder=""
              className="w-full py-1.5 pl-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
              <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
              <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer ml-2" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">Rendering Provider</label>
          <div className="relative flex-1">
            <select
              className="w-full py-1.5 pl-3 pr-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <option>Select Rendering Provider</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
              <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
              <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer ml-2" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">Billing Provider</label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder=""
              className="w-full py-1.5 pl-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
              <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
              <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer ml-2" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">Supervising Provider</label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder=""
              className="w-full py-1.5 pl-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
              <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
              <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer ml-2" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">Ordering Provider</label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder=""
              className="w-full py-1.5 pl-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
              <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
              <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer ml-2" />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <label className="w-1/3 text-sm font-medium text-gray-700">Referring/PCP Provider</label>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder=""
              className="w-full py-1.5 pl-10 border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 rounded-sm px-3.5 flex items-center bg-blue-200 pointer-events-none">
              <BiSearch className="text-white hover:text-gray-700 cursor-pointer" />
              <FaUserPlus className="text-white hover:text-gray-700 cursor-pointer ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;