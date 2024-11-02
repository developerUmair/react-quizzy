import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import quran from "../assets/quran.png";
import { FiClock } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";

const courses = [
  {
    id: 1,
    title: "Reading Quran Basics",
    price: "$99.00",
    duration: "Live Classes",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Quran & Tajweed",
    price: "$35.00",
    duration: "Live Classes",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Quran Recitation",
    price: "$70.00",
    duration: "Live Classes",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Sermons and Bayans",
    price: "$170.00",
    duration: "Live Classes",
    level: "Advanced",
  },
  {
    id: 5,
    title: "Hadees and Fiqa",
    price: "$250.00",
    duration: "Live Classes",
    level: "Advanced",
  },
];

const Slider = ({ slidesToShow = 1, bgColor="transparent", btnColor="primary", priceColor="secondary", propColor='gray-500' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= courses.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full flex items-center">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-3 lg:left-0 bg-white border border-gray-300 p-3 rounded-full md:rounded-lg md:px-6 md:py-3 shadow hover:bg-gray-200 transition focus:outline-none z-10"
        style={{ transform: "translate(-50%, -120%)" }}
      >
        <FaArrowLeft className="text-gray-600" />
      </button>

      {/* Slides */}
      <div className="overflow-hidden w-full font-inter">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)`,
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="w-full px-0 md:px-4"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <div className={`bg-${bgColor} rounded-xl shadow-lg p-6 mb-4 border border-gray-200`}>
                <img
                  src={quran}
                  alt={course.title}
                  className="w-full h-32 object-cover mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className={`text-${priceColor} font-bold text-2xl mb-4`}>
                  {course.price}
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4 border-2 px-3 py-1 border-gray-300 rounded-lg">
                  <div className="flex items-center gap-x-3">
                    <FiClock className="size-5" />
                    <div>
                      <div className="text-xs">Duration</div>
                      <div className={`font-semibold text-${propColor}`}>{course.duration}</div>
                    </div>
                  </div>
                  <div className="h-8 border border-gray-300 mx-4"></div>
                  <div className="flex items-center gap-x-3">
                    <BsBarChart className="size-5" />
                    <div>
                      <div className="text-xs">Level</div>
                      <div className={`font-semibold text-${propColor}`}>{course.level}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className={`bg-${btnColor} text-white px-4 py-2 rounded-full max-w-fit`}>
                    Register Now
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded-full max-w-fit">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-3 lg:right-0 bg-white border border-gray-300 p-3 rounded-full md:rounded-lg md:px-6 md:py-3 shadow hover:bg-gray-200 transition focus:outline-none z-10"
        style={{ transform: "translate(50%, -120%)" }}
      >
        <FaArrowRight className="text-gray-600" />
      </button>
    </div>
  );
};

export default Slider;
