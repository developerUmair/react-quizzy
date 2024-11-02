import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import quran from "../assets/quran.png";
import { FiClock } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import Slider from "./Slider";

// Sample data for courses
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

const CourseSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine the number of slides to show based on screen size
  const slidesToShow =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

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
    <section className="max-w-6xl mx-auto py-10 px-4">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-inter font-semibold md:pl-6 text-black">
          Explore Featured <span className="text-secondary">Courses</span>
        </h2>
      </div>

      <Slider slidesToShow={window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1} bgColor="white" />
    </section>
  );
};

export default CourseSlider;
