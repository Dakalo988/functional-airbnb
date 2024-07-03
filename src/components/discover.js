import React from 'react';
import './discover.css';

const Discover = () => {
  return (
    
    <div className="discover-container">
      <h1>Discover Airbnb Experiences</h1>
      <div className="experience-cards">
        <div className="experience-card">
          <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=1440&im_q=highq" alt="Things to do on your trip" />
          <div className="card-content">
            <h2>Things to do on your trip</h2>
            <button>Experiences</button>
          </div>
        </div>
        <div className="experience-card">
          <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=1440&im_q=highq" alt="Things to do from home" />
          <div className="card-content">
            <h2>Things to do from home</h2>
            <button>Online Experiences</button>
          </div>
        </div>
      </div>
      <div className="gift-cards-section">
        <h2>Shop Airbnb gift cards</h2>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Discover;

