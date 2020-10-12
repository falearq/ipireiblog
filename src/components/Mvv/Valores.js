import React,{Fragment} from 'react';
import {ReactComponent as Curve} from '../../images/valores.svg'
const Valores = () => {
    return ( 
        <Fragment>
        <Curve className='valores-curve'/>
        <div id='valores' className='valores'>
        <div className='valores-col1'>
            <h1 className='valores-title'>Principios</h1>
            <ul>
                <li>Compromiso</li>
                <li>Respeto</li>
                <li>Responsabilidad</li>
                <li>Consideración</li>
                <li>Congruencia</li>
                <li>Confiabilidad</li>
                <li>Auto-Gobernabilidad</li>
            </ul>  
        </div>
        <div className='valores-col2'>
            <h1 className='valores-title'>Valores</h1>
            <ul>
                <li>Solidaridad</li>
                <li>Veracidad</li>
                <li>Confiabilidad</li>
                <li>Resignificación</li>
                <li>Con-pasión</li>
            </ul>  
        </div>
        
        </div>
        </Fragment>
     );
}
 
export default Valores;