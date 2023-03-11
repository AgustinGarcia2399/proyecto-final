import React from 'react';
import './styles.css';
import './carrito.png';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {

    const items = useSelector((state) => state.items.cartItem);

    return(
        
        <div id="compra">
            <div className='carro'>
            <NavLink to="/carro">
                <div id='cart'/>
            </NavLink>
                {items.length}
                </div>
            
        </div>
    )
}


export default CartWidget;