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
                <p id='wolf'>The Wolf</p>
                </NavLink>
            </div>
            <div  id="categorias">
                <ul>
                    <li className='categoria'><NavLink to="/remeras">REMERAS</NavLink></li>
                    <li className='categoria'><NavLink to="/pantalones">PANTALONES</NavLink></li>
                    <li className='categoria'><NavLink to="/zapatos">ZAPATOS</NavLink></li>
                    <li className='categoria'><NavLink to="/sombreros">SOMBREROS</NavLink></li>
                </ul>
            </div>
            {carrito}
        </div>
    )
}
export default NavBar;
