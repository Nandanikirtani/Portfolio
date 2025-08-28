import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const exp = [
    {
      role: "Software Engineering Intern",
      company: "Hitachi Systems Pvt. Ltd.",
      time: "August 2025 – Present",
      desc: "Learning and exploring new technologies in software development, contributing to real-world projects, and enhancing coding skills in a professional environment.",
    },
    {
      role: "Web Development Intern",
      company: "Manav Rachna University",
      time: "June 2025 – Ongoing",
      desc: "Developing an e-learning platform for university internship programs, gaining hands-on experience in scalable solutions..",
    },
    {
      role: "Open Source Contributor",
      company: "GitHub",
      time: "2024 – Present",
      desc: "Actively contributing to open source projects with 50+ meaningful pull requests merged, improving code quality, features, and documentation across repositories.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16  text-white"
    >
      {/* Heading */}
      <motion.h1
        className="md:text-6xl text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Experience
      </motion.h1>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-gray-600"></div>

        <div className="flex flex-col gap-10">
          {exp.map((e, index) => (
            <motion.div
              key={index}
              className={`relative md:w-1/2 ${
                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/70 rounded-2xl shadow-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold text-[#00FFE6]">{e.role}</h2>
                <p className="text-gray-400 text-sm mt-1">{e.company}</p>
                <p className="text-gray-500 text-sm">{e.time}</p>
                <p className="mt-4 text-gray-300 leading-relaxed">{e.desc}</p>
              </div>
              <div
                className="absolute top-6 left-[-0.6rem] md:left-auto md:right-[-0.6rem] 
                w-4 h-4 rounded-full bg-[#00FFE6] border-2 border-gray-900"
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
