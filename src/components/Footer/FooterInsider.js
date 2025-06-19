import React from 'react';
import './FooterInsider.css';

function FooterInsider() {
  return (
    <div className="footer-insider">
      <h2>TRỞ THÀNH NGƯỜI TRONG CUỘC</h2>
      <p>
        Đăng ký ngay để nhận thông tin cập nhật độc quyền về sản phẩm mới, tin tức thể thao và chương trình khuyến mãi! Cập nhật những xu hướng mới nhất từ Billiardss.pro và luôn dẫn đầu trong trò chơi.
      </p>
      <form className="insider-form" onSubmit={e => e.preventDefault()}>
        <input type="email" placeholder="E-mail" required />
        <button type="submit" aria-label="Đăng ký">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 11h12M13 7l4 4-4 4" stroke="#120c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default FooterInsider;