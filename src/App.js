import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';



//PAGES

import Remeras from './pages/Remeras/remeras.js';
import Home from './pages/Home/home.js';
import Calzado from './pages/Calzado/calzado';
import Pantalones from './pages/Pantalones/pantalones';
import Gorras from './pages/Gorras/gorras';
import CharacterDetail from './pages/CharacterDetail/characterdetail';
import Cart from './pages/Cart/cart';

const App = () => {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar carrito={<CartWidget/>}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/remeras" element={<Remeras/>}/>
          <Route path="/pantalones" element={<Pantalones/>}/>
          <Route path="/calzado" element={<Calzado/>}/>
          <Route path="/gorras" element={<Gorras/>}/>
          <Route path="/carro" element={<Cart/>}/>
          <Route path="/detail/:id" element={<CharacterDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
