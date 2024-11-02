import React from "react";
import img from "../assets/img.jpg";

const MemorizeQuran = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 md:py-16 p-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-8 md:gap-x-10 lg:gap-28">
          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="relative w-full h-full">
              <img
                src={img}
                alt="Quran App on Mobile Phone"
                className="w-full h-full object-cover rounded-t-3xl rounded-bl-3xl shadow-xl"
              />
            </div>
          </div>
          {/* Right Content Section */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-5xl font-semibold text-gray-900 font-inter mb-5">
                How to memorize Quran{" "}
                <span className="text-secondary">easy online</span>
              </h2>

              <div className="space-y-4 font-inter">
                <p className="text-gray-600 text-base">
                  Memorizing the quran is a noble and rewarding endeavor. With
                  the advent of online resources, it has become more and more
                  acessible than ever before.
                </p>
                <div className="flex justify-start items-center gap-x-10">
                  <div className="flex flex-col gap-y-1 font-inter">
                    <h3 className="font-semibold">Set Your Intention</h3>
                    <h3 className="font-semibold">Repeat and Listen</h3>
                    <h3 className="font-semibold">Break It Down</h3>
                  </div>
                  <div className="flex flex-col gap-y-1 font-inter">
                    <h3 className="font-semibold">Create a Dedicated Space</h3>
                    <h3 className="font-semibold">Schedule Memorization Sessions</h3>
                    <h3 className="font-semibold">Choose a Specific Surah</h3>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="bg-primary text-white px-6 py-3  
              hover:bg-gray-800 transition duration-300 ease-in-out 
              hover:shadow-lg text-sm md:text-base max-w-fit rounded-full font-inter"
            >
              Learn for All Levels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorizeQuran;
