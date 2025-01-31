import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import './Home.css';
import BannerImg from '../../assets/Banner-home.png';

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
      <Banner title="Chez vous, partout et ailleurs" image={BannerImg} />
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
