import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Carter",
      role: "Founder, TechNova",
      feedback:
        "Working with Nandani was a fantastic experience. The website was delivered on time, with clean code and a professional design.",
    },
    {
      name: "Emily Johnson",
      role: "Marketing Lead, BrightEdge",
      feedback:
        "She understood our requirements perfectly and created a smooth, responsive web application. Highly recommended!",
    },
    {
      name: "David Smith",
      role: "Startup Owner",
      feedback:
        "Great communication and problem-solving skills. The project exceeded expectations, both in functionality and design.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-900 text-white"
    >
      {/* Heading */}
      <motion.h1
        className="md:text-6xl text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Testimonials
      </motion.h1>

      {/* Testimonials grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/70 border border-gray-700 rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 italic">"{t.feedback}"</p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-[#00FFE6]">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
