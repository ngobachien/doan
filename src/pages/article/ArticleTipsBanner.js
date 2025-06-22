import React from "react";
import "./ArticleTipsBanner.css";

const ArticleTipsBanner = () => (
  <section className="articletipsbanner-section">
    <div className="articletipsbanner-content">
      <h2 className="articletipsbanner-title">5 mẹo vàng giúp bạn tăng cơ nhanh chóng</h2>
      <button className="articletipsbanner-btn">XEM THÊM</button>
    </div>
    <img
      src="./images/tip/tip5.png"
      alt="5 golden tips to help you gain muscle quickly"
      className="articletipsbanner-bg"
    />
    <div className="articletipsbanner-overlay" />
  </section>
);

export default ArticleTipsBanner; 