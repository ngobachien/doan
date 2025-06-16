import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
    console.log('Register form submitted:', formData);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-content">
          <h1>Đăng ký tài khoản</h1>
          <p>Tạo tài khoản để mua sắm dễ dàng hơn</p>

          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Họ và tên</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Nhập họ và tên của bạn"
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
                placeholder="Nhập email của bạn"
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
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Nhập mật khẩu của bạn"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Nhập lại mật khẩu của bạn"
              />
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">
                Tôi đồng ý với <a href="#">Điều khoản dịch vụ</a> và <a href="#">Chính sách bảo mật</a>
              </label>
            </div>

            <button type="submit" className="register-button">
              Đăng ký
            </button>
          </form>

          <div className="register-divider">
            <span>hoặc</span>
          </div>

          <div className="social-register">
            <button className="social-button google">
              <img src="https://www.google.com/favicon.ico" alt="Google" />
              Đăng ký với Google
            </button>
            <button className="social-button facebook">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
              Đăng ký với Facebook
            </button>
          </div>

          <div className="login-link">
            Đã có tài khoản? <a href="#">Đăng nhập ngay</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 