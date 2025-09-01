import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <motion.h1
        className="md:text-6xl text-5xl h-16 font-bold text-center"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: [200, 0] }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        About <span className="text-[#00FFE6]">Me</span>
      </motion.h1>

      <motion.p
        className="text-center md:text-lg mt-6 max-w-2xl w-full mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        I'm a passionate <span className="font-semibold">Web Developer</span>{" "}
        with a strong foundation in software development and hands-on
        experience building modern, responsive applications. My focus is on
        crafting clean, scalable solutions that merge{" "}
        <span className="text-[#00FFE6] font-semibold">design and logic</span>{" "}
        to deliver value-driven results.
      </motion.p>

      <motion.p
        className="text-center md:text-lg mt-6 max-w-2xl w-full mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        Over time, I’ve had the opportunity to work on projects that helped{" "}
        <span className="font-semibold">startups and small businesses</span>{" "}
        strengthen their online presence — from interactive landing pages to
        complete web solutions. I enjoy collaborating with clients, turning
        their vision into digital experiences that not only look great but{" "}
        <span className="font-semibold">drive engagement and growth</span>.
      </motion.p>

      <motion.p
        className="text-center md:text-lg mt-6 max-w-2xl w-full mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
      >
        Whether it’s building a sleek portfolio, a scalable business website,
        or an interactive app, I bring{" "}
        <span className="text-[#00FFE6] font-semibold">curiosity,
        consistency,</span> and a problem-solving mindset to every project. My
        goal is simple — to help brands and businesses create a{" "}
        <span className="font-semibold">lasting digital impact</span>.
      </motion.p>
    </section>
  );
}
