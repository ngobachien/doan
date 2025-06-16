import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import AboutSection from "./about/AboutSection";
import Passion from "./about/Passion";
import Inspiration from "./about/Inspiration";
import Vision from "./about/Vision";
import Value from "./about/Value";
import "./test.css";

function Test() {
  const location = useLocation();

  return (
    <div className="test-page">
      <nav className="test-nav">
        <ul>
          <li className={location.pathname === "/test/about" ? "active" : ""}>
            <Link to="/test/about">About</Link>
          </li>
          <li className={location.pathname === "/test/passion" ? "active" : ""}>
            <Link to="/test/passion">Passion</Link>
          </li>
          <li className={location.pathname === "/test/inspiration" ? "active" : ""}>
            <Link to="/test/inspiration">Inspiration</Link>
          </li>
          <li className={location.pathname === "/test/vision" ? "active" : ""}>
            <Link to="/test/vision">Vision</Link>
          </li>
          <li className={location.pathname === "/test/value" ? "active" : ""}>
            <Link to="/test/value">Value</Link>
          </li>
        </ul>
      </nav>

      <div className="test-content">
        <Routes>
          <Route path="/test/about" element={<AboutSection />} />
          <Route path="/test/passion" element={<Passion />} />
          <Route path="/test/inspiration" element={<Inspiration />} />
          <Route path="/test/vision" element={<Vision />} />
          <Route path="/test/value" element={<Value />} />
          <Route path="/test" element={<AboutSection />} />
        </Routes>
      </div>
    </div>
  );
}

export default Test; 