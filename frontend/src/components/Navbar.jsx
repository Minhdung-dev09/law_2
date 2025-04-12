import React, { useState } from "react";
import { NavLink } from "react-router";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaXmark,
} from "react-icons/fa6";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //navItems
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <>
      <header className="bg-black text-white fixd top-8 left-8 right-8">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center ">
          <a href="/" className="text-xl font-bold text-white">
            LawNgan <span className="text-orange-500">MD</span>
          </a>

          {/* nav item  for lg dvice*/}

          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map(({ path, link }) => (
              <li className="text-white " key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "active" : "hover:text-orange-500 transition"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* menu icon*/}

          <div className="text-white lg:flex gap-4 items-center hidden">
            <a href="/" className="hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="/" className="hover:text-orange-500">
              <FaGithub />
            </a>
            <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
              Login
            </button>
          </div>

          {/* Mobile menu btn, display mobile*/}

          <div className="md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? <FaXmark /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </nav>
        {/* Menu Items in mobile*/}
        <div>
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
              isMenuOpen
                ? "fixed top-0 left-0 w-full transition-all ease-out"
                : "hidden"
            }`}
          >
            {navItems.map(({ path, link }) => (
              <li className="text-black " key={path}>
                <NavLink onClick={toggleMenu} to={path}>
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
