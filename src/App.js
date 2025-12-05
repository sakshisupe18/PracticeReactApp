import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy-loaded sections (code splitting)
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Resume = lazy(() => import("./sections/Resume"));
const Contact = lazy(() => import("./sections/Contact"));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

