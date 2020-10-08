import React,{Fragment} from 'react'
import Navbar from '../components/Navbar/Navbar'
import  Footer from '../components/footer/footer'
import Mision from '../components/Mvv/Mision';
import Valores from '../components/Mvv/Valores';

const Agenda2030 = () => {
    return ( 
        <Fragment>
            <Navbar/> 
            <Mision/>
            <Valores/>
            <Footer/>
        </Fragment>
     );
}
 
export default Agenda2030;