import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/"><img src={logo} alt="CSUF" /></Link>
        </div>
        <ul className="nav-links">            
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/work">Work</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
