import React from 'react';
import './Footer.css';
import FooterLogo from '../../assets/Logo-footer.png';

function Footer() {
    return (
        <footer>
            <img src={FooterLogo} alt="Logo Footer" className="footer-logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
