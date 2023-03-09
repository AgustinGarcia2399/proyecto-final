import React from 'react';
import CardComponent from '../../components/CardComponent';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import { db } from '../../firebase/firebaseConfig';
import {collection, query, where, getDocs, documentId} from "firebase/firestore"

const Remeras = () => {

    const[clothes,setClothes] = useState([]);
    let {id} = useParams();

    console.log(id)

    useEffect(()=>{
        const getClothes = async ()=>{
            const q = query(collection(db, "clothes"),where("categoria","==","remeras"));
            const querySnapshot = await getDocs(q);
            const docs=[];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id: doc.id})
            });
            setClothes(docs);
        };
        getClothes();
    },[id])

    console.log(clothes)

    return(
        <div>
            <h1>REMERAS</h1>
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

export default Remeras;