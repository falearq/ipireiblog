import React from 'react';
import enconstruccion from '../images/en-construccion.png'
import { useHistory, Link } from "react-router-dom";
const Enconstruccion = () => {
       // go back to last page 
       let history = useHistory();

       const goBack = () => {
           history.goBack();
         };
   
    return ( 
        <div className='enconstruccion-container'>
            <img className='enconstruccion-img' src={enconstruccion} alt='En Construcción'></img>
            <div className='enconstruccion-text-container'>
            <h1>Seccion en construcción</h1>
            <h2>Disculpe las molestias</h2>
            <div className='enconstruccion-back-link-container'><Link className='multi-back-link' onClick={goBack}>← Volver a la página principal</Link></div>
            </div>
        </div>
     );
}
 
export default Enconstruccion;