import React from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center md:mt-0 mt-20"
    >
      <motion.h1
        className="md:text-6xl text-4xl font-bold text-center mb-10 z-20"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact
      </motion.h1>

      <div className="h-full place-content-center mt-4 mb-4 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="order-2 md:order-1 md:w-2xl md:text-left text-center p-8 justify-center">
          <h1 className="text-[#00FFE6] text-4xl">Have a project?</h1>
          <h1 className="text-3xl mt-6">Get in touch</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <div className="flex items-center gap-2 text-sm mb-2">
                <MdEmail className="text-xl" />
                <a
                  href="mailto:nandanikirtani99@gmail.com"
                  className="hover:underline"
                >
                  nandanikirtani99@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MdPhone className="text-xl" />
                <a href="tel:+919818990772" className="hover:underline">
                  +91 9818990772
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Important Links</h3>
              <div className="flex items-center gap-2 text-sm mb-2 ">
                <FaGithub className="text-xl" />
                <a
                  href="https://github.com/Nandanikirtani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/Nandanikirtani
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaLinkedin className="text-xl" />
                <a
                  href="https://linkedin.com/in/nandanikirtani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  https://www.linkedin.com/in/nandani-kirtani/
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 md:order-2 md:w-lg flex flex-col gap-6">
          <h1 className="text-3xl font-semibold">Let's work together</h1>

          <form className="shadow-lg shadow-amber-50 p-6 rounded-lg space-y-4 w-full max-w-md">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFE6]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFE6]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FFE6]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="border border-[#00FFE6] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#00FFE6] hover:text-black transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
