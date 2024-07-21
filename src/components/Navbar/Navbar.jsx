import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdHome, MdCall } from "react-icons/md";
import { IoMdPerson, IoMdLaptop } from "react-icons/io";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const getLinkStyle = ({ isActive }) => ({
    color: isActive ? "#FF4191" : "",
  });

  const closeMenu = () => {
    setOpen(false);
  };
  // navbar for portfolio
  return (
    // responsive navbar
    <div className="w-full p-1 px-5 nav-bg shadow-sm sticky top-0 z-50">
      <div
        className="w-full flex items-center justify-between"
        style={{
          height: "60px",
        }}
      >
        <div className="flex items-center gap-4">
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            <h4
              style={{
                background: "-webkit-linear-gradient(#C33764 40%, #021B79)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Portfolio
            </h4>
          </Link>

          <div
            className="md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MdOutlineMenuOpen size={30} />
          </div>
        </div>
        <div
          className={`md:flex gap-4 ${
            open
              ? "flex flex-col items-center justify-center h-screen nav-bg w-screen fixed top-0 right-0"
              : "hidden"
          } `}
        >
          <NavLink
            onClick={closeMenu}
            to="/"
            style={getLinkStyle}
            className="flex items-center gap-2"
          >
            <MdHome size={30} />
            Home
          </NavLink>

          <NavLink
            onClick={closeMenu}
            to="/about"
            style={getLinkStyle}
            className="flex items-center gap-2"
          >
            <IoMdPerson size={30} />
            About
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/projects"
            style={getLinkStyle}
            className="flex items-center gap-2"
          >
            <IoMdLaptop size={30} />
            Projects
          </NavLink>
          <NavLink
            onClick={closeMenu}
            to="/contact"
            style={getLinkStyle}
            className="flex items-center gap-2"
          >
            <MdCall size={30} />
            Contact
          </NavLink>
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
