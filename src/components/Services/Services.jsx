import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет отправка формы
    alert("Спасибо! Ваш заказ принят. Мы свяжемся с вами в течение 10 минут.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-content">
          <h2>Доставка за 2 часа</h2>
          <p>
            Закажите букет прямо сейчас и получите его в течение 2 часов с
            бесплатной доставкой по городу.
          </p>
          <form className="order-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Пожелания к букету"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Заказать доставку
            </button>
          </form>
        </div>
        <div className="services-image">
          <img
            src="https://img.freepik.com/premium-vector/scootercartooncharmingwithflowersonawhite-2_1201528-4414.jpg?w=2000"
            alt="Доставка цветов"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
