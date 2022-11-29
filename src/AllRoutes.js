import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import AboutUs from './pages/A-propos/A-propos';
import HomeDetails from './pages/Fiche-logement/Fiche-logement';
import Error404 from './pages/404/404';

export const AllRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<AboutUs />} />   
        <Route path="/fiche-logement/:id" element={<HomeDetails />} />  
        <Route path="*" element={<Error404 />} /> 
    </Routes>
    )
}