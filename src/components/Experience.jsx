import React from "react";
import { motion } from "framer-motion"; 

export default function Experience() {
    const exp=[
    {
        role: "Web Development Intern",
        company: "Manav Rachna University",
        time: "6/06/25 - Ongoing ",
    },
    {
        role: "Open Source Contributor",
        company: "GitHub",
    }
    ]
  return (
    <div id='experience' className='min-h-screen flex flex-col items-center justify-center'>
      <motion.h1
        className="md:text-6xl text-4xl font-bold text-center mb-10 z-20"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Experience
      </motion.h1>
      <div className="w-full">
        {exp.map((e,index)=>
        <div className="border m-4 p-4" key={index}>
            <h1 className="text-xl font-bold text-white ">{e.role}</h1>
            <p className="text-sm text-gray-400 mt-2">{e.company} <br /> {e.time}</p>
        </div>
        )}
      </div>
    </div>
  )
}
