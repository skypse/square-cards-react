import React from 'react';
import './Card.css';

const Card = ({ imgSrc, title, description, videoUrl }) => {
  return (
    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <div className="card card-background">
        <img className="image" src={imgSrc} alt={title} />
        <div className="details">
          <h1>{title}</h1>
          <br />
          <p>{description}</p>
        </div>
        <div className="middle">
          <div>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
