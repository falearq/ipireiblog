
import React from 'react';

import googleicon from '../../images/googleicon.png'
import facebookicon from '../../images/facebookicon.png'
import twittericon from '../../images/twittericon.png'
import instagramicon from '../../images/instagramicon.png'
const Footers = () => {
    return ( 
                <div className='footer'>
                    <p className='footer-copy'> ¡Síguenos en redes sociales!</p>
                    <div className='socialmedia-bar'>
                    {/* <a href='https://google.com'><img className='socialmedia-icon' alt='Google' src={googleicon}/></a> */}
                    <a href='https://www.facebook.com/IPIREI/'><img className='socialmedia-icon' alt='Facebook' src={facebookicon}/></a>
                    <a href='https://twitter.com/ipirei_exitosasm'><img  className='socialmedia-icon'alt='Twitter' src={twittericon}/></a>
                    <a href='https://www.instagram.com/relacionesexitosas/'><img  className='socialmedia-icon' alt='Instagram' src={instagramicon}/></a>
                        </div>
                   <p className='footer-title'> © Instituto Panamericano de Investigación para las Relaciones Exitosas e Inteligentes, A.C.</p>
                   <p className='footer-subtitle'>Cuenca 48 Colonia Álamos CP 03400 Benito Juárez, CDMX.</p>
                </div> 
    );
}
 
export default Footers;