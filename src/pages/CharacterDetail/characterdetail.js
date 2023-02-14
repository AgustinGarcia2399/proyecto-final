import React from 'react';
import CardComponent from '../../components/CardComponent';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';



const CharacterDetail = () => {
    const [user,setUser] = useState({});

    let {id} = useParams();


    useEffect(()=>{
        fetch('https://api.github.com/users/' + id)
            .then((response)=>response.json())
            .then((json)=> setUser(json))
      },[id]) 

    return(
        <div id='fondo'>
            <CardComponent users={user}/>
        </div>
    )
}

export default CharacterDetail;