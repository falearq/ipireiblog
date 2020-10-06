import React,{Fragment} from 'react';
import ArticlesPreview from '../components/ArticlesPreview'
import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing'
const Home = () => {
    return (
        <Fragment>
             <Navbar/> 
             <Landing />
             <ArticlesPreview /> 
        </Fragment>
      );
}
 
export default Home;