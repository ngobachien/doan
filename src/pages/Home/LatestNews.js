import React from "react";
import "./LatestNews.css";

const news = [
  {
    title: "Hanoi Open 2025",
    image: "./images/hanoi.png",
    desc: "The 2025 Hanoi Open returns with a grander scale, delivering thrilling matches. Get ready for this iconic event!",
  },
  {
    title: "World Pool Championship 2025",
    image: "./images/open.png",
    desc: "Featuring top-tier competition and a $305,000 prize pool, will Fedor Gorst, Joshua Filler, or a Vietnamese star claim the crown?",
  },
];

const LatestNews = ({ onPageChange }) => (
  <section className="latestnews-section">
    <h2 className="latestnews-title">Our Latest News</h2>
    <div className="latestnews-list">
      <div className="latestnews-item">
        <img src={news[0].image} alt={news[0].title} className="latestnews-img" />
        <div className="latestnews-content">
          <div className="latestnews-item-title">{news[0].title}</div>
          <div className="latestnews-desc">{news[0].desc}</div>
          <button className="latestnews-btn">See More</button>
        </div>
      </div>
      <div className="latestnews-item latestnews-item-reverse">
        <div className="latestnews-content">
          <div className="latestnews-item-title">{news[1].title}</div>
          <div className="latestnews-desc">{news[1].desc}</div>
          <button className="latestnews-btn">See More</button>
        </div>
        <img src={news[1].image} alt={news[1].title} className="latestnews-img" />
      </div>
    </div>
    <button className="latestnews-viewall" onClick={() => onPageChange && onPageChange('new')}>
      View All <span className="latestnews-arrow">→</span>
    </button>
  </section>
);

export default LatestNews;