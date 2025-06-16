import React from "react";
import "./BilliardsGrid.css";

const cards = [
  {
    title: "Speculation – Where the marbles obey you or betray you",
    image: "./images/tip/tip2.png",
  },
  {
    title: "What is a technology tip? Everything a player needs to know",
    image: "./images/tip/tip3.png",
  },
  {
    title: "Take care of billiard cues like a true professional - do you know how?",
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
          <button className="billiardsgrid-btn">SEE MORE <span className="billiardsgrid-arrow">→</span></button>
        </div>
      ))}
    </div>
  </section>
);

export default BilliardsGrid; 