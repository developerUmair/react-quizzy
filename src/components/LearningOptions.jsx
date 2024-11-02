import React from "react";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoCalendarOutline, IoExtensionPuzzleOutline } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";

const LearningOptions = () => {
  return (
    <section className="relative py-16 ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-4 mb-10 px-4 lg:px-0">
        {/* Left Heading */}
        <div className="text-left max-w-md">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug font-inter">
            Creating student <span className="text-secondary">success</span>{" "}
            with our <span className="text-secondary">AI Quran</span>
          </h1>
        </div>

        {/* Right Subtext */}
        <p className="text-gray-600 text-base max-w-md font-inter">
          We understand that everyone's schedule is different. That's why we
          offer flexible learning options.
        </p>
      </div>
      {/* Background Container */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-6 md:py-14">
        {/* Tilted Background */}
        <div className="absolute inset-0 bg-secondary rounded-3xl md:transform md:rotate-1 z-0"></div>

        {/* Content */}
        <div className="relative flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-10 z-10 text-white font-inter py-8 md:py-0">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-[#dbac66] flex justify-center items-center rounded-full mb-5 w-10 h-10 mx-auto cursor-pointer transition-all duration-500">
              <HiComputerDesktop className="text-black/80 size-5" />
            </div>
            <h4 className="text-lg font-medium mb-3 capitalize">
              Online Learning Platform
            </h4>
            <p className="text-sm font-normal">
              Following a structured course plan, your teacher will guide and
              help you learn faster & correctly.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-[#dbac66] flex justify-center items-center rounded-full mb-5 w-10 h-10 mx-auto cursor-pointer transition-all duration-500">
              <IoCalendarOutline className="text-black/80 size-5" />
            </div>
            <h4 className="text-lg font-medium mb-3 capitalize">
              Flexible Schedule
            </h4>
            <p className="text-sm font-normal">
              Schedule your Arabic and Quran classes when it works for you! We
              have teachers available 24/7.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-[#dbac66] flex justify-center items-center rounded-full mb-5 w-10 h-10 mx-auto cursor-pointer transition-all duration-500">
              <RiPresentationFill className="text-black/80 size-5" />
            </div>
            <h4 className="text-lg font-medium mb-3 capitalize">
              Live Teachers
            </h4>
            <p className="text-sm font-normal">
              Following a structured course plan, your teacher will guide and
              help you learn faster & correctly.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-[#dbac66] flex justify-center items-center rounded-full mb-5 w-10 h-10 mx-auto cursor-pointer transition-all duration-500">
              <IoExtensionPuzzleOutline className="text-black/80 size-5" />
            </div>
            <h4 className="text-lg font-medium mb-3 capitalize">
              Games & Activities
            </h4>
            <p className="text-sm font-normal">
              Our online Activity Center has games, download, worksheets and
              with learning material specific.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;
