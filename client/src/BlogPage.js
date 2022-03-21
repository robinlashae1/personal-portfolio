import {React} from 'react';
import NavBar from './NavBar';

 function BlogPage ({title, blogList}){

    return(
        <div className="blogPage fullpage backGround">
            <h1 className='title'>{title}</h1>
            <NavBar />
            <div className='textSpace'>
            {blogList.map(blog=>(
            <div className="blogs">
            <a href={blog.url} key={blog.id}>
                <h2 className='blogTitle'>{blog.title}</h2>    
            </a>
            <h3 className='blogPreview'>{blog.preview}</h3>
            </div>
            ))}
            </div>
        </div>
    )

};
export default BlogPage