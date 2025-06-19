import React from 'react';
import './SummerSaleBanner.css';

const SummerSaleBanner = () => {
  return (
    <div className="brand-detail-bg">
      <div className="brand-detail-content">
        <h1 className="brand-detail-title">Super sale - fiery summer</h1>
        <p className="brand-detail-desc">Up to 20% off</p>
        <p className="brand-detail-desc">
          Billiardss.pro offers up to 20% off on a wide range of Peri, Rhino, Cuetec, Fury cues
          and billiard accessories. Don’t miss out on upgrading your billiard equipment!
        </p>
        <button className="learn-more-btn">LEARN MORE</button>
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