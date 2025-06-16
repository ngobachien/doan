import React from "react";
import ArticleSection from "./article/ArticleSection";
import ArticleTips from "./article/ArticleTips";
import ArticleGenuine from "./article/ArticleGenuine";
import BilliardsGrid from "./article/BilliardsGrid";
import ArticleTipsBanner from "./article/ArticleTipsBanner";
import "./Article.css";

function Article() {
  return (
    <div className="article-page">
      <ArticleSection />
      <ArticleTips />
      <ArticleGenuine />
      <BilliardsGrid />
      <ArticleTipsBanner />
      {/* Thêm các thành phần con khác ở đây */}
    </div>
  );
}

export default Article; 