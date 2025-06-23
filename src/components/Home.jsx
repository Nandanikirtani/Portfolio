import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div className="h-screen place-content-center flex flex-col md:flex-row gap-4 md:gap-[40px]">
        <div class=" md:w-2xl md:text-left text-center p-8 justify-center">
          <h1 className="md:text-4xl md:mt-5 text-2xl">Hello I am</h1>
          <h1 className="md:text-6xl text-4xl font-bold text-[#00FFE6]">
            Nandani Kirtani
          </h1>
          <motion.h1
            className="text-red-500 mt-2"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            EAT() - Sleep() - Code() - Repeat()
          </motion.h1>
          <motion.h1
            className="mt-10 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            FullStack Developer
          </motion.h1>
          <h3 className="mt-2 md:w-xl">
            Crafting seamless web experiences from front-end finesse to back-end
            power.I create seamless digital experiences that blend thoughtful
            design with strong logic. Focused on usability, performance, and
            scalability from front to back.
          </h3>
          <div className="md:mt-12 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 ml-3 py-2 px-8 mr-5 rounded-lg"
            >
              View Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="border border-red-500 py-2 px-8 rounded-lg"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
        <div class=" md:w-lg md:mt-16 ">
          <img className="md:w-xl w-sm rounded-lg mx-auto" src="/home.gif" alt="" />
        </div>
      </div>
    </div>
  );
}
