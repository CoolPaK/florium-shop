import React from "react";
import { FaTimes, FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../hooks"; // Измененный импорт
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    isCartOpen,
    toggleCart,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Корзина</h3>
          <button
            className="cart-close"
            onClick={toggleCart}
            aria-label="Закрыть корзину"
          >
            <FaTimes />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Ваша корзина пуста</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">{item.price}</p>
                    <div className="cart-item-actions">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="quantity-btn"
                        aria-label="Уменьшить количество"
                      >
                        <FaMinus />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="quantity-btn"
                        aria-label="Увеличить количество"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                    aria-label="Удалить товар"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Итого:</span>
                <span className="total-price">
                  {getTotalPrice().toLocaleString("ru-RU")} ₽
                </span>
              </div>
              <div className="cart-actions">
                <button onClick={clearCart} className="btn btn-secondary">
                  Очистить корзину
                </button>
                <button className="btn btn-primary">Оформить заказ</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
