import React, {Fragment} from 'react';
import {useOneContentfulData} from '../../utils/client'
import {useParams} from 'react-router-dom'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
const Post = () => {
    const id = useParams()
    const [post,setPost] = useOneContentfulData(id)
    console.log(post)

    if(setPost){
        return(
            <h1>Cargando..</h1>     
        )
    }

    const makeHTML = datos => documentToHtmlString(datos)
    return (
        <Fragment> 
            <div className='post-container'>
               {post.fields.title}
               <img src={post.fields.image.fields.file.url} alt={`${post.fields.title} 2020`}></img>
            <div 
            dangerouslySetInnerHTML={{__html:makeHTML(post.fields.content)}}></div>
            </div>
    </Fragment>
     );
}
 
export default Post;