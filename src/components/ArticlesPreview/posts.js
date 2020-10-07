import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {useContentfulData} from '../../utils/client'
import BasicPagination from './BasicPagination';


 function Posts() {
    const [articles, setArticles] = useContentfulData('general')
    const [page,setPage]=useState(1)
    const [pages,setPages]=useState(1)
    
    
    useEffect(()=>{
        const consultAPI = () => {
            
      
            const imgperPage = 3;
            
            Object.size = function(obj) {
                var size = 0, key;
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) size++;
                }
                return size;
            };
            
            // Get the size of an object
            var size = Object.size(articles.items);
           console.log(size)
            //calcular l total de pags
            const calculatePages =  Math.ceil(size/ imgperPage)
            
            setPages(calculatePages)
            
      
      
          }
          consultAPI()
    },[page,articles])
    
    const previousPage = () => {
        const actualPage = page -1;
        if(actualPage === 0) return
        setPage(actualPage)
        
      }
    
      const nextPage = () =>{
        const actualPage = page +1;
        if(actualPage> pages)return
        setPage(actualPage)
      }
    
    
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
                    
                    <img src={article.fields.image.fields.file.url} style={{width: '739px', height: '317px'}} alt={`${article.fields.title} 2020`}></img>
                    <h1 className='post-title'> {article.fields.title}</h1>
                   <div className='author'><p className='post-author-indicator'>Por:</p> Rita Jaime</div>
                    <p className='post-slug'>{article.fields.slug}</p>
                    <Link className='post-link' to={'/post/'+ article.sys.id} >Seguir Leyendo</Link>
            </div>
                   )
                })}
                {(page === 1)? null : (<button
                                type='button'
                                onClick={previousPage}
                            >Previous &laquo;</button>)}
      {(page === pages)? null : (                      
      <button
        type='button'
        onClick={nextPage}
      >Next &raquo;</button>)}
            <BasicPagination></BasicPagination>
            </div>
        </div>
    )
}

export default Posts 


