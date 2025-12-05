import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  const navStyle = {
    background: "#333",
    padding: "12px 20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const linkBox = {
    display: "flex",
    gap: "15px"
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  };
  return (
    <nav style={navStyle}>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>MySite</div>
      <div style={linkBox}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to our Website! This is Home Page.</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>We are a company that provides awesome services to our clients.</p>
  </div>
);

const Services = () => (
  <div>
    <h2>Services</h2>
    <p>We provide amazing services to our clients.</p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Email: contact@mycompany.com</p>
  </div>
);

export default function MyRoutes() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>My Company Website</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
