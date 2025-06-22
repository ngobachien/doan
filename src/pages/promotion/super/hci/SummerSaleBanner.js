import React from 'react';
import './SummerSaleBanner.css';

const SummerSaleBanner = () => {
  return (
    <div className="brand-detail-bg">
      <div className="brand-detail-content">
        <h1 className="brand-detail-title">Siêu khuyến mại - mùa hè rực lửa</h1>
        <p className="brand-detail-desc">Giảm giá lên đến 20%</p>
        <p className="brand-detail-desc">
          Billiardss.pro giảm giá tới 20% cho nhiều loại cơ Peri, Rhino, Cuetec, Fury
          và phụ kiện bi-a. Đừng bỏ lỡ cơ hội nâng cấp thiết bị bi-a của bạn!
        </p>
        <button className="learn-more-btn">TÌM HIỂU THÊM</button>
        <div className="banner-image">
          <div className="gift-box">
            <div className="confetti"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerSaleBanner;