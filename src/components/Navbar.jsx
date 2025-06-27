import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold border-b-2 border-blue-500"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <RouterLink to="/">
        <img
          src="/logo-portfolio.png"
          alt="Logo"
          className="h-10 w-50 object-contain"
        />
      </RouterLink>

      <div className="flex gap-6 text-lg">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer text-gray-700 hover:text-blue-500"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer text-gray-700 hover:text-blue-500"
        >
          Skills
        </ScrollLink>
       <NavLink to="projects" className={navLinkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
