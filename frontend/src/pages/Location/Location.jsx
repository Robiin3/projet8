import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import Tags from '../../Components/Tags/Tags';
import Rating from '../../Components/Rating/Rating';
import Collapse from '../../Components/Collapse/Collapse';
import './Location.css';

const Location = () => {
  const { id } = useParams(); // Récupère l'id de la propriété depuis l'URL
  const [property, setProperty] = useState(null); // Initialise un état property avec la valeur null
  const navigate = useNavigate(); // Hook pour gérer la navigation entre les pages

  useEffect(() => { // Récupère les données de la propriété depuis l'API
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => { // Vérifie si la réponse est OK
        if (!response.ok) { // Si la réponse n'est pas OK, lance une erreur
          throw new Error('Property not found');
        }
        return response.json(); // Convertit la réponse JSON de l'API en objet JavaScript exploitable
      })
      .then(data => setProperty(data)) // Met à jour l'état property avec les données
      .catch(error => {
        console.error('Error:', error);
        navigate('/error'); // Redirige vers la page d'erreur en cas d'ID incorrect
      });
  }, [id, navigate]); // Exécute l'effet uniquement lorsque l'id change

  return (
    <div>
      {property && ( // Vérifie si la propriété est définie
        <>
          <Carousel images={property.pictures} /> {/* Affiche le carrousel d'images */}

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
                <span className="host-name">{property.host.name.replace(' ', '\n')}</span> {/* Nom de l'hôte */}
                <img src={property.host.picture} alt={property.host.name} className="host-photo" /> {/* Photo de l'hôte */}
              </div>
            </div>
          </div>

        {/* Collapses */}
          <div className="collapses-container">
            <Collapse title="Description">
              <p>{property.description}</p> {/* Description */}
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {property.equipments.map((equipment, index) => ( // Liste des équipements
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
