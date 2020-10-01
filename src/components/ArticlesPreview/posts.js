import React from 'react'
import Post from './post'

 function Posts({ articles }) {

    console.log('hola', articles)
    return (
        <div>
            <div>
                {articles.map((article) =>{
                   return(
                       <Post post={article.fields} key={article.fields.id}/> 
                   )
                })}
            </div>
        </div>
    )
}

export default Posts 


