import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { desactivar } from '../../rexud/features/modal';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig';

const initialState = {
    nombre:"",
    telefono:"",
    email:"",
};

const Modals = () => {
    const dispatch = useDispatch();
    const modal = useSelector((state) => state.startModal.modal);
    const [orden,setOrden] = useState(false);

    const[values,setValues]=useState(initialState);
    const[purchaseID,setPurchaseID] = useState("");

    const handleOnChange=(e)=>{
        const{value,name} = e.target;
        setValues({ ...values,[name]: value})
    }

    const handleOnSubmit= async (e)=>{
        e.preventDefault();
        const docRef = await addDoc(collection(db, "compras"), {
           values
          });
          setPurchaseID(docRef.id);
          setValues(initialState);
    }

    return(
        <div className={modal?'modal-open':'modal-close'}>
            <div className='modal_container'>
                <h2>Formulario de Compra</h2>
                <form onSubmit={handleOnSubmit}>
                    <label for="nombre">Nombre:</label>
                    <input type='text' id='nombre' name='nombre' placeholder='Nombre y Apellido' value={values.nombre} onChange={handleOnChange}></input>
                    <label for="telefono">Telefono:</label>
                    <input type='text' id='telefono' name='telefono' placeholder='Telefono' value={values.telefono} onChange={handleOnChange}></input>
                    <label for="email">Email:</label>
                    <input type='text' id='email' name='email' placeholder='@email' value={values.email} onChange={handleOnChange}></input>
                    <button type='submit'className='genOrden' onClick={()=>{setOrden(true)}}>Generar Orden</button>
                    <p className={orden?'ordenG':'ordenNoG'}>Orden generada con exito. ID: {purchaseID}</p>
                    <button onClick={()=>{dispatch(desactivar())}}>Cerrar</button>
                </form>
            </div>
        </div>
    )

    
}

export default Modals;