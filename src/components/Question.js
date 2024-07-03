import React from 'react';
import './Question.css';

const Question = () => {
  return (
    <div className="question-container">
      <div className="question-content">
        <h1>Questions about hosting?</h1>
        <button className="ask-button">Ask a Superhost</button>
      </div>
    </div>
  );
};

export default Question;
