import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillIcons = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGT_pnMHJdps9fGjcDaFSqcfFxO2E7BQk4g&s",
      alt: "VS Code",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s",
      alt: "Figma",
    },
    {
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
      alt: "React",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/016/833/872/non_2x/github-logo-git-hub-icon-on-white-background-free-vector.jpg",
      alt: "GitHub",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gcK7Go3mcVhvMExOd9mEr1cOzS1Il6AvIw&s",
      alt: "Git",
    },
    {
      src: "https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png",
      alt: "MongoDB",
    },
  ];
  const skill = [
    {
      src: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png",
      alt: "Tailwind CSS",
    },
    {
      src: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1647492266631%2FrH6yDfWyJ.png",
      alt: "Framer Motion",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      alt: "JavaScript",
    },
    {
      src: "https://www.citypng.com/public/uploads/preview/download-html5-round-logo-icon-png-701751694771801xidtztxanv.png",
      alt: "HTML",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      alt: "CSS",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s",
      alt: "Node.js",
    },
    {
      src: "https://i.pinimg.com/736x/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.jpg",
      alt: "Bootstrap",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center "
    >
      {/* Heading */}
      <motion.h1
        className="md:text-6xl text-4xl font-bold text-center md:mb-10 z-20"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills & Expertise
      </motion.h1>
      <div className="flex flex-wrap mx-auto md:w-full ">
        <div className="flex flex-col order-2 md:order-1 gap-2 mt-4 md:mt-0 mx-auto">
          <motion.div
            className="shadow-xl p-4 w-full max-w-xs md:w-80 my-auto mt-4"
            style={{ boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold underline ">
              Design & Prototyping
            </h3>
            <ul>
              <li>Figma</li>
            </ul>
          </motion.div>
          <motion.div
            className="shadow-xl p-4 w-full max-w-xs md:w-80 my-auto mt-4"
            style={{ boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold underline">
              Frontend Development
            </h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </motion.div>
        </div>
        <div className="flex flex-col order-1 md:order-2 mx-auto">
          <div className="flex flex-row flex-nowrap gap-2 z-50 justify-center translate-y-20 mb-0">
            {skillIcons.map((s, index) => (
              <img
                className="h-10 w-10 bg-white gap-2 rounded-full"
                src={s.src}
                alt=""
              />
            ))}
          </div>
          <div className="flex flex-row flex-nowrap gap-2 z-50 justify-center translate-y-25 mb-0">
            {skill.map((s, index) => (
              <img
                className="h-10 w-10 bg-white gap-2 rounded-full"
                src={s.src}
                alt=""
              />
            ))}
          </div>

          {/* Center Circle */}

          {/* </div> */}

          {/* Circle + SVG */}
          <div className="relative flex justify-center items-center mt-10 h-[300px] w-full">
            {/* SVG - Behind the circle */}
            <div className="absolute  z-0">
              <svg
                // viewBox="0 0 418 282"
                width="100%"
                height="auto"
                viewBox="0 0 418 282"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {[
                  "M205.5 1V280",
                  "M205.5 280L140 1",
                  "M205.5 280L71.5 1",
                  "M205.5 280L1 1",
                  "M205.5 280L274 1",
                  "M205.5 280L343 1",
                  "M205.5 280L416.5 1",
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="white"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Circle - on top of SVG */}
            <motion.div
              className="h-16 w-16 translate-y-30 rounded-full bg-[#00FFE6] flex items-center justify-center text-black font-bold text-xl z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              &lt;/&gt;
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col order-3 md:order-3 items-start gap-2 mx-auto">
          <motion.div
            className="shadow-xl p-4 w-full max-w-xs md:w-80 my-auto mt-4"
            style={{ boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold underline">
              Backend & Database
            </h3>
            <ul>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          <motion.div
            className="shadow-xl p-4 w-full max-w-xs md:w-80 my-auto mt-4"
            style={{ boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold underline">
              Tools & Version Control
            </h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </motion.div>
          <motion.div
            className="shadow-xl p-4 w-full max-w-xs md:w-80 my-auto mt-4"
            style={{ boxShadow: "0 4px 12px rgba(255, 255, 255, 0.2)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-lg font-semibold underline">
              Programming Langauge
            </h3>
            <ul>
              <li>Java</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
