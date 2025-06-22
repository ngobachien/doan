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
      <h2 className="hanoiopen-title">HÀ NỘI MỞ CỬA</h2>
      <p className="hanoiopen-desc">
        Thủ đô Hà Nội bùng nổ với những cú đánh đỉnh cao tại Giải golf mở rộng Hà Nội 2025!
      </p>
      <button className="hanoiopen-btn">SEE MORE</button>
    </div>
  </section>
);

export default HanoiOpen; 