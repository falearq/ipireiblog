import React,{Fragment} from 'react';
import ArticlesPreview from '../components/ArticlesPreview'
import Landing from '../components/Landing'
const Home = () => {
    return (
        <Fragment>
           
             <Landing />
             <ArticlesPreview /> 
         
        </Fragment>
      );
}
 
export default Home;