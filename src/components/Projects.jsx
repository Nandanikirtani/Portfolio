import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [flipped, setFlipped] = useState(false);
  function flip() {
    setFlipped((prev) => !prev);
  }
  const project = [
    {
      name: "Wallify",
      image: "/wallify.png",
      desc: "Finance Manager is an all-in-one personal finance app designed to help users track expenses, manage budgets, calculate SIPs/EMIs, and monitor investment portfolios. Built for financial empowerment, it offers intuitive tools and insights to support smarter money decisions, especially for women.",
      tech: ["React.js", "Bootstrap"],
      github: "https://github.com/Nandanikirtani/Wallify",
      demo: "https://nandanikirtani.github.io/Wallify/",
    },
    {
      name: "Jet Set Journey",
      image: "/jetset.png",
      desc: "Jet Set Journey is a sleek and user-friendly travel web app that helps users explore destinations, plan trips, and discover curated travel experiences. With interactive maps, destination highlights, and smart itinerary features, it transforms how users dream, plan, and embark on their next adventure",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Jashank06/Travelling-Project",
      demo: "",
    },
  ];
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center "
    >
      <motion.h1
        className="md:text-6xl text-4xl font-bold text-center mb-10 z-20"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Projects
      </motion.h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {project.map((p, index) => (
          <div
            key={index}
            className="flip-card relative w-80 h-80 cursor-pointer [perspective:1000px]"
          >
            <div className="flip-inner transition-transform duration-700 w-full h-full relative preserve-3d">
              {/* Front Side */}
              <div className="absolute w-full h-full border rounded-lg shadow-xl backface-hidden flex flex-col">
                <img className="h-48 rounded-t-lg" src={p.image} alt="" />
                <h1 className="font-bold text-xl px-4 py-2">{p.name}</h1>
                <div className="flex flex-wrap gap-2 px-4">
                  {p.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-gray-500 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back Side */}
              <motion.div className="absolute w-full h-full bg-gray-900 text-white rounded-lg shadow-xl rotate-y-180 backface-hidden p-4 flex flex-col" >
                <h3 className="text-center font-bold text-lg mb-1">Overview</h3>
                <p className="text-sm overflow-y-auto flex-grow leading-snug m-0 p-0">
                  {p.desc}
                </p>
                  <div className="flex justify-end gap-4 mt-auto px-4 pb-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                  >
                    GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded"
                    >
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
