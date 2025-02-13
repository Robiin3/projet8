import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import './Location.css';

const Location = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => response.json())
      .then(data => setProperty(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Carousel images={property.pictures} />
      <h1>{property.title}</h1>
    </div>
  );
};

export default Location;
