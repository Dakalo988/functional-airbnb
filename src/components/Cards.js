import React from 'react';
import './Cards.css';

const hotels = [
  {
    name: 'Sandton City Hotel',
    distance: '53 km away',
    image: 'https://via.placeholder.com/200x150', // Replace with actual image URLs
  },
  {
    name: 'Joburg City Hotel',
    distance: '168 km away',
    image: 'https://via.placeholder.com/200x150', // Replace with actual image URLs
  },
  {
    name: 'Woodmead Hotel',
    distance: '30 miles away',
    image: 'https://via.placeholder.com/200x150', // Replace with actual image URLs
  },
  {
    name: 'Hyde Park Hotel',
    distance: '34 km away',
    image: 'https://via.placeholder.com/200x150', // Replace with actual image URLs
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      <h2>Inspiration for your next trip</h2>
      <div className="cards">
        {hotels.map((hotel, index) => (
          <div className="card" key={index}>
            <img src={hotel.image} alt={hotel.name} />
            <div className="card-content">
              <h3>{hotel.name}</h3>
              <p>{hotel.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
