import React, { useState } from "react";
import { useCart } from "../../hooks"; // Измененный импорт
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-overlay">
          <button
            className={`add-to-cart-btn ${isAdded ? "added" : ""}`}
            onClick={handleAddToCart}
            aria-label={`Добавить ${product.name} в корзину`}
          >
            {isAdded ? "Добавлено!" : "В корзину"}
          </button>
        </div>
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
