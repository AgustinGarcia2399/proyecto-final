import React from 'react';
import CardComponent from '../../components/CardComponent';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebaseConfig';
import {collection, query, where, getDocs} from "firebase/firestore"

const Calzado = () => {

    const[clothes,setClothes] = useState([]);
    let {id} = useParams();


    useEffect(()=>{
        const getClothes = async ()=>{
            const q = query(collection(db, "clothes"),where("categoria","==","calzado"));
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
            <h1>CALZADOS</h1>
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
        </div>
    )
}

export default Calzado;