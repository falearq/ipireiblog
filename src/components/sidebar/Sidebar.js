import React from 'react';
import {Link} from 'react-router-dom'
import FacebookWidget from './FacebookWidget'
const Enproceso = () => {
  

    return ( <div className='sidebar'>
        <div className='sidebar-content'>
            <div  className='sidebar-title'><h2>Temas de Interés</h2></div>
            <ul>
                <Link className='sidebar-link' to='/notirei'><div className='sidebar-section'><i className='fas fa-newspaper sidebar-icon'></i><li>Notirei</li></div></Link>
                <hr className='sidebar-division'></hr>
                <Link className='sidebar-link'><div className='sidebar-section'><i className='fas fa-brain sidebar-icon'></i><li>SALUD MENTAL
Y HABILIDADES PARA LA VIDA</li></div></Link>
                <hr className='sidebar-division'></hr>
                <Link className='sidebar-link'><div className='sidebar-section'><i className='fas fa-calendar-alt sidebar-icon'></i><li>Próximos eventos</li></div></Link>
                <hr className='sidebar-division'></hr>
            </ul>
            <FacebookWidget /> 
        </div>

        
         </div> );
}
 
export default Enproceso;