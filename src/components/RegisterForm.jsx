import React from 'react';

const RegisterForm = () => {
  return (
    <div className="flex justify-center">
      <form className="bg-white bg-opacity-10 backdrop-blur-lg border-opacity-30 rounded-lg p-8 shadow-lg max-w-md w-full">
        <div className="mb-3">
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            className="w-full p-3 border border-transparent rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#dbac66]"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-transparent rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#dbac66]"
          />
        </div>
        <div className="mb-3">
          <textarea
            id="description"
            placeholder="Tell us about yourself"
            rows="4"
            required
            className="w-full p-3 border border-transparent rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#dbac66]"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-[#dbac66] hover:bg-[#c8a057] text-white font-bold py-2 rounded-lg transition duration-200">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
