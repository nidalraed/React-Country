import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Cities from './Cities';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Cities selectedCountry={selectedCountry} />
      <Footer />
    </div>
  );
}

export default App;
