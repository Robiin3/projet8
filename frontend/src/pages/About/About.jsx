import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/header';
import BannerAbout from '../../Components/Banner/BannerAbout';
import './About.css';

const About = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <BannerAbout />
    </div>
  );
};

export default About;
