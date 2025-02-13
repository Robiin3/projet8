import React, { useState } from 'react';
import './Carousel.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

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
        <ArrowBackIos />
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      <button onClick={handleNext} className="carousel-button">
        <ArrowForwardIos />
      </button>
    </div>
  );
};

export default Carousel;
