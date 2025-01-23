import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Location1 from './pages/Location1/Location1';
import Error from './pages/Error/Error';


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
<header id="header"> <Link to="/page2"> Accueil </Link> <Link to="/page1"> A propos </Link> </header>
<p><Link to="/Location1"> Location1 </Link> </p>

        {/* Routes */}
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/location1" element={<Location1 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
