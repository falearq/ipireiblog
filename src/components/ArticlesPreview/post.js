import React, {Fragment} from 'react';
import {useOneContentfulData} from '../../utils/client'
import {useParams} from 'react-router-dom'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Sidebar from '../sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import fb from '../../images/postfbicon.png'
import tw from '../../images/posttwittericon.png'
import Lin from '../../images/postlinkedinicon.png'
import { Link } from 'react-router-dom';
import { FacebookShareButton,
        TwitterShareButton,
        LinkedinShareButton } from 'react-share'

const Post = () => {
    const id = useParams()
    const [post,setPost] = useOneContentfulData(id)
    const location = useLocation();

    if(setPost){
        return(
            <div className='content-container'>
            <Sidebar/>    
            <h1>Cargando..</h1>     
            </div>
        )
    }
    
    const makeHTML = datos => documentToHtmlString(datos)
    return (
        <div className='content-container'>
            <Sidebar/>  
            <div className='posts-container'>
            <div className='post'>
               
               <div className='image-container'>
               <img src={post.fields.image.fields.file.url} alt={`${post.fields.title} 2020`}></img>
               </div>
               <h1 className='post-title'>{post.fields.title}</h1>
               <div className='author'><p className='post-author-indicator'>Por </p> {post.fields.author}<p className='post-date'>{post.fields.date}</p></div>
            <div  className='post-content'
            dangerouslySetInnerHTML={{__html:makeHTML(post.fields.content)}}></div>
            </div>
            <div className='post-footer'>
                <p>Comparte este artículo:</p>
                <div className='post-icon-container'>
                <FacebookShareButton url='https://soundcloud.com/dominicloretti'><img src={fb} alt='Facebook'></img></FacebookShareButton>
                <TwitterShareButton><img src={tw} alt='Twitter' ></img></TwitterShareButton>
                <LinkedinShareButton><img src={Lin} alt='LikedIn'></img></LinkedinShareButton>
                </div>
            
            </div>
            <Link className='post-back-link'>← Volver a la página principal</Link>
            </div> 
    </div>
     );
}
 
export default Post;