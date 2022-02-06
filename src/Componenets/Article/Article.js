import React from "react";
import "./Article.css";
import article_cover from './article_cover.jpg'

function Article() {
  return (
    <div className="article-container container-fluid d-flex justify-content-center">
        <h1 className="w-100">Responsible Production and Consumption</h1>
        <div class="box-1">
            <div class="article-btn article-btn-one">
                <span>Article</span>
            </div>
        </div>
    </div>
  )
}

export default Article;