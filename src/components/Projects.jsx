import { motion } from "framer-motion";
import jetset from "../assets/jetset.png";
import wallify from "../assets/wallify.png";
import edutainment from "../assets/edutainment.png";

export default function Projects() {
  const project = [
    {
      name: "Wallify",
      image: wallify,
      desc: "Finance Manager is an all-in-one personal finance app designed to help users track expenses, manage budgets, calculate SIPs/EMIs, and monitor investment portfolios. Built for financial empowerment, it offers intuitive tools and insights to support smarter money decisions, especially for women.",
      tech: ["React.js", "Bootstrap", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Nandanikirtani/Wallify",
      demo: "https://nandanikirtani.github.io/Wallify/",
    },
    {
      name: "Jet Set Journey",
      image: jetset,
      desc: "Jet Set Journey is a sleek and user-friendly travel web app that helps users explore destinations, plan trips, and discover curated travel experiences. With interactive maps, destination highlights, and smart itinerary features, it transforms how users dream, plan, and embark on their next adventure",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Jashank06/Travelling-Project",
      demo: "",
    },
    {
      name: "Edutainment",
      image: edutainment,
      desc: "Edutainment is an interactive learning platform that blends education with entertainment, featuring courses, podcasts, and campus life insights to make learning engaging and fun.",
      tech: ["React.js", "Bootstrap", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Nandanikirtani/Edutainment.git",
      demo: "https://nandanikirtani.github.io/Edutainment/",
    },
  ];

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center py-16 bg-gradient-to-b ">
      {/* Heading */}
      <motion.h1
        className="md:text-6xl text-5xl font-extrabold text-center mb-14 bg-clip-text text-white "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 px-6">
        {project.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-white/20 hover:border-pink-500 hover:shadow-pink-500/30 transition duration-300 flex flex-col"
          >
            {/* Image */}
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-white mb-2">{p.name}</h2>
              <p className="text-gray-300 text-sm mb-3 line-clamp-4">{p.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-gray-500 text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90 text-white text-sm px-3 py-2 rounded-lg transition"
                >
                  GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white text-sm px-3 py-2 rounded-lg transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
