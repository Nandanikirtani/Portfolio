import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [iconName, setIconName] = useState('menu');
  const [isOpen, setIsOpen] = useState(false);

  function onToggleMenu() {
    setIconName(prev => (prev === 'menu' ? 'close' : 'menu'));
    setIsOpen(prev => !prev);
  }

  return (
    <nav className="sticky w-full m-4 h-auto max-w-screen-xl mx-auto p-1 bg-black rounded-full text-white flex flex-wrap justify-between items-center ">
      {/* Logo & Name */}
      <div className="flex items-center gap-4">
        <img className="rounded-full h-10 w-auto" src="/logo.jpg" alt="logo" />
        <h1 className="text-center text-lg ">Nandani Kirtani</h1>
      </div>

      {/* Nav Links */}
      <div
        className={`md:static absolute top-16 left-0 w-full md:w-auto bg-black md:bg-transparent md:flex-row flex flex-col justify-end gap-4 transition-all duration-300 ease-in ${
          isOpen ? "top-16" : "top-[-400px]"
        } md:flex`}
      >
        <Link className="hover:bg-red-600 p-2 rounded-2xl" to="/">Home</Link>
        <Link className="hover:bg-red-600 p-2 rounded-2xl" to="/about">About</Link>
        <Link className="hover:bg-red-600 p-2 rounded-2xl" to="/skills">Skills</Link>
        <Link className="hover:bg-red-600 p-2 rounded-2xl" to="/experience">Experience</Link>
        <Link className="hover:bg-red-600 p-2 rounded-2xl" to="/projects">Projects</Link>
        <Link className="hover:bg-red-600 p-2 rounded-2xl" to="/contact">Contact</Link>
      </div>

      {/* Hamburger Icon */}
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
