import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    paymentMethod: 'cod'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý thanh toán ở đây
    console.log('Checkout form submitted:', formData);
  };

  const orderItems = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      price: '1,000,000đ',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      price: '2,000,000đ',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    }
  ];

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Thanh toán</h1>

        <div className="checkout-content">
          <div className="checkout-form">
            <h2>Thông tin giao hàng</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Họ và tên</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Tỉnh/Thành phố</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn Tỉnh/Thành phố</option>
                    <option value="hcm">TP. Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                    <option value="dn">Đà Nẵng</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="district">Quận/Huyện</label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn Quận/Huyện</option>
                    <option value="q1">Quận 1</option>
                    <option value="q2">Quận 2</option>
                    <option value="q3">Quận 3</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="ward">Phường/Xã</label>
                  <select
                    id="ward"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn Phường/Xã</option>
                    <option value="p1">Phường 1</option>
                    <option value="p2">Phường 2</option>
                    <option value="p3">Phường 3</option>
                  </select>
                </div>
              </div>

              <div className="payment-method">
                <h2>Phương thức thanh toán</h2>
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                    />
                    <span>Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="banking"
                      checked={formData.paymentMethod === 'banking'}
                      onChange={handleChange}
                    />
                    <span>Chuyển khoản ngân hàng</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="place-order-button">Đặt hàng</button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Đơn hàng của bạn</h2>
            <div className="order-items">
              {orderItems.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>Số lượng: {item.quantity}</p>
                    <p className="item-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-total">
              <div className="total-row">
                <span>Tạm tính</span>
                <span>{formatPrice(calculateTotal())}</span>
              </div>
              <div className="total-row">
                <span>Phí vận chuyển</span>
                <span>Miễn phí</span>
              </div>
              <div className="total-row final">
                <span>Tổng cộng</span>
                <span>{formatPrice(calculateTotal())}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout; 