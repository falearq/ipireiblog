import React from 'react'
import { Link } from 'react-router-dom';
import {useContentfulData} from '../../utils/client'
import BasicPagination from '../ArticlesPreview/BasicPagination';


 function Encuestas() {
    const [articles, setArticles] = useContentfulData('hablemosde')
  
    
    
   
    
    if(setArticles){
        return( 
        
        <h1>Cargando...</h1>
            )
    }

    return (
        <div>
            <div className='posts-container'>
            {articles.items.map(article =>{
                   return(
                         <div key={article.fields.id} className='post-container'>
                    
                  
                    <h1 className='post-title'> {article.fields.title}</h1>
                   <div className='author'><p className='post-author-indicator'>Por:</p> {article.fields.author}</div>
                    <p className='post-slug'>{article.fields.slug}</p>
                    <Link className='post-link' to={'/post/'+ article.sys.id} >Seguir Leyendo</Link>
            </div>
                   )
                })}
            <BasicPagination></BasicPagination>
            </div>
        </div>
    )
}

export default Encuestas 