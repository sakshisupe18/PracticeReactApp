import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">MyPortfolio</div>
      <nav className="navbar-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
