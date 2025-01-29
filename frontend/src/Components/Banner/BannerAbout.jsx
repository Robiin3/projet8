import React from 'react';
import './BannerAbout.css';
import BannerImg from '../../assets/Banner-about.png';

function BannerAbout() {
    return (
        <div className="banner-about">
            <img src={BannerImg} alt="Banner about" className="banner-about-img" />
        </div>
    );
}

export default BannerAbout;
