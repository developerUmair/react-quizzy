import React from "react";

const SelectDropdown = ({ 
  label = "", 
  placeholder = "Select an option", 
  options = [], 
  onChange, 
  value, 
  className = "" 
}) => {
  return (
    <div>
      {/* Label */}
      {(label && value) && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}

      {/* Dropdown */}
      <select
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={`mt-1 block w-full py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm ${className}`}
      >
        {/* Placeholder option */}
        <option value="" disabled>
          {placeholder}
        </option>
        
        {/* Render options */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
