import React from 'react';
import './Hero.css';

function Hero({ onPageChange }) {
  return (
    <section className="hero-section hero-image-box hw-accelerated">
      <img className="hero-bg-img optimized-image" src="./images/nền.jpg" alt="Billiard Player" />
      <div className="hero-overlay"></div>
      <div className="hero-box left-align hw-accelerated">
        <h1 className="optimized-text">Discover Your Perfect Cue</h1>
        <p className="optimized-text">Elevate your game with Billiardss.pro's premium selection of cues, blending timeless craftsmanship with cutting-edge design. Find your ideal cue and dominate the pool table!</p>
        <button className="hero-btn optimized-button" onClick={() => onPageChange('products')}>
          Explore Now
        </button>
      </div>
    </section>
  );
}

export default Hero;