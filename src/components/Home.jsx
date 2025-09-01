import React from "react";
import { motion } from "framer-motion";
import home from "../assets/home.gif";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <div id="home" className="md:pt-32 pt-16">
      <div className="h-full justify-center items-center flex flex-col md:flex-row gap-6 md:gap-32 ">
        <div className="text-center md:text-left mt-8 md:mt-0">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋 Hello, I'm
        </motion.h2>

        <motion.h1
          className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#00FFE6] mt-2 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nandani Kirtani
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Full-Stack Web Developer 💻",
            2000,
            "React & Node.js Specialist ⚡",
            2000,
            "Building Scalable Web Apps 🚀",
            2000,
          ]}
          wrapper="h3"
          className="text-red-400 text-lg sm:text-xl md:text-2xl mt-3 font-semibold"
          repeat={Infinity}
        />

        <p className="mt-6 text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0 text-lg sm:text-base md:text-lg">
          I help startups and businesses create{" "}
          <span className="text-red-400">
            modern, high-performing websites
          </span>{" "}
          that convert visitors into clients. From pixel-perfect frontends to
          powerful backends, I deliver solutions that are{" "}
          <span className="text-red-400">fast, scalable, and user-friendly</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <motion.a
            href="https://github.com/Nandanikirtani"
            target="_blank"
            className="bg-red-500 hover:bg-red-600 transition-all duration-300 py-3 px-6 md:px-8 rounded-2xl text-white font-semibold shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            🚀 View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 py-3 px-6 md:px-8 rounded-2xl font-semibold shadow-lg text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            📩 Hire Me
          </motion.a>
        </div>
      </div>
        <div className=" md:w-lg md:mt-16 ">
          <img
            className="md:w-xl w-lg rounded-lg mx-auto mb-6"
            src={home}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
