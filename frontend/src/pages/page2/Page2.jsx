import React from 'react';
import { Link } from 'react-router-dom';


const Page2 = () => {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
          </ul>
        </nav>
      <h1>Page 2</h1>
    </div>
  );
};

export default Page2;
