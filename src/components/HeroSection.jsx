import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Slider from "./Slider";
import RegisterForm from "./RegisterForm";

const HeroSection = () => {
  return (
    <section className="bg-[#222221]">
      <div className="max-w-6xl text-white py-10 lg:py-20 px-6 lg:px-16 flex flex-col lg:flex-row lg:justify-between mx-auto">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold font-inter">
              Recite the <span className="text-[#dbac66]">Quran</span> in an
              orderly and clear manner
              <span className="text-sm pl-3 font-normal">
                (Surah Muzammil: Verse 4)
              </span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-md font-inter">
            Comprehensive Arabic, Quran, and Islamic studies courses suitable
            for all ages and skill levels online.
          </p>
          <div className="space-x-2 md:space-x-4 font-inter">
            <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              Find your course
            </button>
            <button className="border border-gray-300 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Sign up for Free
            </button>
          </div>
        </div>

        {/* Right Content - Register Form */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
