import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";
import { productsData } from "../../utils/data";
import "./Bestsellers.css";

const Bestsellers = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="catalog" className="bestsellers section">
      <div className="container">
        <h2 className="section-title">Хит продаж</h2>
        <div className="products-carousel" ref={carouselRef}>
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn prev-btn"
            onClick={scrollLeft}
            aria-label="Предыдущий слайд"
          >
            <FaChevronLeft />
          </button>
          <button
            className="carousel-btn next-btn"
            onClick={scrollRight}
            aria-label="Следующий слайд"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
