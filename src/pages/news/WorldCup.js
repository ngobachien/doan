import React from "react";
import "./WorldCup.css";

const WorldCup = () => (
  <section className="worldcup-section">
    <div className="worldcup-img-wrap">
      <img
        src="./images/open1.png"
        alt="World Cup"
        className="worldcup-img"
      />
    </div>
    <div className="worldcup-content">
      <h2 className="worldcup-title">WORLD CUP</h2>
      <p className="worldcup-desc">
        Individual skill is not enough – World Cup of Pool needs perfect connection too
      </p>
      <button className="worldcup-btn">SEE MORE</button>
    </div>
  </section>
);

export default WorldCup; 