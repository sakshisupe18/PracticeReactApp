import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2 style={{ padding: 20 }}>Home Page</h2>;
}
function About() {
  return <h2 style={{ padding: 20 }}>About Page</h2>;
}
function Services() {
  return <h2 style={{ padding: 20 }}>Services Page</h2>;
}
function Contact() {
  return <h2 style={{ padding: 20 }}>Contact Page</h2>;
}
export default function Configure() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "10px",
          background: "#333",
          color: "white",
        }}
      >
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/about">
          About
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/services">
          Services
        </Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/contact">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
