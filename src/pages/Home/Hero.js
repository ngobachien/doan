import React from 'react';
import './Hero.css';

function Hero({ onPageChange }) {
  return (
    <section className="hero-section hero-image-box hw-accelerated">
      <img className="hero-bg-img optimized-image" src="./images/nền.jpg" alt="Billiard Player" />
      <div className="hero-overlay"></div>
      <div className="hero-box left-align hw-accelerated">
        <h1 className="optimized-text">Khám phá cơ hoàn hảo của bạn</h1>
        <p className="optimized-text">Nâng cao trò chơi của bạn với bộ sưu tập cơ bida cao cấp của Billiardss.pro, kết hợp giữa sự khéo léo vượt thời gian với thiết kế tiên tiến. Tìm cơ bida lý tưởng của bạn và thống trị bàn bida!</p>
        <button className="hero-btn optimized-button" onClick={() => onPageChange('products')}>
          Khám phá ngay
        </button>
      </div>
    </section>
  );
}

export default Hero;