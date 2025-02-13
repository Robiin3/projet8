import React, { useState } from 'react';
import './Carousel.css';
import VectorRight from '../../assets/Vector-right.png';
import VectorLeft from '../../assets/Vector-left.png';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-button">
        <img src={VectorLeft} alt="Previous" />
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button onClick={handleNext} className="carousel-button">
        <img src={VectorRight} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
