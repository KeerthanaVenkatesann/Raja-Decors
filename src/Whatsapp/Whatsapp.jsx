import React, { useState, useEffect } from 'react';
import './Whatsapp.css'; // Make sure to include your styles here

const Whatsapp = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [message, setMessage] = useState('');

  // Toggle popup
  const togglePopup = () => {
    setIsPopupActive(!isPopupActive);
  };

  // Send message via WhatsApp
  const sendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message.trim());
      window.open(`https://wa.me/+9109940229923?text=${encodedMessage}`, '_blank'); // Replace with your number
      setMessage(''); // Clear input after sending
    }
  };

  // Automatically open popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupActive(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="nav-bottom">
      <div className={`popup-whatsapp ${isPopupActive ? 'is-active-whatsapp-popup' : ''}`}>
        <div className="content-whatsapp -top">
            
          <button type="button" className="closePopup" onClick={togglePopup}>
            <i className="material-icons icon-font-color">close</i>
          </button>
          <p className='text-success'>Hello, 😊 need help?</p>
        </div>
        <div className="content-whatsapp -bottom d-flex">
          <input
            className="whats-input"
            id="whats-in"
            type="text"
            placeholder="Send message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-msPopup" id="send-btn" type="button" onClick={sendMessage}>
            <i className="material-icons icon-font-color--black">send</i>
          </button>
        </div>
      </div>
      <button type="button" id="whats-openPopup" className="whatsapp-button " onClick={togglePopup}>
        <img className="icon-whatsapp" src="https://cdn-icons-png.flaticon.com/512/134/134937.png" alt="WhatsApp Icon" />
      </button>
      <div className="circle-anime"></div>
    </div>
  );
};

export default Whatsapp;
