import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../../rexud/features/item';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Modals from '../../components/Modals';
import { activar } from '../../rexud/features/modal';
import './styles.css';

const Cart = () => {
    const anadidos = useSelector((state) => state.items.cartItem);
    const dispatch = useDispatch();
    let i = 0;
    
    const [vacia,setVacia]= useState(false);
    const [refresh, setRefresh] = useState(0);


    useEffect(()=>{
        if(anadidos.length===0){
            setVacia(true)
        }
    },[refresh])

    if(!vacia){
    return(
        <div>
            <h1>Tienda</h1>
            <table>
            <tbody>
                <tr className='tabTitulos'>
                    <th>Imagenes</th>
                    <th>Titulo</th>
                    <th>Cantidad</th>
                </tr>
                    {anadidos.map((elem)=>{
                            i=i+1;
                        return(
                        <tr key={elem.id}>
                            <td><img src={elem.img} alt="elemento"></img></td>
                            <td>{elem.titulo}</td>
                            <td>{elem.cartQuantity}</td>
                            <td><button onClick={()=>{
                                dispatch(removeFromCart(elem));
                                    setRefresh(x=>x+1)
                                }}>X</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            <div className='botonesF_container'>
                <button className='vaciarC' onClick={()=>{dispatch(clearCart())
                setVacia(true)}}>Vaciar carrito</button>
                <NavLink to="/"><button>Seguir comprando</button></NavLink>
                <button className='finalizarC' onClick={()=>dispatch(activar())}>Finalizar compra</button>
                <Modals/>
            </div>
        </div>
    )
    }else{
        return(
            <p className='noItems'> El canasto esta vacio  </p>
        )
    }
}

export default Cart;