import { findByLabelText } from '@testing-library/react';
import React from 'react';

import {ReactComponent as Google} from '../../images/googleicon.svg'
import {ReactComponent as Facebook} from '../../images/facebookicon.svg'
import {ReactComponent as Twitter} from '../../images/twittericon.svg'
import {ReactComponent as Instagram} from '../../images/instagramicon.svg'
const Footers = () => {
    return ( 
                <div className='footer'>
                    <div className='socialmedia-bar'><a href='https://google.com'><Google/></a><Facebook/><Twitter/><Instagram/></div>
                   <p className='footer-title'> © Instituto Panamericano de Investigación para las Relaciones Exitosas e Inteligentes, A.C.</p>
                   <p className='footer-subtitle'>Cuenca 48 Colonia Álamos CP 03400 Benito Juárez, CDMX.</p>
                </div> 
    );
}
 
export default Footers;