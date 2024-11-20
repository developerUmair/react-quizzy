import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";

const ClaimSection = () => {
  const [selectedFrequency, setSelectedFrequency] =
    useState("1 - Original Claim");
  const [selectedReferringProvider, setSelectedReferringProvider] =
    useState("");
  const [selectedNewDropdown, setSelectedNewDropdown] = useState(""); // New state for the new dropdown

  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      {/* Claim Info */}
      {/* <div className="flex flex-wrap items-start gap-4 mb-6">
        <div className="w-24">
          <label className="block text-gray-700 text-xs font-medium mb-1">Claim #</label>
          <div className="bg-gray-100 px-3 py-1.5 rounded text-sm">New</div>
        </div>

        <div className="w-48">
          <label className="block text-gray-700 text-xs font-medium mb-1">Reference #</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-sm px-3 py-1.5 text-sm outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center text-amber-500 text-xs">
          <div></div>
          <IoWarning className="w-4 h-4 mr-1" />
          <span>Claim is incomplete</span>
        </div>


        <div className="ml-auto">
          <label className="block text-gray-700 text-xs font-medium mb-1">Frequency</label>
          <select
            value={selectedFrequency}
            onChange={(e) => setSelectedFrequency(e.target.value)}
            className="flex items-center justify-between w-44 border border-gray-300 rounded-sm px-3 py-1.5 text-sm bg-white"
          >
            <option>1 - Original Claim</option>
            <option>2 - Replacement Claim</option>
            <option>3 - Void Claim</option>
          </select>
        </div>
      </div> */}

      <div className="flex flex-wrap items-start gap-4 mb-6">
        <div className="w-24">
          <label className="block text-gray-700 text-xs font-medium mb-1">
            Claim #
          </label>
          <div className="bg-gray-100 px-3 py-1.5 rounded text-sm">New</div>
        </div>
        <div className="w-48">
          <label className="block text-gray-700 text-xs font-medium mb-1">
            Reference #
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-sm px-3 py-1.5 text-sm outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center text-amber-500 text-xs h-[40px] pt-8">
          <IoWarning className="w-4 h-4 mr-1" />
          <span>Claim is incomplete</span>
        </div>
        <div className="ml-auto">
          <label className="block text-gray-700 text-xs font-medium mb-1">
            Frequency
          </label>
          <select
            value={selectedFrequency}
            onChange={(e) => setSelectedFrequency(e.target.value)}
            className="flex items-center justify-between w-44 border border-gray-300 rounded-sm px-3 py-1.5 text-sm bg-white"
          >
            <option>1 - Original Claim</option>
            <option>2 - Replacement Claim</option>
            <option>3 - Void Claim</option>
          </select>
        </div>
      </div>

      {/* Provider Inputs */}
      <div className="space-y-4">
        {[
          "Patient",
          "Rendering Provider",
          "Billing Provider",
          "Supervising Provider",
          "Ordering Provider",
          "Referring/PCP Provider",
        ].map((placeholder, index) => (
          <div key={index} className="flex items-stretch">
            <div className="w-1 rounded-l bg-red-500" />
            <input
              type="text"
              placeholder={placeholder}
              className="flex-1 border-y border-l border-gray-300 px-3 py-2 outline-none focus:bg-[#F5F8FA] rounded-sm"
            />
            <div className="flex items-center border-y border-r border-gray-300 bg-[#F5F8FA]">
              <button className="p-2 text-gray-600 hover:text-gray-800 rounded-sm">
                <FaSearch className="h-4 w-4" />
              </button>
            </div>
            {placeholder === "Referring/PCP Provider" ? (
              <>
                <div className="ml-2 flex items-center">
                  <select
                    value={selectedReferringProvider}
                    onChange={(e) =>
                      setSelectedReferringProvider(e.target.value)
                    }
                    className="w-44 border border-gray-300 rounded-sm px-3 py-2 text-sm bg-white"
                  >
                    <option value="">Select Provider</option>
                    <option value="Provider 1">Provider 1</option>
                    <option value="Provider 2">Provider 2</option>
                    <option value="Provider 3">Provider 3</option>
                  </select>
                </div>
                <div className="ml-2 flex items-center border border-gray-300 bg-[#F5F8FA] rounded-[4px]">
                  <button className="p-2 text-gray-600 hover:text-gray-800 ">
                    <FaUser className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="ml-2 flex items-center border border-gray-300 bg-[#F5F8FA]">
                <button className="p-2 text-gray-600 hover:text-gray-800 rounded-sm">
                  <FaUser className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Full-Width Dropdown */}
      <div className="mt-3">
        <select
          value={selectedNewDropdown}
          onChange={(e) => setSelectedNewDropdown(e.target.value)}
          className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm bg-white"
        >
          <option value="">Choose an Option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default ClaimSection;
