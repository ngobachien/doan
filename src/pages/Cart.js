import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Sản phẩm 1',
      price: '1,000,000đ',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      size: 'M',
      color: 'Đen'
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      price: '2,000,000đ',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      size: 'L',
      color: 'Trắng'
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      setCartItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Giỏ hàng</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Giỏ hàng của bạn đang trống</p>
            <button className="continue-shopping">Tiếp tục mua sắm</button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-header">
                <div className="header-item">Sản phẩm</div>
                <div className="header-item">Giá</div>
                <div className="header-item">Số lượng</div>
                <div className="header-item">Tổng</div>
                <div className="header-item"></div>
              </div>

              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-product">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>Size: {item.size}</p>
                      <p>Màu: {item.color}</p>
                    </div>
                  </div>
                  <div className="item-price">{item.price}</div>
                  <div className="item-quantity">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      min="1"
                    />
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="item-total">
                    {formatPrice(parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity)}
                  </div>
                  <div className="item-remove">
                    <button onClick={() => handleRemoveItem(item.id)}>×</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Tổng đơn hàng</h2>
              <div className="summary-row">
                <span>Tạm tính</span>
                <span>{formatPrice(calculateSubtotal())}</span>
              </div>
              <div className="summary-row">
                <span>Phí vận chuyển</span>
                <span>Miễn phí</span>
              </div>
              <div className="summary-row total">
                <span>Tổng cộng</span>
                <span>{formatPrice(calculateSubtotal())}</span>
              </div>
              <button className="checkout-button">Thanh toán</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart; 