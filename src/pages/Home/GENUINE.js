import React from "react";
import "./GENUINE.css";

const brands = [
  { name: "Rhino", logo: "./images/images.jpg" },
  { name: "Peri", logo: "./images/logo-tiger.jpg" },
  { name: "Fury", logo: "./images/logo-main.png" },
  { name: "Cuetec", logo: "./images/thuong-hieu-predator-logo-e1654063709255.png" },
];

const products = [
  { name: "Billiard Cues", image: "./images/allproduct/20.png" },
  { name: "Breaking Stick", image: "./images/allproduct/21.png" },
  { name: "Jumping Stick", image: "./images/allproduct/22.png" },
  { name: "Accessory", image: "./images/allproduct/23.png" },
];

const GENUINE = ({ onPageChange }) => (
  <section className="genuine-section">
    <h2 className="genuine-title">Genuine Clubs from Top Brands</h2>
    <div className="genuine-brands">
      {brands.map((b, i) => (
        <img key={i} src={b.logo} alt={b.name} className="genuine-brand-logo" />
      ))}
    </div>
    <div className="genuine-products">
      {products.map((p, i) => (
        <div className="genuine-product-card" key={i}>
          <img src={p.image} alt={p.name} className="genuine-product-img" />
          <button className="genuine-product-btn">{p.name}</button>
        </div>
      ))}
    </div>
  </section>
);

export default GENUINE;