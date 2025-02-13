import React from 'react';
import './Rating.css';
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';

const Rating = ({ rating }) => { // Composant Rating qui reçoit la note "rating" en props
  const totalStars = 5; // Nombre total d'étoiles
  const filledStars = Array(rating).fill(true); // Crée un tableau de "rating" étoiles remplies
  const emptyStars = Array(totalStars - rating).fill(false); // Crée un tableau d'étoiles vides

  return (
    <div className="rating-container">
      {filledStars.map((_, index) => ( // Boucle sur le tableau d'étoiles remplies et affiche l'image StarActive.png
        <img key={index} src={StarActive} alt="Star Active" className="star" />
      ))}
      {emptyStars.map((_, index) => ( // Boucle sur le tableau d'étoiles vides et affiche l'image StarInactive.png
        <img key={index + rating} src={StarInactive} alt="Star Inactive" className="star" />
      ))}
    </div>
  );
};

export default Rating;
