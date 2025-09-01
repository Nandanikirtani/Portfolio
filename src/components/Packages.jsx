import React from "react";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Basic",
    price: "$199",
    desc: "Perfect for individuals or startups just getting online.",
    features: [
      "1-page website",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
    ],
  },
  {
    title: "Intermediate",
    price: "$499",
    desc: "Best for growing businesses needing a custom presence.",
    features: [
      "Up to 5 pages",
      "Custom UI design",
      "SEO optimization",
      "Performance optimized",
      "1-month free support",
    ],
  },
  {
    title: "Advanced",
    price: "$999",
    desc: "Ideal for scaling businesses needing complex solutions.",
    features: [
      "Up to 12 pages",
      "Advanced animations",
      "Database integration",
      "E-commerce ready",
      "3-month free support",
    ],
  },
  {
    title: "Maintenance",
    price: "$99/mo",
    desc: "Ongoing updates & support to keep your site secure.",
    features: [
      "Regular backups",
      "Security monitoring",
      "Bug fixes & updates",
      "Content updates",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-[#00FFE6]">Packages</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3">{pkg.title}</h3>
              <p className="text-3xl font-bold text-[#00FFE6] mb-4">
                {pkg.price}
              </p>
              <p className="text-sm text-gray-300 mb-6">{pkg.desc}</p>
              <ul className="flex-1 space-y-3 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#00FFE6]">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <a href="mailto:nandanikirtani99@gmail.com?subject=Interested%20in%20a%20Package&body=Hi%20Nandani,%20I%20am%20interested%20in%20your%20web%20development%20services.%20Please%20share%20more%20details.">
                <button className="mt-8 w-full py-2 rounded-xl bg-[#00FFE6] text-gray-900 font-semibold hover:bg-[#00ccb5] transition">
                  Get Started
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
