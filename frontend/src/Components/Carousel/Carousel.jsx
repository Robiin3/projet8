import React, { useState } from 'react';
import './Carousel.css';
import VectorRight from '../../assets/Vector-right.png';
import VectorLeft from '../../assets/Vector-left.png';

const Carousel = ({ images }) => { // Carrousel d'images
  const [currentIndex, setCurrentIndex] = useState(0); // Initialise un état currentIndex à 0

  // Fonction pour passer à l'image précédente
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Met à jour l'état currentIndex en utilisant la valeur précédente. Si l'index est 0, revient à la dernière image, sinon décrémente l'index
  };

  // Fonction pour passer à l'image suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // Si l'index est le dernier, revient à la première image, sinon incrémente l'index
  };

  return ( // Affiche le carrousel avec les images et les boutons de navigation
    <div className="carousel">
      {images.length > 1 && ( // Affiche les flèches seulement s'il y a plus d'une image
        <>
          {/* Bouton pour l'image précédente */}
          <button onClick={handlePrev} className="carousel-button"> {/* Appelle la fonction handlePrev lors du clic */}
            <img src={VectorLeft} alt="Previous" /> {/* Icône flèche gauche */}
          </button>
          {/* Bouton pour l'image suivante */}
          <button onClick={handleNext} className="carousel-button">
            <img src={VectorRight} alt="Next" /> {/* Icône flèche droite */}
          </button>
        </>
      )}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" /> {/* Affiche l'image actuelle en fonction de l'index */}
      {/* Compteur d'images */}
      {images.length > 1 && ( // Affiche le compteur seulement s'il y a plus d'une image
        <div className="carousel-counter"> 
          {currentIndex + 1}/{images.length} {/* Affiche l'index de l'image actuelle et le nombre total d'images */}
        </div>
      )}
    </div>
  );
};

export default Carousel;
