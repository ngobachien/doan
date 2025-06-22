import React from "react";
import "./SpanPage.css";

const products = [
  {
    id: 1,
    name: "PERI - Black Glove",
    image: "./images/allproduct/55.png",
    price: 650000,
    oldPrice: null,
    discount: false,
    rating: 0,
    reviews: 0,
    options: false,
    soldOut: false,
  },
  {
    id: 2,
    name: "AXIS GLOVES",
    image: "./images/allproduct/56.png",
    price: 545455,
    oldPrice: null,
    discount: false,
    rating: 4,
    reviews: 1,
    options: true,
    soldOut: true,
  },
  {
    id: 3,
    name: "RHINO Premium Gloves - Left Hand",
    image: "./images/allproduct/57.png",
    fromPrice: 354545,
    oldPrice: null,
    discount: false,
    rating: 0,
    reviews: 0,
    options: true,
    soldOut: false,
  },
];

const SpanPage = () => {
  return (
    <div>
      <div className="span-banner">
        <h1 className="span-banner-title">Găng tay</h1>
      </div>
      <div className="span-toolbar">
        <div className="span-filter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M6 12h12M10 19h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="span-toolbar-right">
          <span className="span-sort-label">Lọc:</span>
          <select className="span-sort-select">
            <option>Bán chạy nhất</option>
            <option>Giá: Cao đến thấp</option>
            <option>Giá: Thấp đến cao</option>
          </select>
          <span className="span-count">3 sản phẩm</span>
        </div>
      </div>
      <div className="span-grid">
        {products.map((product) => (
          <div className="span-card" key={product.id}>
            <div className="span-img-wrap">
              {product.soldOut ? <span className="span-sold-out">Bán hết</span> : product.discount && <span className="span-discount">Giảm giá</span>}
              <img src={product.image} alt={product.name} className="span-img" />
            </div>
            <div className="span-name">{product.name}</div>
            {product.rating > 0 && (
              <div className="span-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.rating ? "star filled" : "star"}>★</span>
                ))}
                <span className="span-reviews">({product.reviews})</span>
              </div>
            )}
            <div className="span-prices">
              {product.oldPrice && <span className="span-oldprice">{product.oldPrice.toLocaleString("vi-VN")} VND</span>}
              {product.fromPrice ? <span>Từ {product.fromPrice.toLocaleString("vi-VN")} VND</span> : <span className="span-price">{product.price.toLocaleString("vi-VN")} VND</span>}
            </div>
            <button className="span-btn" disabled={product.soldOut}>
              {product.options ? 'Chọn tùy chọn': 'Thêm vào giỏ hàng'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpanPage;