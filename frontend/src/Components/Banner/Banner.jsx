import React from 'react';
import './Banner.css';

function Banner({ title, image }) {
    return (
        <div className="banner">
            <img src={image} alt="Banner" className="banner-img" />
            {title && <h1 className="banner-text">{title}</h1>}
        </div>
    );
}

export default Banner;
