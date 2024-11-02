import React from "react";
import Footer from "../components/Footer";
import QuranLearning from "../components/QuranLearning";
import MemorizeQuran from "../components/MemorizeQuran";
import LearningOptions from "../components/LearningOptions";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CourseSlider from "../components/CourseSlider";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <HeroSection />
        <CourseSlider />
        {/* <LearningOptions /> */}
        <QuranLearning />
        <MemorizeQuran />
      </div>
      <TestimonialCarousel />
      <Footer />
    </>
  );
};

export default Home;
