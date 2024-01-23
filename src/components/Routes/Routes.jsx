import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../../Pages/About';
import Errors from '../../Pages/Erreurs';
import Home from '../../Pages/Home';
import Logements from '../../Pages/Logements';

const IndexRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Logements/:id" element={<Logements />} />
                <Route path="*" element={<Errors />} />
            </Routes>
        </BrowserRouter>
    );
}

export default IndexRoutes;
