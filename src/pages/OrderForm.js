import React, { useState } from 'react';
import '../styles/OrderForm.css';
import img1 from '../product/V5wA0W1D.png';
import ThankYouPopup from './ThankYouPopup';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      api_key: '4fUUsYxmc9xXt8R7',
      phone,
      target_hash: 'Bw9dev12',
      country_code: 'PE',
      name,
      data1: '', // Заполните реальными данными или оставьте пустыми
      data2: '',
      data3: '',
      data4: '',
      clickid: '',
      ip: '', // Вы можете добавить получение IP-адреса клиента
      user_agent: navigator.userAgent,
      referer: document.referrer,
      browser_locale: navigator.language
    };

    try {
      const response = await fetch('https://api.aff1.com/v3/lead.create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setShowPopup(true);
      } else {
        const errorData = await response.json();
        alert(`Ошибка при отправке данных: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <form className="order-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Formulario de Pedido</h2>
        <div className="product-details">
          <img src={img1} alt="Product" className="product-image" />
          <div className="product-info">
            <p className="product-price">Precio: <span className="price">149.00S</span></p>
            <p className="product-discount">Descuento: <span className="discount">50%</span></p>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Número de teléfono:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      {showPopup && <ThankYouPopup onClose={closePopup} />}
    </div>
  );
};

export default OrderForm;
