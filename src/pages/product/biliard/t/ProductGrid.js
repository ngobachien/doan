import React, { useState } from 'react';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Cơ Predator P3', image: './images/allproduct/1.png', price: 6500000, oldPrice: 7000000, discount: true, rating: 5, reviews: 18, options: true },
  { id: 2, name: 'Cơ McDermott G-Series', image: './images/allproduct/2.png', price: 7200000, oldPrice: null, discount: false, rating: 4, reviews: 12, options: true },
  { id: 3, name: 'Cơ Meucci Original', image: './images/allproduct/3.png', price: 5600000, oldPrice: 6200000, discount: true, rating: 4, reviews: 10, options: false },
  { id: 4, name: 'Cơ Viking A-Series', image: './images/allproduct/4.png', price: 4800000, oldPrice: null, discount: false, rating: 3, reviews: 8, options: true },
  { id: 5, name: 'Cơ Lucasi Custom', image: './images/allproduct/5.png', price: 5900000, oldPrice: 6300000, discount: true, rating: 4, reviews: 9, options: false },
  { id: 6, name: 'Cơ Pechauer JP Series', image: './images/allproduct/6.png', price: 6700000, oldPrice: null, discount: false, rating: 5, reviews: 11, options: true },
  { id: 7, name: 'Cơ OB Cues Classic', image: './images/allproduct/7.png', price: 6100000, oldPrice: 6600000, discount: true, rating: 4, reviews: 13, options: false },
  { id: 8, name: 'Cơ Katana Slim', image: './images/allproduct/8.png', price: 5300000, oldPrice: null, discount: false, rating: 3, reviews: 6, options: true },
  { id: 9, name: 'Cơ Balabushka GB Series', image: './images/allproduct/9.png', price: 7500000, oldPrice: 8000000, discount: true, rating: 5, reviews: 7, options: true },
  { id: 10, name: 'Cơ Cuetec Cynergy', image: './images/allproduct/30.png', price: 8200000, oldPrice: null, discount: false, rating: 5, reviews: 15, options: true },
  { id: 11, name: 'Cơ Schon STL Series', image: './images/allproduct/31.png', price: 9000000, oldPrice: 9500000, discount: true, rating: 5, reviews: 5, options: true },
  { id: 12, name: 'Cơ Joss JOS Series', image: './images/allproduct/12.png', price: 5800000, oldPrice: null, discount: false, rating: 4, reviews: 10, options: false },
  { id: 13, name: 'Cơ Players C-960', image: './images/allproduct/13.png', price: 3900000, oldPrice: 4300000, discount: true, rating: 3, reviews: 14, options: false },
  { id: 14, name: 'Cơ Jacoby Custom', image: './images/allproduct/14.png', price: 8500000, oldPrice: null, discount: false, rating: 4, reviews: 11, options: true },
  { id: 15, name: 'Cơ Fury DL Series', image: './images/allproduct/15.png', price: 4200000, oldPrice: 4600000, discount: true, rating: 5, reviews: 23, options: false },
  { id: 16, name: 'Cơ Adam Japan', image: './images/allproduct/16.png', price: 9300000, oldPrice: null, discount: false, rating: 4, reviews: 13, options: true },
  { id: 17, name: 'Cơ Longoni Italy', image: './images/allproduct/17.png', price: 12000000, oldPrice: 13000000, discount: true, rating: 5, reviews: 9, options: true },
  { id: 18, name: 'Cơ Poison VX', image: './images/allproduct/18.png', price: 4700000, oldPrice: null, discount: false, rating: 4, reviews: 7, options: false },
  { id: 19, name: 'Cơ Dufferin Classic', image: './images/allproduct/19.png', price: 3900000, oldPrice: 4300000, discount: true, rating: 3, reviews: 15, options: false },
  { id: 20, name: 'Cơ Falcon F1', image: './images/allproduct/20.png', price: 6800000, oldPrice: null, discount: false, rating: 4, reviews: 10, options: true },
  { id: 21, name: 'Cơ Exceed by Mezz', image: './images/allproduct/21.png', price: 10500000, oldPrice: 11500000, discount: true, rating: 5, reviews: 12, options: true },
  { id: 22, name: 'Cơ G-Core G500', image: './images/allproduct/22.png', price: 7600000, oldPrice: null, discount: false, rating: 4, reviews: 11, options: true },
  { id: 23, name: 'Cơ Tiger Icebreaker', image: './images/allproduct/23.png', price: 8800000, oldPrice: 9200000, discount: true, rating: 4, reviews: 10, options: true },
  { id: 24, name: 'Cơ Universal Smart Shaft', image: './images/allproduct/24.png', price: 5600000, oldPrice: null, discount: false, rating: 3, reviews: 8, options: false },
  { id: 25, name: 'Cơ Mezz ZZ Series', image: './images/allproduct/25.png', price: 9900000, oldPrice: 10500000, discount: true, rating: 5, reviews: 13, options: true },
  { id: 26, name: 'Cơ Cuetec AVID', image: './images/allproduct/26.png', price: 6200000, oldPrice: null, discount: false, rating: 4, reviews: 9, options: false },
  { id: 27, name: 'Cơ Athena Ladies Cue', image: './images/allproduct/27.png', price: 4100000, oldPrice: 4500000, discount: true, rating: 4, reviews: 14, options: true },
  { id: 28, name: 'Cơ Becue Carbon', image: './images/allproduct/28.png', price: 11500000, oldPrice: null, discount: false, rating: 5, reviews: 7, options: true },
  { id: 29, name: 'Cơ Elite Sneaky Pete', image: './images/allproduct/29.png', price: 3700000, oldPrice: 4100000, discount: true, rating: 3, reviews: 11, options: false },
];

const PRODUCTS_PER_PAGE = 12;

const ProductGrid = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const currentProducts = products.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <div>
      <div className="productgrid-toolbar">
        <div className="productgrid-filter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18M6 12h12M10 19h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Filter</span>
        </div>
        <div className="productgrid-toolbar-right">
          <span className="productgrid-sort-label">Sort by:</span>
          <select className="productgrid-sort-select">
            <option>Best Seller</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
          <span className="productgrid-count">{products.length} products</span>
        </div>
      </div>
      <div className="productgrid-grid">
        {currentProducts.map(product => (
          <div className="productgrid-card" key={product.id}>
            <div className="productgrid-img-wrap">
              {product.discount && <span className="productgrid-discount">Discount</span>}
              <img src={product.image} alt={product.name} className="productgrid-img" />
            </div>
            <div className="productgrid-name">{product.name}</div>
            {product.rating > 0 && (
              <div className="productgrid-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.rating ? 'star filled' : 'star'}>★</span>
                ))}
                <span className="productgrid-reviews">({product.reviews})</span>
              </div>
            )}
            <div className="productgrid-prices">
              {product.oldPrice && <span className="productgrid-oldprice">{product.oldPrice.toLocaleString('vi-VN')} VND</span>}
              <span className="productgrid-price">{product.price.toLocaleString('vi-VN')} VND</span>
            </div>
            <button className="productgrid-btn">
              {product.options ? 'Select options' : 'Add to cart'}
            </button>
          </div>
        ))}
      </div>
      <div className="productgrid-pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`productgrid-page-btn${page === i + 1 ? ' active' : ''}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;