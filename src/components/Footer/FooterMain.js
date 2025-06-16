import React from 'react';
import './FooterMain.css';

function FooterMain() {
  return (
    <div className="footer-main">
      <div className="footer-col">
        <h3>CHÍNH SÁCH</h3>
        <ul>
          <li>Thông tin liên hệ</li>
          <li>Chính sách quyền riêng tư</li>
          <li>Chính sách hoàn trả</li>
          <li>Chính sách vận chuyển</li>
          <li>Điều khoản về dịch vụ</li>
        </ul>
      </div>
      <div className="footer-col">
        <h3>CỬA HÀNG</h3>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#promotions">Khuyến mãi</a></li>
          <li><a href="#posts">Bài viết</a></li>
        </ul>
      </div>
      <div className="footer-col footer-about">
        <p>
          Chúng tôi - Billiards Pro Shop luôn chào đón bạn với chung một niềm đam mê mãnh liệt với Bi-a và đảm bảo quyền lợi mua hàng của bạn một cách tốt nhất
        </p>
        <img className="footer-billiard" src="./images/alo-removebg-preview.png" alt="billiard" />
      </div>
    </div>
  );
}

export default FooterMain;