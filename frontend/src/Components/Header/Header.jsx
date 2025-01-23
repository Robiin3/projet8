import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/logo.png';

function Header () {
  const location = useLocation();
  return (
    <div>
      <header id="Header" className="header-container">
        <img src={Logo} alt="Logo" className="header-logo" />
        <div className="nav-links">
          <Link to="/Home" className={`header-link ${location.pathname === '/Home' ? 'active' : ''}`}> Accueil </Link>
          <Link to="/About" className={`header-link ${location.pathname === '/About' ? 'active' : ''}`}> A propos </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
