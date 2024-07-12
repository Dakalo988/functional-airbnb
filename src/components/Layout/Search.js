import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onLocationSelect }) => {
  const [filters, setFilters] = useState({
    location: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1
  });

  console.log('Search component received props:', { onLocationSelect });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));

    if (name === 'location' && value === 'local') {
      if (typeof onLocationSelect === 'function') {
        onLocationSelect(value);
      } else {
        console.error('onLocationSelect is not a function');
      }
    }
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-section">
          <label>Hotels</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="">Select Location</option>
            <option value="local">Local</option>
            <option value="local">All Location</option>
            <option value="local">South africa</option>
          </select>
        </div>
        <div className="search-section">
          <label>Check in</label>
          <input
            type="date"
            name="checkInDate"
            value={filters.checkInDate}
            onChange={handleChange}
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="date"
            name="checkOutDate"
            value={filters.checkOutDate}
            onChange={handleChange}
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <select
            name="guests"
            value={filters.guests}
            onChange={handleChange}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
          </select>
        </div>
        <div className='search_button' onClick={handleSearch}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Search;
