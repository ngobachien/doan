import React from 'react';
import './BilliardCatalog.css';

const products = [
  { id: 1, name: 'Predator 8K-2 Billiard Cue', price: '25,000,000 VND / 21,725,000 VND', image: './images/tra/01.png', discount: true },
  { id: 2, name: 'McDermott Star S3 Cue', price: '10,500,000 VND / 8,375,000 VND', image: './images/tra/02.png', discount: true },
  { id: 3, name: 'Viking VA212 Break Cue', price: '35,000,000 VND', image: './images/tra/03.png', soldOut: true },
  { id: 4, name: 'Fury Stinger Jump Cue', price: '18,500,000 VND', image: './images/tra/04.png' },
  { id: 5, name: 'Peacock P1 Pool Cue', price: '16,000,000 VND', image: './images/tra/05.png' },
  { id: 6, name: 'OB Classic OB-1 Cue', price: '13,200,000 VND', image: './images/tra/06.png' },
  { id: 7, name: 'Schon CX-04 Cue', price: '21,500,000 VND', image: './images/tra/07.png' },
  { id: 8, name: 'Lucasi Hybrid LHC98 Cue', price: '19,800,000 VND', image: './images/tra/08.png' },
  { id: 9, name: 'Joss JX-21 Billiard Cue', price: '15,300,000 VND', image: './images/tra/09.png' },
  { id: 10, name: 'Mezz AXI-156 Cue', price: '17,900,000 VND', image: './images/tra/010.png' },
  { id: 11, name: 'Katana KTC-03 Break Cue', price: '20,400,000 VND', image: './images/tra/011.png' },
];

function BilliardCatalog() {
  return (
    <div className="billiard-catalog">
      <div className="catalog-controls">
        <div className="sort-section">
          <span>Lọc:</span>
          <select>
            <option>Bán chạy nhất</option>
            <option>Giá: Cao đến thấp</option>
            <option>Giá: Thấp đến cao</option>
          </select>
        </div>
        <span className="product-count">{products.length} Các sản phẩm</span>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            {product.discount && <span className="discount">Giảm giá</span>}
            {product.soldOut && <span className="sold-out">Bán hết</span>}
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="card-actions">
              {product.soldOut ? (
                <button className="sold-out-btn">Bán hết</button>
              ) : (
                <>
                  <button className="select-options">Chọn tùy chọn</button>
                  <button className="add-to-cart">Thêm vào giỏ hàng</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BilliardCatalog;