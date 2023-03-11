import React from 'react';
import ItemListCointainer from '../../components/ItemListContainer';



const Home = ({onClick}) => {

    return(
        <div>
            <ItemListCointainer titulo={'The Wolf!'}/>
            
            <footer>
                <p>Métodos de Pago</p>
                <img src='https://www.clipartmax.com/png/small/184-1848156_medios-de-pago-medios-de-pago.png' alt='metodos de pago'/>
                <p>© 2023 - The Wolf - Todos los derechos reservados - Todas las marcas son propiedad de su respectivo dueño</p>
            </footer>
        </div>
        
    )
}

export default Home;