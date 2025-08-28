import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b  text-white"
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Get in Touch
      </motion.h1>

      {/* Contact Container */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Left Card - Contact Info */}
        <motion.div
          className="bg-gray-800/70 rounded-2xl shadow-lg p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#00FFE6] text-3xl font-semibold mb-4">Have a Project?</h2>
          <p className="text-lg text-gray-300 mb-8">Let’s collaborate and bring your ideas to life.</p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MdEmail className="text-2xl text-[#00FFE6]" />
              <a
                href="mailto:nandanikirtani99@gmail.com"
                className="hover:underline"
              >
                nandanikirtani99@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-2xl text-[#00FFE6]" />
              <a href="tel:+919818990772" className="hover:underline">
                +91 9818990772
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Card - Links */}
        <motion.div
          className="bg-gray-800/70 rounded-2xl shadow-lg p-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#00FFE6] text-3xl font-semibold mb-4">Connect with Me</h2>
          <p className="text-lg text-gray-300 mb-8">Follow my work and connect on professional platforms.</p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaGithub className="text-2xl text-[#00FFE6]" />
              <a
                href="https://github.com/Nandanikirtani"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Nandanikirtani
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-2xl text-[#00FFE6]" />
              <a
                href="https://www.linkedin.com/in/nandani-kirtani/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/nandani-kirtani
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
