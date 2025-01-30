import React from 'react';
import './BannerHome.css';
import BannerImg from '../../assets/Banner-home.png';

function Banner() {
    return (
        <div className="banner-home">
            <img src={BannerImg} alt="Banner home" className="banner-home-img" />
            <h1 className="banner-home-text">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default BannerHome;
