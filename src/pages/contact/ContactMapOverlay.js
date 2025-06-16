import React from "react";
import "./ContactMapOverlay.css";

const ContactMapOverlay = () => (
  <div className="contactmapoverlay-root">
    <div className="contactmapoverlay-card">
      <div className="contactmapoverlay-header">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipOQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw=w408-h272-k-no"
          alt="Bắc Ninh"
          className="contactmapoverlay-img"
        />
        <div className="contactmapoverlay-info">
          <div className="contactmapoverlay-title">Yên Phong-Bắc Ninh</div>
          <div className="contactmapoverlay-address">Trường cao đằng Lý Thái Tổ</div>
          <div className="contactmapoverlay-rating">
            <span className="contactmapoverlay-star">★</span>
            <span className="contactmapoverlay-score">4,0</span>
            <span className="contactmapoverlay-reviews">355 bài viết</span>
          </div>
        </div>
      </div>
      <div className="contactmapoverlay-actions">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=S%C3%A2n+b%C3%B3ng+%C4%90%E1%BA%A1i+T%E1%BB%AB+%C4%90%E1%BA%B7ng+Xu%C3%A2n+B%E1%BA%A3ng,+P.+%C4%90%E1%BA%B7ng+Xu%C3%A2n+B%E1%BA%A3ng,+%C4%90%E1%BA%A1i+Kim,+Ho%C3%A0ng+Mai,+H%C3%A0+N%E1%BB%99i"
          target="_blank"
          rel="noopener noreferrer"
          className="contactmapoverlay-direction"
        >
          Chỉ đường
        </a>
      </div>
    </div>
    <iframe
      className="contactmapoverlay-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.373964857602!2d105.8272110750316!3d20.9806110806564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135addb2e2c1e2d%3A0x6e2e2e2e2e2e2e2e!2zU8OibiBib8O0bmcgxJDhuqFpIFTDumMgxJDhuqNuZyBYdcOibiBCw6FuZw!5e0!3m2!1svi!2s!4v1718000000000!5m2!1svi!2s"
      width="100%"
      height="520"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Bản đồ Sân bóng Đại Từ"
    ></iframe>
  </div>
);

export default ContactMapOverlay; 