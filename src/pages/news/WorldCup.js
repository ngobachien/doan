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
      <h2 className="worldcup-title">CÚP THẾ GIỚI</h2>
      <p className="worldcup-desc">
        Kỹ năng cá nhân là không đủ – World Cup of Pool cũng cần sự kết nối hoàn hảo
      </p>
      <button className="worldcup-btn">XEM THÊM</button>
    </div>
  </section>
);

export default WorldCup; 