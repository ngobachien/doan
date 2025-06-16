import React from "react";
import "./ArticleTipsBanner.css";

const ArticleTipsBanner = () => (
  <section className="articletipsbanner-section">
    <div className="articletipsbanner-content">
      <h2 className="articletipsbanner-title">5 golden tips to help you gain muscle quickly</h2>
      <button className="articletipsbanner-btn">SEE MORE</button>
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