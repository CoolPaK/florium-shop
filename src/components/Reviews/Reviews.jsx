import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { reviewsData } from "../../utils/data";
import "./Reviews.css";

const Reviews = () => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} style={{ opacity: 0.3 }} />);
    }

    return stars;
  };

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <h2 className="section-title">Отзывы наших клиентов</h2>
        <div className="reviews-slider">
          {reviewsData.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="review-avatar"
                  loading="lazy"
                />
                <div className="review-author">
                  <h4>{review.name}</h4>
                  <div className="review-stars">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
