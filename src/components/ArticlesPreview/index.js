import React, {useState, useEffect} from 'react'
import { client } from '../../utils/client'
import Posts from './posts'
import Sidebar from '../sidebar/Sidebar'
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
        <div className='content-container'>
            <Sidebar/>
            <Posts/> 
        </div>
    )
}

export default ArticlePreview