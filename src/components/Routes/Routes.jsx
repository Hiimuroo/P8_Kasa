import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../../Pages/AboutPage.js';
import Errors from '../../Pages/ErreursPage.js';
import Home from '../../Pages/HomePage.js';
import Logements from '../../Pages/LogementsPage.js';

const IndexRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Logements/:id" element={<Logements />} />
                <Route path="*" element={<Errors />} />
            </Routes>
        </BrowserRouter>
    );
}

export default IndexRoutes;
