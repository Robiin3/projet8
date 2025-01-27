import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/header';
import BannerHome from '../../Components/Banner/BannerHome';
import Card from '../../Components/Card/Card';
import './Home.css';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
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
