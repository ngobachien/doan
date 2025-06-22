import React from "react";
import "./Blogs.css";

const blogs = [
  {
    title: "How to Distinguish Genuine Billiard Cues?",
    image: "./images/out1.png",
  },
  {
    title: "Caring for Billiard Cues Like a Pro",
    image: "./images/out2.png",
  },
  {
    title: "Where Marbles Obey or Betray Their Master",
    image: "./images/out3.png",
  },
];

const Blogs = ({ onPageChange }) => (
  <section className="blogs-section">
    <h2 className="blogs-title">Nhật ký của chúng tôi </h2>
    <div className="blogs-list">
      {blogs.map((b, i) => (
        <div className="blog-card" key={i}>
          <img src={b.image} alt={b.title} className="blog-img" />
          <div className="blog-content">
            <div className="blog-card-title">{b.title}</div>
            <button className="blog-btn">XEM THÊM</button>
          </div>
        </div>
      ))}
    </div>
    <button className="blogs-viewall" onClick={() => onPageChange && onPageChange('new')}>
      View All <span className="blogs-arrow">→</span>
    </button>
  </section>
);

export default Blogs;