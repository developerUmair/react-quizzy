import React, { useState } from "react";
import ClaimSection from "./ClaimSection";
import ChargesSection from "./ChargesSection";

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case "claim":
      return <ClaimSection />;
    case "charges":
      return <ChargesSection />;
    // case "additional":
    //   return <AdditionalInfoSection />;
    // case "ambulance":
    //   return <AmbulanceInfoSection />;
    default:
      return <ClaimSection />;
  }
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("claim");

  return (
    <div className="p-4 bg-gray-100 max-w-5xl mx-auto">
      {/* Tabs Header */}
      <div className="flex space-x-4">
        {["Claim", "Charges", "Additional Info", "Ambulance Info"].map(
          (tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.toLowerCase().replace(" ", "")
                  ? "text-red-600 border-t-2 border-red-500 bg-white"
                  : "text-gray-500 hover:text-red-600"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Tab Content */}
      <div className="">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Tabs;
