import React from 'react';
import './BilliardShop.css';

const products = [
  { id: 1, name: 'Titan Jump Stick', price: '4,500,000 VND / 3,600,000 VND', image: './images/tra/020.png', discount: true },
  { id: 2, name: 'Apollo Billiard Cue', price: '7,200,000 VND / 6,700,000 VND', image: './images/tra/012.png', discount: true },
  { id: 3, name: 'Zenith Billiard Cue', price: '6,000,000 VND / 5,800,000 VND', image: './images/tra/013.png', discount: true },
  { id: 4, name: 'Orion Billiard Cue', price: '7,400,000 VND', image: './images/tra/014.png' },
  { id: 5, name: 'Nova Break Cue', price: '5,900,000 VND', image: './images/tra/015.png' },
  { id: 6, name: 'Eclipse Pool Stick', price: '6,300,000 VND', image: './images/tra/016.png' },
  { id: 7, name: 'Phantom Jump Cue', price: '4,800,000 VND', image: './images/tra/017.png' },
  { id: 8, name: 'Sirius Billiard Stick', price: '6,700,000 VND', image: './images/tra/018.png' },
  { id: 9, name: 'Cosmo Break Cue', price: '5,500,000 VND', image: './images/tra/019.png' },
];

function BilliardShop() {
  return (
    <div className="billiard-shop">
      <div className="shop-controls">
        <button className="filter-btn">Filter</button>
        <div className="sort-section">
          <span>Sort by:</span>
          <select>
            <option>Best Seller</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <span className="product-count">{products.length} products</span>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            {product.discount && <span className="discount">Discount</span>}
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="select-options">Select options</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BilliardShop;