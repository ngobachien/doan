import React from "react";
import "./WorldPool.css";

const WorldPool = () => (
  <section className="worldpool-section">
    <div className="worldpool-content">
      <h2 className="worldpool-title">THẾ GIỚI BI-a</h2>
      <p className="worldpool-desc">
        Trận chiến triệu đô - Ai sẽ chinh phục ngai vàng tại Giải vô địch bi-a thế giới 2025!
      </p>
      <button className="worldpool-btn">XEM THÊM</button>
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