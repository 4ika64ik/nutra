// src/components/CustomNotification.js
import React from 'react';
import './CustomNotification.css';

const CustomNotification = ({ title, body, url, onClose }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="custom-notification" onClick={() => window.open(url, '_blank')}>
      <div className="notification-header">
        <button className="close-button" onClick={handleClick}>&times;</button>
      </div>
      <div className="notification-content">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default CustomNotification;
