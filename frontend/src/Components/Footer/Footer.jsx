import React from 'react';
import './Footer.css';
import FooterLogo from '../../assets/footer-desktop.png';

function Footer() {
    return (
        <footer>
            <img src={FooterLogo} alt="Logo Footer" className="footer-logo" />
        </footer>
    );
}

export default Footer;
