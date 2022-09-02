import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Páginas/Home';
import Battle from './Páginas/Battle Royale';
import Rpg from './Páginas/RPG';
import Moba from './Páginas/MOBA';
import Fps from './Páginas/FPS';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battleroyale" element={<Battle />} />
        <Route path="/rpg" element={<Rpg />} />
        <Route path="/moba" element={<Moba />} />
        <Route path="/fps" element={<Fps />} />
      </Routes>
    </BrowserRouter>
  )
}
