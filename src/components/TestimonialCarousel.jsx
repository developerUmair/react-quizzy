import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Khalid Al-Faisal",
    role: "Student",
    text: "I am truly grateful for the invaluable learning experience I've had on the AI Quran website. The platform has not only deepened my understanding of the Quran but has also allowed me to connect with the teachings of Islam on a profound level.",
  },
  {
    id: 2,
    name: "Syed Umair",
    role: "Teacher",
    text: "It's an honor for the invaluable learning experience I've had on the AI Quran website. The platform has not only deepened my understanding of the Quran but has also allowed me to connect with the teachings of Islam on a profound level.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true); // Trigger fade-out effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(false); // Trigger fade-in effect
    }, 300); // Adjust timeout to match the fade duration
  };

  const handlePrev = () => {
    setFade(true); // Trigger fade-out effect
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFade(false); // Trigger fade-in effect
    }, 300); // Adjust timeout to match the fade duration
  };

  return (
    <section className="bg-secondary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-inter font-semibold text-white mb-8">
          Happy <span className="text-[#dbac66]">Student</span> Testimonials
        </h2>

        <div className="relative max-w-xl mx-auto bg-white rounded-xl px-6 py-10 shadow-lg">
          {/* Carousel Item */}
          <div
            className={`flex flex-col items-center transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-3 mb-4 border-2 border-gray-300 rounded-full pl-1 py-1 pr-3">
              <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg font-inter">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-medium text-left">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-xs text-gray-500 text-left">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic text-sm font-inter md:text-base">
              "{testimonials[currentIndex].text}"
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-[-1rem] md:left-[-6rem] flex items-center">
            <button
              onClick={handlePrev}
              className="bg-white border border-gray-300 p-3 rounded-full md:rounded-lg md:px-6 md:py-3 shadow hover:bg-gray-100 transition focus:outline-none"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-[-1rem] md:right-[-6rem] flex items-center">
            <button
              onClick={handleNext}
              className="bg-white border border-gray-300 p-3 rounded-full md:rounded-lg md:px-6 md:py-3 shadow hover:bg-gray-100 transition focus:outline-none"
            >
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
