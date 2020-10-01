import React, {Fragment} from 'react';

const Post = (post) => {
    console.log(post)
   
    return (
        <Fragment> 
    <h1> {post.post.title}</h1>
    <img src={post.post.image.fields.file.url} style={{width: '100px', height: '100px'}} alt={`${post.post.title} 2020`}></img>
    <p>{post.post.post.content[0].content[0].value}</p>
    </Fragment>
     );
}
 
export default Post;