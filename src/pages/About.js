import React from "react";
import AboutSection from "./about/AboutSection";
import Passion from "./about/Passion";
import Inspiration from "./about/Inspiration";
import Vision from "./about/Vision";
import Value from "./about/Value";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <AboutSection />
      <Passion />
      <Inspiration />
      <Vision />
      <Value />
    </div>
  );
}

export default About;