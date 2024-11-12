import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div className="header">
      <img src="http://pluspng.com/img-png/airbnb-logo-png-airbnb-logo-white-on-black-1600.png" className="header_logo" alt="logo" />

      <div className="header_center">
        <p>Places to Stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="header_dropdowns">
          <MenuIcon />
          <div className="dropdown">
            <Avatar onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className="dropdown-content">
                <span onClick={handleLoginClick}>Login</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
