import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col items-center justify-center md:mt-16 mt-6"
    >
      {/* Heading */}
      <motion.h1
        className="md:text-6xl text-4xl font-bold text-center mb-10 z-20"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills & Expertise
      </motion.h1>
      <div className="flex gap-4">
        <img className="h-12 w-12 rounded-full translate-y-28 -translate-x-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGT_pnMHJdps9fGjcDaFSqcfFxO2E7BQk4g&s" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-16 -translate-x-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-11 -translate-x-4" src="https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-10 translate-x-2" src="https://static.vecteezy.com/system/resources/previews/016/833/872/non_2x/github-logo-git-hub-icon-on-white-background-free-vector.jpg" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-15 translate-x-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gcK7Go3mcVhvMExOd9mEr1cOzS1Il6AvIw&s" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-28 translate-x-8" src="https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png" alt="" />
      </div>
      <div className="flex gap-4">
        <img className="h-12 w-12 rounded-full translate-y-32 translate-x-2" src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-20" src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1647492266631%2FrH6yDfWyJ.png" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-15" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTvKkYl6oBVPdL1xXw4ohTPuLVLh7F7EZhA&s" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-12" src="https://www.citypng.com/public/uploads/preview/download-html5-round-logo-icon-png-701751694771801xidtztxanv.png" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-15" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s" alt="" />
        <img className="h-12 w-12 rounded-full translate-y-32 -translate-x-2" src="https://i.pinimg.com/736x/79/5e/bb/795ebb5f4a470cd7242136237f61fc53.jpg" alt="" />
      </div>
      {/* Circle + SVG */}
      <div className="relative flex justify-center items-center mt-10 h-[300px] w-full">
        {/* SVG - Behind the circle */}
        <div className="absolute top-0 z-0">
          <svg
            width="340"
            height="270"
            viewBox="0 0 332 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{}}
          >
            <motion.path
              d="M166 249C124.212 124.972 43.3306 63.6327 0 64.0017"
              stroke="white"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M166 249C207.788 124.972 288.669 63.6327 332 64.0017"
              stroke="white"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M168 248.5C142.813 149.414 79.0492 53.4935 47 28"
              stroke="white"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M166 248.5C191.187 149.414 254.951 53.4935 287 28"
              stroke="white"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M171.596 251.504C157.436 242.808 201.395 42.3844 225 10"
              stroke="white"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M165.502 254.988C172.759 248.09 133.867 40.5709 108.564 10"
              stroke="white"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M164.514 1C167.975 140.93 168.876 199.522 168.894 211.326L168.288 253.344"
              stroke="white"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
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
    </section>
  );
}
