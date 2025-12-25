import React, { useState, useEffect } from "react";
import { FaLeaf, FaPhone, FaShoppingCart, FaBars } from "react-icons/fa";
import "./Header.css";
import { useCart } from "../../hooks"; // Измененный импорт

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  const navItems = [
    { label: "Главная", href: "#home" },
    { label: "Каталог", href: "#catalog" },
    { label: "Категории", href: "#categories" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Блог", href: "#blog" },
    { label: "Контакты", href: "#contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const header = document.querySelector(".header");
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <h1>
            <FaLeaf /> Флориум
          </h1>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <a href="tel:+79991234567" className="phone">
            <FaPhone /> <span>+7 (999) 123-45-67</span>
          </a>
          <button
            className="cart-btn"
            onClick={toggleCart}
            aria-label="Открыть корзину"
          >
            <FaShoppingCart />
            <span className="cart-count">{getTotalItems()}</span>
          </button>
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
