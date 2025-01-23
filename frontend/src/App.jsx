import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Location1 from './pages/Location1/Location1';
import Error from './pages/Error/Error';


import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/location1" element={<Location1 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
