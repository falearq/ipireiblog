import React from 'react'
import { Link } from 'react-router-dom';
import {useContentfulData} from '../../utils/client'
import BasicPagination from '../ArticlesPreview/BasicPagination';


 function Notirei() {
    const [articles, setArticles] = useContentfulData('notirei')
  
    
    console.log(articles)
   
    
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
                    <div className='image-container'>
                    <img src={article.fields.image.fields.file.url} style={{ }} alt={`${article.fields.title} 2020`}></img>
                    </div>
                    <h1 className='post-title'> {article.fields.title}</h1>
                   <div className='author'><p className='post-author-indicator'>Por:</p> Rita Jaime</div>
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

export default Notirei 