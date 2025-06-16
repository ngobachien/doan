import React, { useState } from "react";
import "./chie.css";

const products = [
  {
    id: 1,
    name: "CUETEC JUMPING STICK - CYNERGY PROPEL JUMP - GALAXY GRAY",
    image: "./images/allproduct/41.png",
    price: 12725000,
    oldPrice: null,
    discount: false,
    options: false,
  },
  {
    id: 2,
    name: "Rhino Jumping Stick - Black",
    image: "./images/allproduct/42.png",
    price: 7490000,
    oldPrice: 7800000,
    discount: true,
    options: false,
  },
  {
    id: 3,
    name: "FURY JUMPING STICK - JPS",
    image: "./images/allproduct/43.png",
    price: 3360000,
    oldPrice: 3500000,
    discount: true,
    options: true,
  },
  {
    id: 4,
    name: "CUETEC JUMPING STICK - AVID Surge Jump",
    image: "./images/allproduct/44.png",
    price: 6125000,
    oldPrice: 6500000,
    discount: true,
    options: true,
  },
  {
    id: 5,
    name: "JOSS Jump Cue",
    image: "./images/allproduct/45.png",
    price: 5500000,
    oldPrice: null,
    discount: false,
    options: false,
  },
  {
    id: 6,
    name: "PREDATOR Air II Jump Cue",
    image: "./images/allproduct/46.png",
    price: 8900000,
    oldPrice: 9500000,
    discount: true,
    options: true,
  },
];

const PRODUCTS_PER_PAGE = 6; // Hiển thị 6 sản phẩm mỗi trang

const Chie = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const currentProducts = products.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <div>
      <div className="chie-banner">
        <h1 className="chie-banner-title">JUMPING STICK</h1>
      </div>
      <div className="chie-toolbar">
        <div className="chie-filter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M6 12h12M10 19h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Filter</span>
        </div>
        <div className="chie-toolbar-right">
          <span className="chie-sort-label">Sort by:</span>
          <select className="chie-sort-select">
            <option>Best Seller</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <span className="chie-count">{products.length} products</span>
        </div>
      </div>
      <div className="chie-grid">
        {currentProducts.map((product, index) => (
          <div className="chie-card" key={product.id}>
            <div className="chie-img-wrap">
              {product.discount && <span className="chie-discount">Discount</span>}
              <img src={product.image} alt={product.name} className="chie-img" />
            </div>
            <div className="chie-name">{product.name}</div>
            <div className="chie-prices">
              {product.oldPrice && <span className="chie-oldprice">{product.oldPrice.toLocaleString('vi-VN')} VND</span>}
              <span className="chie-price">{product.price.toLocaleString('vi-VN')} VND</span>
            </div>
            <button className="chie-btn">
              {product.options ? 'Select options' : 'Add to cart'}
            </button>
          </div>
        ))}
      </div>
      <div className="chie-pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`chie-page-btn${page === i + 1 ? ' active' : ''}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chie;