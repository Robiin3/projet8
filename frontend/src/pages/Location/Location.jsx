import React from 'react';
import { Link } from 'react-router-dom';


const Location1 = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/page2">Accueil</Link>
            </li>
          </ul>
        </nav>
      <h1>Location1</h1>
    </div>
  );
};

export default Location1;
