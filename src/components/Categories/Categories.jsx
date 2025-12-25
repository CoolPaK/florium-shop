import React from "react";
import { categoriesData } from "../../utils/data";
import "./Categories.css";

const Categories = () => {
  const handleCategoryClick = (e, href) => {
    e.preventDefault();
    // Здесь можно добавить навигацию или модальное окно
    console.log("Category clicked:", href);
  };

  return (
    <section id="categories" className="categories section">
      <div className="container">
        <h2 className="section-title">Популярные категории</h2>
        <div className="categories-grid">
          {categoriesData.map((category) => (
            <a
              key={category.id}
              href="#"
              className="category-card"
              onClick={(e) =>
                handleCategoryClick(e, `#category-${category.id}`)
              }
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} loading="lazy" />
              </div>
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
