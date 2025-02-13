import React from 'react';
import './Card.css';

const Card = ({ title, cover }) => { // Affiche une carte avec le titre et l'image spécifiés
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;
