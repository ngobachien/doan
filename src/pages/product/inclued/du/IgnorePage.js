import React from "react";
import "./IgnorePage.css";

const products = [
  {
    id: 1,
    name: "KAMUI ROKU",
    image: "./images/allproduct/52.png",
    price: 650000,
    oldPrice: 715000,
    discount: true,
    rating: 5,
    reviews: 1,
    options: true,
  },
  {
    id: 2,
    name: "TURNING POINT - TP",
    image: "./images/allproduct/53.png",
    price: 210000,
    oldPrice: 300000,
    discount: true,
    rating: 5,
    reviews: 1,
    options: true,
  },
  {
    id: 3,
    name: "IGNORE",
    image: "./images/allproduct/54.png",
    price: 700000,
    oldPrice: null,
    discount: false,
    rating: 0,
    reviews: 0,
    options: true,
  },
];

const IgnorePage = () => {
  return (
    <div>
      <div className="ignore-banner">
        <h1 className="ignore-banner-title">Lơ</h1>
      </div>
      <div className="ignore-toolbar">
        <div className="ignore-filter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M6 12h12M10 19h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="ignore-toolbar-right">
          <span className="ignore-sort-label">Lọc:</span>
          <select className="ignore-sort-select">
            <option>Bán chạy nhất</option>
            <option>Giá: Cao đến thấp</option>
            <option>Giá: Thấp đến cao</option>
          </select>
          <span className="ignore-count">{products.length} sản phẩm</span>
        </div>
      </div>
      <div className="ignore-grid">
        {products.map((product) => (
          <div className="ignore-card" key={product.id}>
            <div className="ignore-img-wrap">
              {product.discount && <span className="ignore-discount">Giảm giá</span>}
              <img src={product.image} alt={product.name} className="ignore-img" />
            </div>
            <div className="ignore-name">{product.name}</div>
            {product.rating > 0 && (
              <div className="ignore-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.rating ? "star filled" : "star"}>★</span>
                ))}
                <span className="ignore-reviews">({product.reviews})</span>
              </div>
            )}
            <div className="ignore-prices">
              {product.oldPrice && <span className="ignore-oldprice">{product.oldPrice.toLocaleString("vi-VN")} VND</span>}
              <span className="ignore-price">{product.price.toLocaleString("vi-VN")} VND</span>
            </div>
            <button className="ignore-btn">{product.options ? 'Chọn tùy chọn': 'Thêm vào giỏ hàng'}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IgnorePage;