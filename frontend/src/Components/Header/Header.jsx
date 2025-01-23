import { Link } from 'react-router-dom';
import './Header.css';


function Header () {
  return (
<div><header id="Header">
    <Link to="/page2"> Accueil </Link>
    <Link to="/page1"> A propos </Link>
</header>
</div>
  );
};

export default Header;
