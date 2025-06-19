import React from "react";
import "./Super.css";

const Super = ({ onPageChange }) => {
  return (
    <div className="super-wrapper">
      <div className="super-about-row">
        <div className="super-about-box">
          <h2>About Billiardss.pro</h2>
          <p>Driven by passion, Billiardss.pro was founded to elevate Vietnamese Billiards with premium cues and accessories.</p>
          <button className="super-about-btn">See More</button>
        </div>
        <div className="super-about-img-wrap">
          <img src="./images/bia1.png" alt="Duong Quoc Hoang" className="super-about-img" />
        </div>
      </div>
      <div className="super-sale-box">
        <h2>Super Summer Sale</h2>
        <p>Enjoy 20% off on Rhino, Peri, Fury, and Cuetec products at Billiardss.pro!</p>
        <div className="super-countdown">
          <div className="super-countdown-item"><span>00</span><div>Days</div></div>
          <div className="super-countdown-item"><span>00</span><div>Hours</div></div>
          <div className="super-countdown-item"><span>00</span><div>Minutes</div></div>
          <div className="super-countdown-item"><span>00</span><div>Seconds</div></div>
        </div>
        <button className="super-sale-btn" onClick={() => onPageChange && onPageChange("products")}>Buy Now</button>
      </div>
    </div>
  );
};

export default Super;