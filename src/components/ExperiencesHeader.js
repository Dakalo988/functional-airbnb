// ExperiencesHeader.js
import React from 'react';
import './ExperiencesHeader.css';

const ExperiencesHeader = () => {
  return (
    <div className="experiences-header">
      <div className="category">
        <img src="/path-to-outdoor-image.jpg" alt="Outdoor" />
        <h2>Things to do</h2>
      </div>
      <div className="category">
        <img src="/path-to-cooking-image.jpg" alt="Cooking" />
        <h2>From home</h2>
      </div>
    </div>
  );
};

export default ExperiencesHeader;
