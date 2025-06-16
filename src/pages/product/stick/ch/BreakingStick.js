import React, { useState } from "react";
import "./BreakingStick.css";

const breakingSticks = [
  {
    id: 1,
    name: "CUETEC BREACH - CYNERGY BREAK",
    image: "./images/allproduct/47.png",
    price: 18725000,
    oldPrice: null,
    discount: false,
    rating: 0,
    reviews: 0,
    options: false,
  },
  {
    id: 2,
    name: "Komet II Wand - Black & Gray",
    image: "./images/allproduct/48.png",
    price: 7990000,
    oldPrice: 9500000,
    discount: true,
    rating: 0,
    reviews: 0,
    options: false,
  },
  {
    id: 3,
    name: "AVID Surge Break Cue - AVID Surge Break Cue",
    image: "./images/allproduct/49.png",
    price: 8225000,
    oldPrice: 9500000,
    discount: true,
    rating: 0,
    reviews: 0,
    options: true,
  },
  {
    id: 4,
    name: "FURY stick destroys, jumps AE",
    image: "./images/allproduct/50.png",
    price: 2070000,
    oldPrice: 2500000,
    discount: true,
    rating: 5,
    reviews: 1,
    options: false,
  },
  {
    id: 5,
    name: "Extra Breaking Stick Model",
    image: "./images/allproduct/51.png",
    price: 15000000,
    oldPrice: 16000000,
    discount: true,
    rating: 4,
    reviews: 2,
    options: false,
  },
];

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

const BreakingStick = () => {
  const [sort, setSort] = useState("best");

  return (
    <>
      <div className="breaking-stick-banner">
        <h1 className="breaking-stick-title">BREAKING STICK</h1>
      </div>
      <div className="breaking-stick-toolbar">
        <div className="breaking-stick-filter">
          <span className="breaking-stick-filter-icon">⚙</span> Filter
        </div>
        <div className="breaking-stick-sort">
          <span>Sort by:</span>
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="best">Best Seller</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <div className="breaking-stick-count">{breakingSticks.length} products</div>
      </div>
      <div className="breaking-stick-grid">
        {breakingSticks.map((stick, index) => (
          <div className="breaking-stick-card" key={stick.id}>
            <div className="breaking-stick-img-wrap">
              {stick.discount && <span className="breaking-stick-discount">Discount</span>}
              <img src={stick.image} alt={stick.name} className="breaking-stick-img" />
            </div>
            <div className="breaking-stick-name">{stick.name}</div>
            {stick.rating > 0 && (
              <div className="breaking-stick-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < stick.rating ? 'star filled' : 'star'}>★</span>
                ))}
                <span className="breaking-stick-reviews">({stick.reviews})</span>
              </div>
            )}
            <div className="breaking-stick-prices">
              {stick.oldPrice && <span className="breaking-stick-oldprice">{formatPrice(stick.oldPrice)}</span>}
              <span className="breaking-stick-price">{formatPrice(stick.price)}</span>
            </div>
            <button className="breaking-stick-btn">
              {stick.options ? 'Select options' : 'Add to cart'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default BreakingStick;