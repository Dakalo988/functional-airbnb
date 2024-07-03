import React, { useState } from 'react';
import './Search.css';
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [filters, setFilters] = useState({
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
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
          <input
            type=""
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Select Hotel"
          />
         
        </div>
        <div className="search-section">
          <label>Check in</label>
          <input
            type="text"
            name="checkInDate"
            placeholder="Add dates"
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="text"
            name="checkOutDate"
            placeholder='Add dates'
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <input
            type="text"
            name="guests"
            placeholder="Add guests"
          />
        </div>
        <div className='search_button'>
        <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;