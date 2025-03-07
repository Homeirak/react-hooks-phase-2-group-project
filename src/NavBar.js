import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">Animals</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
    </nav>
  );
};

export default NavBar;