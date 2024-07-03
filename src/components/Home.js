import React from "react";
import "./Home.css";

//import what you want to be shown on your home

const Home = () => {
  return (
    <div className="home">
        <img
          className="home_image"
          src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg"
          alt="AirBnB Background"
        />
    </div>
  );
};

export default Home;