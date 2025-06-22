import React from "react";
import "./Player.css";

const players = [
  {
    name: "Dương Quốc Hoàng - từ cơ thủ vô danh đến huyền thoại bida Việt Nam",
    image: "./images/hoang.png",
  },
  {
    name: "Huỳnh Thị Ngọc Huyền - Bông hồng gai trên đấu trường Bida",
    image: "./images/ngoc.png",
  },
  {
    name: "Nguyễn Anh Tuấn - cầu thủ dũng cảm và đam mê trong từng cú đánh",
    image: "./images/tuan.png",
  },
];

const Player = () => (
  <section className="player-section">
    <h2 className="player-title">NGƯỜI CHƠI</h2>
    <div className="player-list">
      {players.map((p, i) => (
        <div className="player-card" key={i}>
          <img src={p.image} alt={p.name} className="player-img" />
          <div className="player-card-title">{p.name}</div>
          <button className="player-btn">XEM THÊM <span className="player-arrow">→</span></button>
        </div>
      ))}
    </div>
  </section>
);

export default Player; 