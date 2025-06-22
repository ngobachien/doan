import React from "react";
import "./MuscleBagPage.css";

const products = [
  {
    id: 1,
    name: "Genuine White Kylin Cue Case",
    image: "./images/allproduct/58.png",
    price: 3500000,
    oldPrice: 3700000,
    discount: true,
    rating: 0,
    reviews: 0,
    options: false,
  },
  {
    id: 2,
    name: "Peri BEE PCY 2X4 cue bag - genuine product",
    image: "./images/allproduct/59.png",
    price: 3800000,
    oldPrice: 4000000,
    discount: true,
    rating: 4,
    reviews: 1,
    options: false,
  },
  {
    id: 3,
    name: "ARMOR 1X2 billiard cue case - genuine product",
    image: "./images/allproduct/60.png",
    price: 999000,
    oldPrice: 1200000,
    discount: true,
    rating: 0,
    reviews: 0,
    options: false,
  },
];

const MuscleBagPage = () => {
  return (
    <div>
      <div className="muscle-bag-banner">
        <h1 className="muscle-bag-banner-title">Túi đựng cơ</h1>
      </div>
      <div className="muscle-bag-toolbar">
        <div className="muscle-bag-filter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M6 12h12M10 19h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="muscle-bag-toolbar-right">
          <span className="muscle-bag-sort-label">Lọc:</span>
          <select className="muscle-bag-sort-select">
            <option>Bán chạy nhất</option>
            <option>Giá: Cao đến thấp</option>
            <option>Giá: Thấp đến cao</option>
          </select>
          <span className="muscle-bag-count">3 sản phẩm</span>
        </div>
      </div>
      <div className="muscle-bag-grid">
        {products.map((product) => (
          <div className="muscle-bag-card" key={product.id}>
            <div className="muscle-bag-img-wrap">
              {product.discount && <span className="muscle-bag-discount">Giảm giá</span>}
              <img src={product.image} alt={product.name} className="muscle-bag-img" />
            </div>
            <div className="muscle-bag-name">{product.name}</div>
            {product.rating > 0 && (
              <div className="muscle-bag-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.rating ? "star filled" : "star"}>★</span>
                ))}
                <span className="muscle-bag-reviews">({product.reviews})</span>
              </div>
            )}
            <div className="muscle-bag-prices">
              {product.oldPrice && <span className="muscle-bag-oldprice">{product.oldPrice.toLocaleString("vi-VN")} VND</span>}
              <span className="muscle-bag-price">{product.price.toLocaleString("vi-VN")} VND</span>
            </div>
            <button className="muscle-bag-btn">
              {product.options ? 'Chọn tùy chọn': 'Thêm vào giỏ hàng'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuscleBagPage;