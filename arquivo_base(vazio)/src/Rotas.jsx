import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Páginas/Home';
import About from './Páginas/About';
import FAQ from './Páginas/FAQ';
import Shirts from './Páginas/Shirts';
import Moletons from './Páginas/Hoodies';
import Hats from './Páginas/Hats';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/moletons" element={<Moletons />} />
        <Route path="/hats" element={<Hats />} />
      </Routes>
    </BrowserRouter>
  )
}
