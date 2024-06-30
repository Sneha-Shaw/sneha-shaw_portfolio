import React from "react";
import { useStyles } from "./styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdHome, MdCall } from "react-icons/md";
import { IoMdPerson, IoMdLaptop } from "react-icons/io";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Navbar = () => {
  const classes = useStyles();

  const location = useLocation();
  // navbar for portfolio
  return (
    <div className={classes.container}>
      <div className="flex gap-7">
        <div className={classes.logo}>
          <Link to="/">
            <h4>&lt;/&gt;</h4>
          </Link>
        </div>
        <ThemeSwitch />
      </div>
      <div className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#f50057] " : ""}flex items-center`
              }
            >
              <MdHome />
              <p> Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-[#f50057] " : ""}flex items-center gap-2`
              }
            >
              <IoMdPerson />
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `${isActive ? "text-[#f50057] " : ""}flex items-center gap-2`
              }
            >
              <IoMdLaptop />
              <p>Work</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-[#f50057] " : ""}flex items-center gap-2`
              }
            >
              <MdCall />
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
