import React from "react";
import "./Passion.css";

const Passion = () => (
  <section className="passion-section">
    <div className="passion-img-wrap">
      <img
        src="./images/about/khoi.png"
        alt="Source of Passion"
        className="passion-img"
      />
    </div>
    <div className="passion-content">
      <h2 className="passion-title">NGUỒN ĐAM MÊ</h2>
      <p className="passion-desc">
       Eleanor Roosevelt đã từng nói: "Tương lai thuộc về những ai tin vào vẻ đẹp của ước mơ". Chúng tôi - Billiardss.pro, cũng tin vào điều đó để không ngừng nỗ lực nuôi dưỡng và vun đắp đứa con tinh thần này đến với mọi người với mong muốn đưa bộ môn Billiards trở nên phổ biến khắp Việt Nam và để lại ấn tượng sâu sắc trong tâm trí mọi người về một môn thể thao đòi hỏi trí tuệ cao và sự nỗ lực không ngừng.
      </p>
    </div>
  </section>
);

export default Passion;