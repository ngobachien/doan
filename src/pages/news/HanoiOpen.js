import React from "react";
import "./HanoiOpen.css";

const HanoiOpen = () => (
  <section className="hanoiopen-section">
    <div className="hanoiopen-img-wrap">
      <img
        src="./images/hanoi.png"
        alt="Hanoi Open"
        className="hanoiopen-img"
      />
    </div>
    <div className="hanoiopen-content">
      <h2 className="hanoiopen-title">HANOI OPEN</h2>
      <p className="hanoiopen-desc">
        Hanoi capital is on fire with top shots at Hanoi Open 2025!
      </p>
      <button className="hanoiopen-btn">SEE MORE</button>
    </div>
  </section>
);

export default HanoiOpen; 