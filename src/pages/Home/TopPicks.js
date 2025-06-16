import React from 'react';
import './TopPicks.css';

const topPicks = [
  { id: 1, name: 'PERI- Baron P-D01', price: 6600000, oldPrice: 6800000, image: './images/allproduct/10.png', discount: true, rating: 0, options: false },
  { id: 2, name: 'CUETEC POOL CUBLE - AVID Opt-X', price: 8975000, oldPrice: 9500000, image: './images/allproduct/11.png', discount: true, rating: 5, options: true },
  { id: 3, name: 'Genuine White Kylin Cue Case', price: 3500000, oldPrice: 3700000, image: './images/allproduct/12.png', discount: true, rating: 0, options: false },
  { id: 4, name: 'TURNING POINT - TP', price: 210000, oldPrice: 300000, image: './images/allproduct/13.png', discount: true, rating: 5, options: false },
  { id: 5, name: 'Rhino Evo Camo', price: 2200000, oldPrice: 2500000, image: './images/allproduct/14.png', discount: true, rating: 0, options: true },
  { id: 6, name: 'Rhino GW', price: 2690000, oldPrice: null, image: './images/allproduct/15.png', discount: false, rating: 0, options: true },
  { id: 7, name: 'Mezz Power Break Kai', price: 8500000, oldPrice: 9000000, image: './images/allproduct/16.png', discount: true, rating: 4, options: false },
  { id: 8, name: 'Predator BK Rush', price: 14500000, oldPrice: 15500000, image: './images/allproduct/17.png', discount: true, rating: 5, options: false },
  { id: 9, name: 'Cuetec Cynergy', price: 10500000, oldPrice: null, image: './images/allproduct/18.png', discount: false, rating: 4, options: true },
  { id: 10, name: 'Buffalo Dominator II', price: 4200000, oldPrice: 4500000, image: './images/allproduct/19.png', discount: true, rating: 3, options: false },
  { id: 11, name: 'Viking Valhalla', price: 3200000, oldPrice: null, image: './images/allproduct/20.png', discount: false, rating: 0, options: true },
  { id: 12, name: 'McDermott G-Series', price: 7800000, oldPrice: 8200000, image: './images/allproduct/21.png', discount: true, rating: 4, options: false },
];

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' VND';
}

function TopPicks() {
  return (
    <section className="top-picks-section">
      <h2 className="top-picks-title">Top Picks</h2>
      <div className="top-picks-grid">
        {topPicks.map(product => (
          <div className="top-pick-card" key={product.id}>
            <div className="top-pick-img-wrap">
              {product.discount && <span className="discount-badge">Discount</span>}
              <img src={product.image} alt={product.name} />
            </div>
            <div className="top-pick-info">
              <div className="top-pick-name">{product.name}</div>
              {product.rating > 0 && (
                <div className="top-pick-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < product.rating ? 'star filled' : 'star'}>★</span>
                  ))}
                  <span className="rating-count">({product.rating > 0 ? 1 : 0})</span>
                </div>
              )}
              <div className="top-pick-prices">
                {product.oldPrice && <span className="old-price">{formatPrice(product.oldPrice)}</span>}
                <span className="new-price">{formatPrice(product.price)}</span>
              </div>
              <button className="top-pick-btn">
                {product.options ? 'Select Options' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopPicks;