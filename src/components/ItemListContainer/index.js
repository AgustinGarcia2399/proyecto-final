import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import CardComponent from '../CardComponent';
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebaseConfig';
import {collection, query, where, getDocs} from "firebase/firestore"


const ItemListCointainer = ({titulo}) =>{

    const[clothes,setClothes] = useState([]);


    const [hola,setHola] = useState(true);
    const [prendido,setPrendido] = useState(true);



    useEffect(()=>{
        const getClothes = async ()=>{
            const q = query(collection(db, "clothes"));
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id: doc.id })
            });
            setClothes(docs);
        };
        getClothes();
    },[])

        return(
            <>  
                <h1>{titulo}</h1>
                <p>Items: {clothes.length}</p>
                <div id={prendido?"prend":"apag"}>{ hola ?"Hola Mundo":"Chau Mundo"}</div>
                <button onClick={()=>setHola(!hola)}>Cambiar saludo</button>
                <button onClick={()=>setPrendido(!prendido)}>Cambiar estilo</button>
                
                <div id='listContainer'>
                        {clothes.map((cloth)=>{
                            return (
                                <div key={cloth.id}>
                                    <Link to={'/detail/' + cloth.id}>
                                        <div className="objeto">
                                            <CardComponent clothes={cloth}/>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                </div>
            </>
    )
}

export default ItemListCointainer