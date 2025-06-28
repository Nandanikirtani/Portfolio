import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [iconName, setIconName] = useState("menu");
  const [isOpen, setIsOpen] = useState(false);

  function onToggleMenu() {
    setIconName((prev) => (prev === "menu" ? "close" : "menu"));
    setIsOpen((prev) => !prev);
  }

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  return (
    <nav className="fixed z-50 w-full mt-4 left-1/2 transform -translate-x-1/2 h-auto max-w-screen-xl p-1 bg-black rounded-full text-white flex flex-wrap justify-between items-center border border-[#00FFE6] ">
      <div className="flex items-center gap-4">
        <img className="rounded-full h-10 w-auto" src="/logo.jpg" alt="logo" />
        <h1 className="text-center text-lg ">Nandani Kirtani</h1>
      </div>

      <motion.div
        className={`md:static absolute top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex-row flex flex-col justify-end gap-4 transition-all duration-300 ease-in ${
          isOpen ? "top-16" : "top-[-400px]"
        } md:flex`}
        initial="hidden"
    whileInView="visible"
    variants={list}
      >
        <motion.a className="hover:text-[#00FFE6] p-2 rounded-2xl" href="#home" variants={item}>
          Home
        </motion.a>
        <motion.a className="hover:text-[#00FFE6] p-2 rounded-2xl" href="#about" variants={item}>
          About
        </motion.a>
        <motion.a className="hover:text-[#00FFE6] p-2 rounded-2xl" href="#skills"variants={item}>
          Skills
        </motion.a>
        <motion.a className="hover:text-[#00FFE6] p-2 rounded-2xl" href="#experience" variants={item}>
          Experience
        </motion.a>
        <motion.a className="hover:text-[#00FFE6] p-2 rounded-2xl" href="#projects" variants={item}>
          Projects
        </motion.a>
        <motion.a className="hover:text-[#00FFE6] p-2 rounded-2xl" href="#contact" variants={item}>
          Contact
        </motion.a>
      </motion.div>

      <div className="flex items-center md:hidden">
        <ion-icon
          name={iconName}
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer"
        ></ion-icon>
      </div>
    </nav>
  );
}

export default Navbar;
