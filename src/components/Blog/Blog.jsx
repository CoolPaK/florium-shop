import React from "react";
import { blogData } from "../../utils/data";
import "./Blog.css";

const Blog = () => {
  return (
    <section id="blog" className="blog section">
      <div className="container">
        <h2 className="section-title">Полезные статьи</h2>
        <div className="blog-grid">
          {blogData.map((article) => (
            <article key={article.id} className="blog-card">
              <div className="blog-image">
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>
              <div className="blog-content">
                <h3>{article.title}</h3>
                <p className="blog-meta">
                  {article.date} • {article.category}
                </p>
                <p className="blog-excerpt">{article.excerpt}</p>
                <a href={article.link} className="blog-link">
                  Читать далее →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
