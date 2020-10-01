import React, {useState, useEffect} from 'react'
import { client } from '../../utils/client'
import Posts from './posts'

function ArticlePreview () {
    const [articles, setArticles] = useState([])

  useEffect(() => {
    client.getEntries()
    .then( (res) =>{
      setArticles(res.items)      
    })
    .catch(err => console.log(err))
  }, [])
    return(
        <div>
            <h1>ARTICLE PREV</h1>

            <Posts articles={articles}/> 
        </div>
    )
}

export default ArticlePreview