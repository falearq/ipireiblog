import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import {useContentfulDataMulti} from '../../utils/client'
import BasicPagination from '../ArticlesPreview/BasicPagination';
import HeaderNotirei from '../../images/header-notirei.png'

 function Notirei() {
    const [articles, setArticles] = useContentfulDataMulti('notirei')
  
    
    console.log(articles)
   
    
    if(setArticles){
        return( 
            <Fragment>
            <div className='notirei-header'><img src={HeaderNotirei} alt='Notirei'></img></div>
        <h1>Cargando...</h1>
        </Fragment>
            
            )
    }

    return (
        <div>
            <div className='notirei-header'><img src={HeaderNotirei} alt='Notirei'></img></div>
            <div className='multi-content-container'>
            <div className='multi-posts-container'>
            {articles.items.map(article =>{
                   return(
                    <Link className='multi-post-container' to={'/post/'+ article.sys.id} >  
                         <div key={article.fields.id}>       
                    <div className='multi-post-image'>
                    <img src={article.fields.image.fields.file.url} style={{ }} alt={`${article.fields.title} 2020`}></img>
                    </div>
                    <h1 className='post-title'> {article.fields.title}</h1>
                   <div className='multi-date'>{article.fields.date}</div>
            </div>
            </Link>
                   )
                })}
                </div>
            <BasicPagination></BasicPagination>
            </div>
        </div>
    )
}

export default Notirei 