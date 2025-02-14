import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import Tags from '../../Components/Tags/Tags';
import Rating from '../../Components/Rating/Rating';
import Collapse from '../../Components/Collapse/Collapse';
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

  return (
    <div>
      {property && ( // Vérifie si la propriété est définie
        <>
          <Carousel images={property.pictures} /> {/* Affiche le carrousel d'images */}

          {/* Nouveau conteneur pour organiser titre/localisation et hôte/rating */}
          <div className="property-header">
            <div className="title-location-tags-container">
              <h1 className="property-title">{property.title}</h1> {/* Titre */}
              <p className="property-location">{property.location}</p> {/* Localisation */}
              <div className="tags-rating-container">
                <Tags tags={property.tags} /> {/* Tags */}
              </div>
            </div>


            <div className="host-rating-container">
              <Rating rating={parseInt(property.rating)} /> {/* Rating */}
              <div className="property-host">
                <span className="host-name">{property.host.name.replace(' ', '\n')}</span>
                <img src={property.host.picture} alt={property.host.name} className="host-photo" />
              </div>
            </div>
          </div>

          {/* Conteneur des tags (seul, sous le header) */}


          <div className="collapses-container">
            <Collapse title="Description">
              <p>{property.description}</p> {/* Affiche la description */}
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {property.equipments.map((equipment, index) => ( // Affiche la liste des équipements
                  <li key={index}>{equipment}</li> // Utilise l'index comme clé
                ))}
              </ul>
            </Collapse>
          </div>
        </>
      )}
    </div>
  );
};

export default Location;
