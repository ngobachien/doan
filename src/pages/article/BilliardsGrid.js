import React from "react";
import "./BilliardsGrid.css";

const cards = [
  {
    title: "Đầu cơ – Nơi bi ve tuân theo bạn hoặc phản bội bạn",
    image: "./images/tip/tip2.png",
  },
  {
    title: "Mẹo công nghệ là gì? Mọi thứ mà người chơi cần biết",
    image: "./images/tip/tip3.png",
  },
  {
    title: "Chăm sóc cơ bida như một người chơi chuyên nghiệp thực thụ - bạn có biết cách không?",
    image: "./images/tip/tip4.png",
  },
];

const BilliardsGrid = () => (
  <section className="billiardsgrid-section">
    <h2 className="billiardsgrid-title">BILLIARDS</h2>
    <div className="billiardsgrid-list">
      {cards.map((card, i) => (
        <div className="billiardsgrid-card" key={i}>
          <img src={card.image} alt={card.title} className="billiardsgrid-img" />
          <div className="billiardsgrid-card-title">{card.title}</div>
          <button className="billiardsgrid-btn">XEM THÊM <span className="billiardsgrid-arrow">→</span></button>
        </div>
      ))}
    </div>
  </section>
);

export default BilliardsGrid; 