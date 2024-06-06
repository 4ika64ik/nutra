import React from 'react';
import './ThankYouPopup.css';
import checkmarkIcon from '../pages/img/images.png'; // Путь к значку принятого заказа

const ThankYouPopup = ({ onClose }) => {
  return (
    <div className="thank-you-popup">
      <div className="thank-you-popup-content">
        <img src={checkmarkIcon} alt="Checkmark" className="checkmark-icon" />
        <h2>¡Gracias!</h2>
        <p>Su pedido ha sido aceptado.</p>
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
};

export default ThankYouPopup;
