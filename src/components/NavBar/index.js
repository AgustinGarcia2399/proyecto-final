import React from 'react';
import './styles.css';
import logo from './logomarca.png'
import { NavLink } from 'react-router-dom';

const NavBar = ({carrito}) => {
    return(
        <div id='navBar'>
            <div id='logo'>
                <NavLink to="/">
                <img src={logo} alt='logo'/>
                <p>The Wolf</p>
                </NavLink>
            </div>
            <div id="categorias">
                <ul className='filter'>
                    <li><NavLink to="/remeras">REMERAS</NavLink></li>
                    <li><NavLink to="/pantalones">PANTALONES</NavLink></li>
                    <li><NavLink to="/calzado" >CALZADOS</NavLink></li>
                    <li><NavLink to="/gorras">GORRAS</NavLink></li>
                </ul>
            </div>
            {carrito}
        </div>
    )
}
export default NavBar;
