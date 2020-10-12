import React,{Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {useContentfulData} from '../../utils/client'
import BasicPagination from './BasicPagination';


 function Posts() {
    const [articles, setArticles] = useContentfulData('general')
  
    
    useEffect(()=>{
        const consultAPI = () => {
            
            
      
      
          }
          consultAPI()
    },[articles])
    

    
    
    if(setArticles){
        return( 
        
        <h1>Cargando...</h1>
            )
    }

    return (
        <Fragment>
            <div className='posts-container'>
            {articles.items.map(article =>{
                   return(
                         <div key={article.fields.id} className='post-container'>
                        <div className='image-container'>
                         <img className='image'src={article.fields.image.fields.file.url} alt={`${article.fields.title} 2020`}></img>
                        </div>
                        <h1 className='post-title'> {article.fields.title}</h1>
                        <div className='author'><p className='post-author-indicator'>Por </p> {article.fields.author} <p className='post-date'>{article.fields.date}</p></div>
                        <p className='post-slug'>{article.fields.slug}</p>
                        <Link className='post-link' to={'/post/'+ article.sys.id} >Seguir Leyendo</Link>
                        </div>
                   )
                })}
                
            <BasicPagination></BasicPagination>
            </div>
        </Fragment>
    )
}

export default Posts 


