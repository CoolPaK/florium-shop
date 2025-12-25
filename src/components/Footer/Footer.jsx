import React, { useState } from "react";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaVk,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaHeart,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Спасибо за подписку! Вы будете получать наши новости и акции.");
      setEmail("");
    }
  };

  const footerLinks = [
    { label: "Главная", href: "#home" },
    { label: "Каталог", href: "#catalog" },
    { label: "Категории", href: "#categories" },
    { label: "Доставка", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Блог", href: "#blog" },
  ];

  const socialLinks = [
    { icon: FaVk, href: "#", label: "ВКонтакте" },
    { icon: FaTelegram, href: "#", label: "Telegram" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer id="contacts" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <h2>
                <FaLeaf /> Флориум
              </h2>
            </div>
            <p className="footer-description">
              Дарим красоту и эмоции с 2015 года. Свежие цветы с доставкой по
              городу.
            </p>
            <div className="footer-contacts">
              <p>
                <FaMapMarkerAlt /> г. Москва, ул. Цветочная, 15
              </p>
              <p>
                <FaPhone /> +7 (999) 123-45-67
              </p>
              <p>
                <FaEnvelope /> info@florium.ru
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h3>Меню</h3>
            <ul className="footer-menu">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Мы в соцсетях</h3>
            <div className="social-icons">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <div className="newsletter">
              <h3>Подпишитесь на новости</h3>
              <form className="subscribe-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Подписаться">
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Флориум. Все права защищены.</p>
          <p>
            Сайт создан с <FaHeart style={{ color: "#e91e63" }} /> для любителей
            цветов
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
