import React from 'react';
import './Insperation.css';

const Insperation = () => {
  const destinations = [
    { city: 'Phoenix', state: 'Arizona' },
    { city: 'Hot Springs', state: 'Arkansas' },
    { city: 'Los Angeles', state: 'California' },
    { city: 'San Diego', state: 'California' },
    { city: 'San Francisco', state: 'California' },
    { city: 'Barcelona', state: 'Catalonia' },
    { city: 'Prague', state: 'Czechia' },
    { city: 'Washington', state: 'District of Columbia' },
    { city: 'Keswick', state: 'England' },
    { city: 'London', state: 'England' },
    { city: 'Scarborough', state: 'England' },
  ];

  return (
    <div className="inspiration-container">
      <h2>Inspiration for future getaways</h2>
      <div className="tabs">
        <button className="active-tab">Destinations for arts & culture</button>
        <button>Destinations for outdoor adventure</button>
        <button>Mountain cabins</button>
        <button>Beach destinations</button>
        <button>Popular destinations</button>
        <button>Unique Stays</button>
      </div>
      <div className="destinations">
        {destinations.map((destination, index) => (
          <div key={index} className="destination">
            <p>{destination.city}</p>
            <p>{destination.state}</p>
          </div>
        ))}
        <a href="Discover.js" className="show-more">Show more</a>
      </div>
    </div>
  );
}

export default Insperation;
