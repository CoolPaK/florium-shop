import React from "react";
import { FaClock, FaTruck, FaSeedling, FaCamera } from "react-icons/fa";
import { advantagesData } from "../../utils/data";
import "./Advantages.css";

const Advantages = () => {
  const iconComponents = {
    FaClock,
    FaTruck,
    FaSeedling,
    FaCamera,
  };

  return (
    <section className="advantages section">
      <div className="container">
        <h2 className="section-title">Почему выбирают нас</h2>
        <div className="advantages-grid">
          {advantagesData.map((advantage) => {
            const Icon = iconComponents[advantage.icon];
            return (
              <div key={advantage.id} className="advantage-card">
                <div className="advantage-icon">
                  <Icon />
                </div>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
