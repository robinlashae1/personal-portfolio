import React from 'react';
import NavBar from './NavBar';

 function HomePage (){

    return(
        <div className="homePage fullpage">
            <NavBar/>
            
            <img src='../portfolioImage.png' id="portfolioImage" alt="My Headshot"/>
            <div className='intro'>
            <h3 >Hi, I'm</h3>
            <h1 >Robin Vernon</h1>
            <p  id="introTitle">Fullstack Software Developer</p>
            </div>
            <div id="contact">
                <a href="https://github.com/robinlashae1"className="linkDiv"><i className="bi-github" role="img" aria-label="Check out my GitHub" style={activeStyles}></i></a>
                <a href="https://github.com/robinlashae1"className="linkDiv"><i className="bi-google" role="img" aria-label="Email Me" style={activeStyles}></i></a>
                <a href="https://linkedin.com/in/robin-vernon"className="linkDiv"><i className="bi-linkedin" role="img" aria-label="Lets connect on Linkedin" style={activeStyles}></i></a>
            </div>
        </div>
    )

};
export default HomePage;
const activeStyles={
    fontSize: "40px",
    marginLeft:"8px",
    marginTop: "25%",
    color: "black"
}