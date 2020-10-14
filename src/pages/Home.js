import React,{Fragment} from 'react';
import ArticlesPreview from '../components/ArticlesPreview'
import Landing from '../components/Landing'
const Home = () => {
    return (
        <div className='load-trans'>
           
             <Landing />
             <ArticlesPreview /> 
         
        </div>
      );
}
 
export default Home;