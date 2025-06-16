import React from "react";
import "./Now.css";

const Now = ({ onPageChange }) => {
  return (
    <section className="hero-evo-section">
      <div className="hero-evo-bg">
        <div className="hero-evo-content">
          <h1>Rhino Evo Racing</h1>
          <p>
            Inspired by the thrill of the racetrack, Evo Racing captures the power and speed of high-performance cars. Its sleek design ignites competitive spirit, elevating every match to new heights of excitement.
          </p>
          <button onClick={() => onPageChange && onPageChange("products")}>
            Buy Now
          </button>
        </div>
        <div className="hero-evo-flag"></div>
      </div>
    </section>
  );
};

export default Now;