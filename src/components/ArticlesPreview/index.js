import React from 'react'
import Posts from './posts'
import Sidebar from '../sidebar/Sidebar'
function ArticlePreview () {
    
    return(
        <div className='content-container'>
            <Sidebar/>
            <Posts/> 
        </div>
    )
}

export default ArticlePreview