import React from 'react';
import './Header.css';
import { IconButton } from '@mui/material';
import { Search, Menu, Public, AccountCircle } from '@mui/icons-material';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png" alt="Airbnb logo" className="header__logo" />
        <div className="header__nav">
          <div className="header__navItem">Places to stay</div>
          <div className="header__navItem">Experiences</div>
          <div className="header__navItem">Online Experiences</div>
        </div>
        <div className="header__right">
          <div className="header__host">Become a Host</div>
          <IconButton>
            <Public />
          </IconButton>
          <IconButton>
            <Menu />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>
      </div>
      <div className="header__search">
        <select className="header__select">
          <option>Hotels</option>
          <option>Hotel 1</option>
          <option>Hotel 2</option>
        </select>
        <input type="date" className="header__input" placeholder="Check in" />
        <input type="date" className="header__input" placeholder="Check out" />
        <input type="text" className="header__input" placeholder="Guests" />
        <IconButton>
          <Search style={{ color: '#ff385c' }} />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
