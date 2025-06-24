import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="h-screen flex flex-col items-center justify-center md:mt-16 mt-6">
      <motion.h1
        className="md:text-6xl text-4xl h-16 font-bold text-center"
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
        className="text-center md:text-lg mt-6 max-w-2xl w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        I'm a passionate and curious student at Manav Rachna University, currently exploring the dynamic world of technology. With a keen interest in software development and innovation, I enjoy building creative solutions that merge logic with design. My academic journey has provided a strong foundation in core computer science concepts and hands-on project experience.
      </motion.p>
      <motion.p
        className="text-center md:text-lg mt-6 max-w-2xl w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        Beyond the classroom, I actively explore various tech domains including web development and open-source contributions. I’m driven by a desire to keep learning, experimenting, and growing as a developer. Whether it's developing interactive web apps or diving into new tools and frameworks, I’m always excited to expand my skill set and contribute to meaningful tech projects.
      </motion.p>
    </section>
  );
}
