import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/header';
import BannerAbout from '../../Components/Banner/BannerAbout';
import Collapse from '../../Components/Collapse/Collapse';
import './About.css';

const About = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <BannerAbout />
      <div className="about-content">
        <Collapse title="Fiabilité">
          <p>Texte</p>
        </Collapse>
        <Collapse title="Respect">
          <p>Texte</p>
        </Collapse>
        <Collapse title="Service">
          <p>Texte</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>Texte</p>
        </Collapse>
      </div>
    </div>
  );
};

export default About;
