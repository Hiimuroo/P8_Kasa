// App.js
import './assets/css/style.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Acceuil/Home/Home';
import About from './components/Acceuil/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;