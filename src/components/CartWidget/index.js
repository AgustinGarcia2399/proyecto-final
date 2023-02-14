import React from 'react';
import './styles.css';
import './carrito.png';

const CartWidget = () => {
    return(
        <div id="compra">
            <ul>
            <li className='carro'><div id='cart'></div></li>
            <li className='carro' id='cantidad'>0</li>
            </ul>
        </div>

    )
}


export default CartWidget;