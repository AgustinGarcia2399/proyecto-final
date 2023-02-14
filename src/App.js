import './App.css';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


//PAGES

import Remeras from './pages/Remeras/remeras.js';
import Home from './pages/Home/home.js';
import Zapatos from './pages/Zapatos/zapatos';
import Pantalones from './pages/Pantalones/pantalones';
import Sombreros from './pages/Sombreros/sombreros';
import CharacterDetail from './pages/CharacterDetail/characterdetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar carrito={<CartWidget/>}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/remeras" element={<Remeras/>}/>
          <Route path="/pantalones" element={<Pantalones/>}/>
          <Route path="/zapatos" element={<Zapatos/>}/>
          <Route path="/sombreros" element={<Sombreros/>}/>
          <Route path="/detail/:id" element={<CharacterDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
