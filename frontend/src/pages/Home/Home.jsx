import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/header';
import BannerHome from '../../Components/Banner/BannerHome';
import Card from '../../Components/Card/Card';
import './Home.css';

const Home = () => {
// Déclare une variable d'état `properties` pour stocker la liste des propriétés (liste vide au départ)
// et une fonction `setProperties` pour mettre à jour cette liste
  const [properties, setProperties] = useState([]);

  //  useEffect exécute du code au montage du composant (une seule fois)
  useEffect(() => { //
    fetch('http://localhost:8080/api/properties') // Récupère les propriétés depuis l'API
      .then(response => response.json()) // Transforme la réponse en JSON
      .then(data => setProperties(data)) // Met à jour la liste des propriétés avec les données reçues
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <BannerHome />
      <div className="properties-wrapper">
        <div className="cards-container">
          {properties.map(property => (
            <Card 
              key={property.id} 
              title={property.title}
              cover={property.pictures[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
