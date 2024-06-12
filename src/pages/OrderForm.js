import React, { useState, useEffect } from 'react';
import '../styles/OrderForm.css';
import img1 from '../product/V5wA0W1D.png';
import ThankYouPopup from './ThankYouPopup';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [subId, setSubId] = useState('');

  useEffect(() => {
    const subId = localStorage.getItem('_jlMZQcbXbjm9FwRg') || '';
    setSubId(subId);
    console.log('Sub-ID:', subId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getIp = async () => {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    };

    const ip = await getIp();

    const data = {
      name,
      phone,
      api_key: '4fUUsYxmc9xXt8R7',
      target_hash: 'Bw9dev12',
      country_code: 'PE',
      data1: '',
      data2: '',
      data3: '',
      data4: '',
      clickid: subId,
      sub_id: subId,
      ip,
      user_agent: navigator.userAgent,
      referer: document.referrer,
      browser_locale: navigator.language
    };

    try {
      const response = await fetch('/api/push.json?id=65-ad5134b6ab48a2a5f51f345a71847707&offer=3&flow=2456', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Lead info:', result);
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
