import React from "react";
import "./Player.css";

const players = [
  {
    name: "Duong Quoc Hoang - from unknown player to Vietnamese Billiards legend",
    image: "./images/hoang.png",
  },
  {
    name: "Huynh Thi Ngoc Huyen - The thorny rose on the Billiards arena",
    image: "./images/ngoc.png",
  },
  {
    name: "Nguyen Anh Tuan - a player with courage and passion in every shot",
    image: "./images/tuan.png",
  },
];

const Player = () => (
  <section className="player-section">
    <h2 className="player-title">PLAYER</h2>
    <div className="player-list">
      {players.map((p, i) => (
        <div className="player-card" key={i}>
          <img src={p.image} alt={p.name} className="player-img" />
          <div className="player-card-title">{p.name}</div>
          <button className="player-btn">SEE MORE <span className="player-arrow">→</span></button>
        </div>
      ))}
    </div>
  </section>
);

export default Player; 