import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Location from './pages/Location/Location';
import Error from './pages/Error/Error';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route par défaut */}
            <Route path="Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/location/:id" element={<Location />} /> {/* :id est un paramètre dynamique */}
            <Route path="*" element={<Error />} /> {/* attrape toutes les routes non définies */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
