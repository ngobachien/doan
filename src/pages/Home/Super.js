import React from "react";
import "./Super.css";

const Super = ({ onPageChange }) => {
  return (
    <div className="super-wrapper">
      <div className="super-about-row">
        <div className="super-about-box">
        <h2>Giới thiệu về Billiardss.pro</h2>
        <p>Được thúc đẩy bởi niềm đam mê, Billiardss.pro được thành lập để nâng tầm bộ môn bida Việt Nam bằng những cơ và phụ kiện cao cấp.</p>
          <button className="super-about-btn">See More</button>
        </div>
        <div className="super-about-img-wrap">
          <img src="./images/bia1.png" alt="Duong Quoc Hoang" className="super-about-img" />
        </div>
      </div>
      <div className="super-sale-box">
      <h2>Siêu khuyến mại mùa hè</h2>
      <p>Giảm giá 20% cho các sản phẩm Rhino, Peri, Fury và Cuetec tại Billiardss.pro!</p>
        <div className="super-countdown">
          <div className="super-countdown-item"><span>00</span><div>Ngày</div></div>
          <div className="super-countdown-item"><span>00</span><div>Giờ</div></div>
          <div className="super-countdown-item"><span>00</span><div>Phút</div></div>
          <div className="super-countdown-item"><span>00</span><div>Giây</div></div>
        </div>
        <button className="super-sale-btn" onClick={() => onPageChange && onPageChange("products")}>Mua ngay</button>
      </div>
    </div>
  );
};

export default Super;