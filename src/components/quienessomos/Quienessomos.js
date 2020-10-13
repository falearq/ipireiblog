import React from 'react';
import img1 from '../../images/qsbriefimg1.png'
import img2 from '../../images/qsbriefimg2.png'
import img from '../../images/qsimg.png'
import {ReactComponent as Curve} from '../../images/qscurve.svg'
const Quienessomos = () => {
    return ( 
        <div className='section-quienes-somos'>
            <div>
            <div className='qs-header'>
            <div className='qs-small-text'>
                <h1 className='qs-title'>¿Quiénes Somos?</h1>
                <p><b>El Instituto Panamericano de Investigación para las Relaciones Exitosas e Inteligentes, A.C. (IPIREI)</b> nace como producto del trabajo y estudio por más de 20 años de la dinámica bio-socio-cultural en México. Está conformado por un grupo de profesionales expertos en los temas:</p>
            </div>
            <img className='qs-image' src={img}></img>
            <Curve className='qs-curve'></Curve>
            </div>
            
            <div className='qs-brief'>
                <div className='qs-brief-1'>
                     <p><b>El estudio e investigación de la conducta humana</b>, sus relaciones y la dinámica social en un concepto de funcionalidad humanística para permitir que el individuo, a partir de su ndividualidad, se integre a la interacción colectiva de forma saludable.
                    <br></br>
                    <br></br>
                    <b>Fortalecer el desarrollo de habilidades para la vida</b> de los individuos porque atiende a la propuesta de fortalecer y mejorar la vida en sociedad, a partir del concepto del Ser Bio-Psico-Social Mente Responsable.
                    <br></br>
                    <br></br>
                    <b>Capacitar</b> en los ámbitos sociales e institucionales a través de  diplomados, talleres, cursos, clínicas. Programa y Campañas de sensibilización, concientización y prevención en las problemáticas sociales y promover la cohesión social

                    </p>
                    <img src={img1} alt='Quienes Somos 1' className='qs-brief-img'></img>
                </div>
                <div className='qs-brief-2'>
                <img src={img2} alt='Quienes Somos 2' className='qs-brief-img'></img>
                    <p><b>Establecer modelos de transformación</b> en problemáticas sociales e institucionales: acoso laboral, burnout, inclusión, diversidad, violencia, adicciones, bullying, sexo adolescente, suicidio, entre otras.  
                    <br></br>
                    <br></br>
                    <b>Desarrollar e implementar acciones</b> preventivas, de diagnóstico y corrección en salud mental, educación y prevención del delito, con instituciones, docentes, padres de familia, adolescentes.
                    <br></br>
                    <br></br>
                    <b>Proporcionar una asesoría técnica humanística para establecer sistemas y elementos de actuación</b> integrados y orientados a propiciar soluciones de calidad para mejorar el desempeño, la evaluación de oportunidades, la puesta en práctica de cambios y la solución de problemas para alcanzar los objetivos de las personas y las organizaciones.</p>
                </div>
                
                
            </div>
            <div className='qs-padding'></div>
            </div>
            
        </div>
     );
}
 
export default Quienessomos;