import React from 'react';
import Image from '../../images/mision.png'

const Mision = () => {
    return ( 
        <div className='section-mision-vision'>
            <div className='mv-text-container'>
            <div className='mision'>
                <h1 className='mv-title'>Misión</h1>
                <p>Somos un instituto de investigación, desarrollo e implementación de estrategias de prevención, contención, corrección y desarrollo de competencias y habilidades para la vida en los campos de salud mental, educación y prevención del delito, que promueve la evolución de las culturas actuales para trascenderlas en Bio-Psico Social Mente Responsables, con un método sistemático y estratégico propio, a través del bienestar y la integración del individuo y de las organizaciones de la sociedad. Poniendo énfasis en la atención de padres, adolescentes, niños y niñas como plataforma de sustento para la transformación cultural. Armonizados a la Agenda 2030.</p>
            </div>
            <div className='vision'>
            <h1 className='mv-title'>Visión</h1>
                <p>Ser un referente en la sociedad para la proposición de soluciones innovadoras en el campo de Salud Mental y Habilidades para la Vida, Educación y Prevención del Delito promoviendo congresos, coloquios, seminarios, diplomados, cursos, talleres, clínicas, publicaciones, programas y campañas, así como colaboraciones al nivel nacional e internacional para la transformación de las culturas del mundo.

Así como una organización amigable con los individuos y la sociedad en general, particularmente con los jóvenes.



</p>
            </div>
            </div>
            <img className='mv-imagen' src={Image}></img>
        </div>
     );
}
 
export default Mision;