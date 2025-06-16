import React from "react";
import "./WorldPool.css";

const WorldPool = () => (
  <section className="worldpool-section">
    <div className="worldpool-content">
      <h2 className="worldpool-title">WORLD POOL</h2>
      <p className="worldpool-desc">
        Million Dollar Battle - Who will conquer the throne at the World Pool Championship 2025!
      </p>
      <button className="worldpool-btn">SEE MORE</button>
    </div>
    <div className="worldpool-img-wrap">
      <img
        src="./images/open.png"
        alt="World Pool"
        className="worldpool-img"
      />
    </div>
  </section>
);

export default WorldPool; 