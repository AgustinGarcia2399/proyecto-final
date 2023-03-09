import React from 'react';

const styles ={
    btn:{
        backgroundColor:"#ddd",
        width:"100px",
        height:"20px",
        border:"1px solid black"
    }
}


const ButtonAdd = ({onClick}) => {

    return(
        <button style = {styles.btn} onClick={onClick}>Agregar</button>
    )
}

export default ButtonAdd;