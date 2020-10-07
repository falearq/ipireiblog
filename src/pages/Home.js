import React,{Fragment} from 'react';
import ArticlesPreview from '../components/ArticlesPreview'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing'
import  Footer from '../components/footer/footer'
const Home = () => {
    return (
        <Fragment>
             <Navbar/> 
             <Landing />
             <ArticlesPreview /> 
             <Footer/>
        </Fragment>
      );
}
 
export default Home;