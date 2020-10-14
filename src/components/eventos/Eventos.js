import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {useContentfulDataMulti} from '../../utils/client'
import BasicPagination from '../ArticlesPreview/BasicPagination';
import EventosHeader from './EventosHeader'



 function Eventos() {
    const [articles, setArticles] = useContentfulDataMulti('general')
  
    // go back to last page 
    let history = useHistory();

    const goBack = () => {
        history.goBack();
      };

   
    
    if(setArticles){
        return( 
            <div className='load-trans'>
             <EventosHeader /> 
            <div className='loader'>
                <h1>Cargando...</h1>
            </div>
        </div>
            
            )
    }

    return (
        <div className='load-trans'>
            <EventosHeader /> 
            <div className='multi-content-container'>
            <div className='multi-posts-container'>
            {articles.items.map(article =>{
                   return(
                    <Link className='multi-post-container' to={'/post/'+ article.sys.id} >  
                         <div key={article.fields.id}>       
                    <div className='multi-post-image'>
                    <img src={article.fields.image.fields.file.url} className='image-width' alt={`${article.fields.title} 2020`}></img>
                    </div>
                    <h1 className='post-title'> {article.fields.title}</h1>
                   <div className='multi-date'>{article.fields.date}</div>
            </div>
            </Link>
                   )
                })}
                </div>
            <BasicPagination></BasicPagination>
            <div className='multi-back-link-container'><Link className='multi-back-link' onClick={goBack}>← Volver a la página principal</Link></div>
            </div>
            
        </div>
    )
}

export default Eventos 