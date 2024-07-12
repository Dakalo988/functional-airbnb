import React from 'react';
import { useParams } from 'react-router-dom';

const HotelList = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>{decodeURIComponent(name)}</h1>
      <h1>dakalo</h1>
      {/* Display additional details about the hotel here */}
    </div>
  );
};

export default HotelList;
