import React, { useState } from "react";
import "./Value.css";

const items = [
  {
    title: "Ensure reputation and quality",
    content: "We always put reputation and product quality first, bringing peace of mind to customers when choosing Billiardss.pro.",
  },
  {
    title: "Product diversity",
    content: "A wide range of products from famous brands, meeting all needs and preferences of billiards lovers.",
  },
  {
    title: "Guarantee experience and service",
    content: "Professional service, dedicated advice, and after-sales support to ensure the best experience for customers.",
  },
  {
    title: "Contribute to the Billiards community",
    content: "Actively participate in and support the development of the Vietnamese billiards community.",
  },
];

const Value = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="value-section">
      <div className="value-top">
        <h2 className="value-title">VALUE BRING</h2>
        <div className="value-content-row">
          <div className="value-accordion">
            {items.map((item, idx) => (
              <div key={idx} className="value-accordion-item">
                <button
                  className="value-accordion-title"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  {item.title}
                  <span className={`value-accordion-arrow${open === idx ? " open" : ""}`}>▼</span>
                </button>
                <div
                  className={`value-accordion-content${open === idx ? " open" : ""}`}
                  style={{ maxHeight: open === idx ? "120px" : "0" }}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="value-img-wrap">
            <img
              src="./images/about/gia.png"
              alt="Billiards Value"
              className="value-img"
            />
          </div>
        </div>
      </div>
      <div className="value-bottom">
        <img
          src="./images/about/toi.png"
          alt="Billiards Cue"
          className="value-bottom-img"
        />
        <div className="value-bottom-text">
          Come to us - Billiardss.pro to discover a world of Billiards of the new generation full of passion and style.
        </div>
      </div>
    </section>
  );
};

export default Value;