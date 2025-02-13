import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import './Location.css';

const Location = () => {
  const { id } = useParams(); // Récupère l'id de la propriété depuis l'URL
  const [property, setProperty] = useState(null); // Initialise un état property avec la valeur null

  useEffect(() => { // Récupère les données de la propriété depuis l'API
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => response.json()) // Convertit la réponse en JSON
      .then(data => setProperty(data)) // Met à jour l'état property avec les données
      .catch(error => console.error('Error:', error));
  }, [id]); // Exécute l'effet uniquement lorsque l'id change

  return ( // Affiche le carrousel avec les images et le titre de la propriété
    <div>
      {property && ( // Vérifie si la propriété est définie
        <>
          <Carousel images={property.pictures} />
          <h1>{property.title}</h1> 
        </>
      )}
    </div>
  );
};

export default Location;
