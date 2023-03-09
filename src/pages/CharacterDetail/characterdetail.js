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
                    <div className='articulo'>
                        <img src={cloth.img} alt='articulo'/>
                        <p>Precio: US$ {cloth.precio} </p>
                        <p>Stock: {cloth.stock} </p>
                        <button onClick={()=>dispatch(increment())}>+</button>
                        <span>{valor}</span>
                        <button onClick={()=>{
                            if(valor > 0){
                                dispatch(decrement())}
                            }}>-</button>
                        <button onClick={()=>{
                            if(valor > cloth.stock){
                                alert("No se puede")
                            }else{
                            dispatch(add(valor));
                            dispatch(clear());
                            }
                            }}>Agregar</button>
                    </div>
                )
    
            })}
        </div>
    )
}

export default CharacterDetail;