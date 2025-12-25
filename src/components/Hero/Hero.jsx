import React from "react";
import { useModal } from "../../hooks"; // Измененный импорт
import "./Hero.css";

const Hero = () => {
  const { openModal } = useModal();

  const handleCustomBouquet = (e) => {
    e.preventDefault();
    openModal("customBouquet");
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Создаем эмоции из цветов</h1>
          <p className="hero-subtitle">Свежие букеты с доставкой за 2 часа</p>
          <div className="hero-buttons">
            <a href="#catalog" className="btn btn-primary">
              Смотреть каталог
            </a>
            <button onClick={handleCustomBouquet} className="btn btn-secondary">
              Собрать свой букет
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://img.goodfon.ru/wallpaper/nbig/3/ee/ii-art-iskusstvo-iskusstvennogo-intellekta-neiroset-tsif-122.webp"
            alt="Красивый букет цветов"
            className="hero-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
