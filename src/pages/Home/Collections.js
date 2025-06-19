import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import "./Collections.css";

const collections = [
  {
    id: "martian-cue",
    name: "The Martian's Cue",
    image: "/images/allproduct/10.png",
  },
  {
    id: "avid-cue",
    name: "AVID Cue",
    image: "/images/allproduct/11.png",
  },
  {
    id: "baron-cue",
    name: "Baron Cue",
    image: "/images/allproduct/12.png",
  },
  {
    id: "svb-cue",
    name: "SVB's Cue",
    image: "/images/allproduct/13.png",
  },
];

const Collections = ({ onPageChange }) => {
  const [hoveredId, setHoveredId] = useState(null);

  if (!collections.length) {
    return <p className="no-collections">No collections available.</p>;
  }

  return (
    <section className="collections-section">
      <h2 className="collections-title">COLLECTIONS</h2>
      <p className="collections-subtitle">
        Explore the collection curated by Billiardss.pro now
      </p>
      <div className="collections-grid">
        {collections.map((cue) => (
          <div
            className={`collection-card ${hoveredId === cue.id ? "hovered" : ""}`}
            key={cue.id}
            onMouseEnter={() => setHoveredId(cue.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="collection-img-wrap">
              <img
                src={cue.image}
                alt={`Cue stick from ${cue.name} collection`}
                className="collection-img"
                loading="lazy"
              />
            </div>
            <button
              className="collection-btn"
              onClick={() =>
                onPageChange && onPageChange("products", { cueId: cue.id })
              }
              aria-label={`View products for ${cue.name}`}
            >
              {cue.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

Collections.propTypes = {
  onPageChange: PropTypes.func,
};

export default memo(Collections);