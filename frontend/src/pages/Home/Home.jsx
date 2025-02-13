import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import './Home.css';
import BannerImg from '../../assets/Banner-home.png';

const Home = () => { // Affiche la page d'accueil avec la bannière et les propriétés
  const [properties, setProperties] = useState([]); // Initialise un état properties avec un tableau vide

  useEffect(() => { // Récupère les propriétés depuis l'API
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json()) // Convertit la réponse en JSON
      .then(data => setProperties(data)) // Met à jour l'état properties avec les données
      .catch(error => console.error('Error:', error));
  }, []);

  return ( // Affiche la bannière et les propriétés
    <div>
      <Banner title="Chez vous, partout et ailleurs" image={BannerImg} />
      <div className="properties-wrapper">
        <div className="cards-container">
          {properties.map(property => ( // Affiche les propriétés sous forme de cards
            <Link to={`/location/${property.id}`} key={property.id}> {/* Lien vers la page location */}
              <Card  // Affiche la card avec le titre et la première image de la propriété
                title={property.title} // Affiche le titre de la propriété
                cover={property.pictures[0]} // Affiche la première image de la propriété
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
