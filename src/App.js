import "./App.css";
import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;