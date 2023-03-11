import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { increment,decrement,clear } from '../../rexud/features/counter';
import { add } from '../../rexud/features/item';
import { useSelector,useDispatch } from 'react-redux';
import { db } from '../../firebase/firebaseConfig';
import {collection, query, where, getDocs, documentId} from "firebase/firestore"
import './styles.css';

const CharacterDetail = () => {

    const[clothes,setClothes] = useState([]);
    let {id} = useParams();

    const valor = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();


    useEffect(()=>{
        const getClothes = async ()=>{
            const q = query(collection(db, "clothes"),where(documentId(),"==",id));
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id: doc.id})
            });
            setClothes(docs);
        };
        getClothes();
    },[id])


    return(
        <div>
            {clothes.map((cloth)=>{
                return (
                    <div key={cloth.id}>
                        <h1> {cloth.titulo} </h1>
                        <div className='articulo' >
                            <img src={cloth.img} alt='articulo'/>
                                <div className='data_container'>
                                    <div className='pys_container'>
                                        <p>Precio: US$ {cloth.precio} </p>
                                        <p className='stock'>Stock: {cloth.stock} </p>
                                    </div>
                                    <p>Cantidad:</p>
                                    <div className='botones_container'>
                                        <button className='mas' onClick={()=>{
                                            if(valor < cloth.stock){
                                                dispatch(increment())}
                                            }}>
                                            +</button>
                                        <span>{valor}</span>
                                        <button className='menos' onClick={()=>{
                                            if(valor > 0){
                                                dispatch(decrement())}
                                            }}>-</button>
                                    </div>
                                        <button className='agregar' onClick={()=>{
                                            if(valor > cloth.stock){
                                                alert("Cantidad invalida")
                                            }else{
                                                for(let i=0; i<valor;i++){
                                                    dispatch(add(cloth));
                                                }
                                                dispatch(clear());
                                            }
                                            }}>Agregar al carrito
                                        </button>
                                </div>
                        </div>
                    </div>
                )
    
            })}
        </div>
    )
}

export default CharacterDetail;