// components/Footer.js

import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className=" bg-primary text-gray-300 p-8 sm:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-4 mb-6">
            <div className="md:flex md:items-center md:justify-between gap-6">
              {/* Heading and Description */}
              <div className="md:w-1/2">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white font-inter mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-400 mb-4 text-base">
                  Sign up with your email address for our new courses and
                  events!
                </p>
              </div>

              {/* Email Form */}
              <div className="flex items-center md:w-1/2 max-w-md relative border rounded-full font-inter">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-20 rounded-full bg-[#393835]  focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-secondary text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Al Quran Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2 font-inter">
              AL QURAN
            </h3>
            <p className="text-sm font-inter">
              We take learning online to the next level by providing online
              classroom settings, qualified and trained teachers, organized and
              structured courses.
            </p>
          </div>

          {/* Find a Course Links */}
          <div>
            <h3 className="text-lg font-medium font-inter text-white mb-2">
              Find a course
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Adult Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Kid & Teens Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Learn Arabic Online for Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Online Arabic Teachers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Online Quran Teachers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Online Hifz Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Islamic Studies for Kids
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Unlock Quran Essentials
                </a>
              </li>
            </ul>
          </div>

          {/* AL Quran Info Links */}
          <div>
            <h3 className="text-lg font-medium font-inter text-white mb-2">
              AL Quran
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Help And Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  About AL QURAN?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Why AL QURAN?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Study Abroad Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Student Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & More Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Resources & More
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Free Arabic Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Recommended Arabic Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Student Spotlight
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#393835] hover:bg-secondary text-white transition-all duration-300"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#393835] hover:bg-secondary text-white transition-all duration-300"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#393835] hover:bg-secondary text-white transition-all duration-300"
            >
              <IoLogoTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#393835] hover:bg-secondary text-white transition-all duration-300"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>

          {/* Terms & Policies */}
          <div className="space-x-4 text-gray-400 mb-4 md:mb-0 font-inter">
            <a href="#" className="hover:text-white">
              Terms & Condition
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 font-inter">
            © Copyright alquran {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
