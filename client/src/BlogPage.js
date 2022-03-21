import {React} from 'react';
import NavBar from './NavBar';

 function BlogPage ({title, blogList}){

    return(
        <div className="blogPage fullpage backGround">
            <h1 className='title'>{title}</h1>
            <NavBar />
            <div className='textSpace'>

            <div className="blogs">
            <a href="https://dev.to/robinlashae1/react-components-e2g" >
                <h2 className='blogTitle'>React: Componenets</h2>    
            </a>
            <h3 className='blogPreview'>When first learning React, a key concept you\'ll encounter are components. These are essentially building blocks for your app. They help to make your code “dry”, dynamic and are an essential part of what developers like to call SOC...</h3>
            </div>

            <div className="blogs">
            <a href="https://dev.to/robinlashae1/a-basic-guide-to-active-record-commands-doh" >
                <h2 className='blogTitle'>A Basic guide to Active Record Commands</h2>    
            </a>
            <h3 className='blogPreview'>When transitioning to Ruby\'s active record, the commands can be a little long winded and tedious. Here i have provided a cheat sheet to basic AR commands...</h3>
            </div>

            <div className="blogs">
            <a href="https://dev.to/robinlashae1/renaming-a-rails-app-3fg0" >
                <h2 className='blogTitle'>Renaming a Rails app</h2>    
            </a>
            <h3 className='blogPreview'>Have you ever began a project without having a solid name picked out? I'm sure all of us have at least once. This is completely ok, we shouldn't just let inspiration fade because we can't think of a application name. Once an appropriate name...</h3>
            </div>

            <div className="blogs">
            <a href="https://dev.to/robinlashae1/instance-vs-class-1lp9">
                <h2 className='blogTitle'>Instance Vs. Class</h2>    
            </a>
            <h3 className='blogPreview'>On introduction, the idea of instances and classes can seem overwhelming. However, they are actually quite simple concepts to understand over time. Let’s take a step back, and look at them in another light...</h3>
            </div>
            </div>
        </div>
    )

};
export default BlogPage