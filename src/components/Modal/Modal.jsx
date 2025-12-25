import React from "react";
import { useModal } from "../../hooks";
import "./Modal.css";

const Modal = () => {
  const { modalType, closeModal } = useModal();

  if (!modalType) return null;

  const modalContent = {
    customBouquet: {
      title: "Соберите свой букет",
      content: (
        <>
          <p>
            Функция находится в разработке. Позвоните нам, и мы поможем собрать
            идеальный букет!
          </p>
          <a href="tel:+79991234567" className="btn btn-primary">
            Позвонить
          </a>
        </>
      ),
    },
    // Здесь можно добавить другие типы модальных окон
  };

  const currentModal = modalContent[modalType];

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-modal"
          onClick={closeModal}
          aria-label="Закрыть"
        >
          ×
        </button>
        <h2>{currentModal?.title}</h2>
        <div className="modal-body">{currentModal?.content}</div>
      </div>
    </div>
  );
};

export default Modal;
