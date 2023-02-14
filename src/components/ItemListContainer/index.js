import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import CardComponent from '../CardComponent';
import { Link } from 'react-router-dom';

const ItemListCointainer = ({titulo}) =>{

    const[user, setUser] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users')
            .then((response)=>response.json())
            .then((json)=> setUser(json))
      },[]) 
    
        return(
            <>  
                <h1>{titulo}</h1>
                <div id='listContainer'>
                        {user.map((user)=>{
                            return (
                                <Link to={'/detail/' + user.id}>
                                    <div className="objeto">
                                    <CardComponent users={user} />
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </>   
        
    )
}

export default ItemListCointainer