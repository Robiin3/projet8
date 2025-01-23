import React from 'react';
import { Link } from 'react-router-dom';


const Page1 = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
      <h1>A propos</h1>
    </div>
  );
};

export default Page1;
