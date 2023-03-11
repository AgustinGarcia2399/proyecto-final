import React from 'react';
import CardComponent from '../../components/CardComponent';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebaseConfig';
import {collection, query, where, getDocs, documentId} from "firebase/firestore"

const Gorras = () => {

    const[clothes,setClothes] = useState([]);
    let {id} = useParams();


    useEffect(()=>{
        const getClothes = async ()=>{
            const q = query(collection(db, "clothes"),where("categoria","==","gorras"));
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
            <h1>GORRAS</h1>
            <p>Items: {clothes.length}</p>
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
            <footer>
                <p>Métodos de Pago</p>
                <img src='https://www.clipartmax.com/png/small/184-1848156_medios-de-pago-medios-de-pago.png' alt='metodos de pago'/>
                <p>© 2023 - The Wolf - Todos los derechos reservados - Todas las marcas son propiedad de su respectivo dueño</p>
            </footer>
        </div>
    )
}

export default Gorras;