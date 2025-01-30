import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Location from './pages/Location/Location';
import Error from './pages/Error/Error';
import Footer from './Components/Footer/Footer';

import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <div className="main-content">
          {/* Navigation */}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
