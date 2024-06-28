import React from "react";
import "./Cards.css";

const Cards = ({ src, title, distance}) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default Cards