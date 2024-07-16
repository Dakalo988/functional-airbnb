import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <img src="" className="header_logo" alt="logo" />

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
                <Link to="/Login">
                  <span>Login</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
