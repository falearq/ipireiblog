import React from 'react'
import { Link } from 'react-router-dom';
import {useContentfulData} from '../../utils/client'


 function Posts() {
    const [articles, setArticles] = useContentfulData('general')
    console.log(articles)
    if(setArticles){
        return( 
        
        <h1>Cargando...</h1>
            )
    }

    return (
        <div>
            <div>
            {articles.items.map(article =>{
                   return(
                       <>
                         <div className='post-container'>
                    <h1> {article.fields.title}</h1>
                    <img src={article.fields.image.fields.file.url} style={{width: '100px', height: '100px'}} alt={`${article.fields.title} 2020`}></img>
                    <p>{article.fields.slug}</p>
                    <Link to={'/post/'+ article.sys.id} >Ver más</Link>
            </div>
                       
                        </>
                   )
                })}
            </div>
        </div>
    )
}

export default Posts 


