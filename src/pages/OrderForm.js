import React, { useState, useEffect } from 'react';
import '../styles/OrderForm.css';
import img1 from '../product/V5wA0W1D.png';
import ThankYouPopup from './ThankYouPopup';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [subId, setSubId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Получение subid и token из Keitaro трекера
    if (window.KTracking) {
      window.KTracking.ready((subid, token) => {
        setSubId(subid);
        setToken(token);
        console.log('Sub-ID:', subid);
        console.log('Token:', token);
      });
    } else {
      console.error('KTracking is not defined');
    }
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
      token,
      ip,
      user_agent: navigator.userAgent,
      referer: document.referrer,
      browser_locale: navigator.language
    };

    console.log('Sending data:', data); // Вывод всех данных в консоль

    try {
      // Отправка данных на промежуточный сервер
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const text = await response.text();
      console.log('Response text:', text);

      if (response.ok) {
        const result = JSON.parse(text);
        console.log('Lead info:', result);
        setShowPopup(true);

        // Отправка данных в Keitaro
        if (window.Tracker) {
          window.Tracker.trackClick({
            sub_id: subId
          });
        }

        // Отчет о конверсии в Keitaro
        const revenue = 0;
        const status = 'lead';
        const tid = Math.floor(Math.random() * 1000000000);
        if (window.KTracking) {
          window.KTracking.reportConversion(revenue, status, { tid });
        }
      } else {
        console.error('Ошибка при отправке данных:', text);
        alert(`Ошибка при отправке данных: ${text}`);
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
        <input type="hidden" id="subIdInput" name="sub_id" value={subId} />
        <input type="hidden" id="tokenInput" name="token" value={token} />
        <button type="submit" className="submit-button">Enviar</button>
      </form>
      {showPopup && <ThankYouPopup onClose={closePopup} />}
    </div>
  );
};

export default OrderForm;
