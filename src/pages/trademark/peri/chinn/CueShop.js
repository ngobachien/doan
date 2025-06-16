import React, { useState } from 'react';
import './CueShop.css';

const CueShop = () => {
  const [sortBy, setSortBy] = useState('Best Seller');

  const products = [
    {
      id: 1,
      name: 'Genuine White Kylin Cue Case',
      price: '3,500,000 VND',
      originalPrice: '5,700,000 VND',
      hasDiscount: true,
      imageUrl: './images/tra/021.png'
    },
    {
      id: 2,
      name: 'PERI Break Cue PBH+ JP02-W',
      price: '9,300,000 VND',
      originalPrice: '10,000,000 VND',
      hasDiscount: true,
      imageUrl: './images/tra/022.png'
    },
    {
      id: 3,
      name: 'PERI Baron P-D01',
      price: '6,000,000 VND',
      originalPrice: '6,800,000 VND',
      hasDiscount: true,
      imageUrl: './images/tra/023.png'
    },
    {
      id: 4,
      name: 'PERI Viscount WB-G02',
      price: '24,200,000 VND',
      originalPrice: '26,000,000 VND',
      hasDiscount: false,
      imageUrl: './images/tra/04.png'
    },
    {
      id: 5,
      name: 'PERI Classic Cue CC-001',
      price: '4,200,000 VND',
      originalPrice: '4,800,000 VND',
      hasDiscount: true,
      imageUrl: 'chien/public/images/tra/025.png'
    },
    {
      id: 6,
      name: 'PERI Pro Series PS-100',
      price: '7,500,000 VND',
      originalPrice: '8,200,000 VND',
      hasDiscount: false,
      imageUrl: 'chien/public/images/tra/026.png'
    },
    {
      id: 7,
      name: 'PERI Elite Cue EC-200',
      price: '11,000,000 VND',
      originalPrice: '12,500,000 VND',
      hasDiscount: true,
      imageUrl: 'chien/public/images/tra/027.png'
    },
    {
      id: 8,
      name: 'PERI Tournament Cue TC-300',
      price: '15,200,000 VND',
      originalPrice: '16,800,000 VND',
      hasDiscount: false,
      imageUrl: 'chien/public/images/tra/028.png'
    },
    {
      id: 9,
      name: 'PERI Luxury Cue LC-400',
      price: '28,500,000 VND',
      originalPrice: '30,000,000 VND',
      hasDiscount: true,
      imageUrl: 'chien/public/images/tra/029.png'
    },
    {
      id: 10,
      name: 'PERI Signature Cue SC-500',
      price: '34,800,000 VND',
      originalPrice: '36,500,000 VND',
      hasDiscount: false,
      imageUrl: 'chien/public/images/tra/030.png'
    }
  ];

  return (
    <div className="cueshop-container">
      {/* Header */}
      <div className="cueshop-header">
        <div className="filter-btn">
          <span>⚙</span> Filter
        </div>
        
        <div className="sort-section">
          <span>Sort by:</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option>Best Seller</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        
        <div className="product-count">
          {products.length} products
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            {product.hasDiscount && <div className="discount-badge">Discount</div>}
            
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                <span className="current-price">{product.price}</span>
                {product.hasDiscount && <span className="original-price">{product.originalPrice}</span>}
              </div>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CueShop;