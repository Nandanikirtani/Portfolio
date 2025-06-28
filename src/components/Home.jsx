import React from "react";
import { motion } from "framer-motion";
import home from "../assets/home.gif";
export default function Home() {
  
  return (
    <div id ="home" className="pt-16 "> 
      <div className="h-full place-content-center flex flex-col md:flex-row ">
        <div className=" md:w-2xl md:text-left text-center p-8 justify-center">
          <h1 className="md:text-4xl md:mt-5 text-2xl">Hello I'm</h1>
          <h1 className="md:text-6xl text-4xl font-bold text-[#00FFE6]">
            Nandani Kirtani
          </h1>
          <motion.h1
            className="text-red-500 md:text-lg mt-2"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            EAT() - Sleep() - Code() - Repeat()
          </motion.h1>
          <motion.h1
            className="mt-10 text-3xl "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            FullStack Developer
          </motion.h1>
          <h3 className="mt-4 md:w-xl md:text-lg">
            Crafting seamless web experiences from front-end finesse to back-end
            power.I create seamless digital experiences that blend thoughtful
            design with strong logic. Focused on usability, performance, and
            scalability from front to back.
          </h3>
          <div className="md:mt-12 mt-6">
            <motion.a
            href="https://github.com/Nandanikirtani"
            target="_blank"
              initial={{ y: -300}}
              animate={{
                y: [-300, 0, -30, 0, -10, 0], 
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
                times: [0, 0.3, 0.5, 0.7, 0.85, 1], 
              }}
              className="bg-red-500 ml-3 py-3 px-8 mr-5 rounded-lg"
            >
              View Work
            </motion.a>
            <motion.a
            href="#contact"
              initial={{ y: -300 }}
              animate={{
                y: [-300, 0, -30, 0, -10, 0], 
                opacity: 1,
              }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
                times: [0, 0.3, 0.5, 0.7, 0.85, 1], 
              }}
              className="border border-red-500 py-3 px-8 rounded-lg"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
        <div className=" md:w-lg md:mt-16 ">
          <img
            className="md:w-xl w-sm rounded-lg mx-auto mb-6"
            src={home}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
