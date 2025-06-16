import React from "react";
import NewsSection from "./news/NewsSection";
import HanoiOpen from "./news/HanoiOpen";
import WorldPool from "./news/WorldPool";
import WorldCup from "./news/WorldCup";
import Player from "./news/Player";
import "./News.css";

function News() {
  return (
    <div className="news-page">
      <NewsSection />
      <HanoiOpen />
      <WorldPool />
      <WorldCup />
      <Player />
      {/* Thêm các thành phần con khác ở đây */}
    </div>
  );
}

export default News; 