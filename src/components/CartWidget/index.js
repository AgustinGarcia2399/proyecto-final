import React from 'react';
import './styles.css';
import './carrito.png';
import { useSelector } from 'react-redux';

const CartWidget = () => {

    const items = useSelector((state) => state.items.item);

    return(
        
        <div id="compra">
            <div className='carro'>
                <div id='cart'/>
               {items}
            </div>
        </div>
    )
}


export default CartWidget;