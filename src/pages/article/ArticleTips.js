import React from "react";
import "./ArticleTips.css";

const ArticleTips = () => (
  <section className="articletips-section">
    <div className="articletips-content">
      <h2 className="articletips-title">Mẹo chọn gậy bida phù hợp với bạn</h2>
      <button className="articletips-btn">XEM THÊM</button>
    </div>
    <div className="articletips-img-wrap">
      <img
        src="./images/tip/tip.png"
        alt="Tips for choosing the right pool cue for you"
        className="articletips-img"
      />
    </div>
  </section>
);

export default ArticleTips; 