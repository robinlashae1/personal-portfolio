import React from 'react';
import NavBar from './NavBar';

 function HomePage (){

    return(
        <div className="homePage fullpage">
            <NavBar/>
            <div id="contact">
                <a href="https://github.com/robinlashae1"className="linkDiv"><i className="bi-github" role="img" aria-label="Check out my GitHub" style={activeStyles}></i></a>
                <a href="https://github.com/robinlashae1"className="linkDiv"><i className="bi-google" role="img" aria-label="Email Me" style={activeStyles}></i></a>
                <a href="https://linkedin.com/in/robin-vernon"className="linkDiv"><i className="bi-linkedin" role="img" aria-label="Lets connect on Linkedin" style={activeStyles}></i></a>
                <a href="https://github.com/robinlashae1"className="linkDiv"><i className="bi-slack" role="img" aria-label="Find me on Slack" style={activeStyles}></i></a>
            </div>
            <img src='../portfolioImage.png' id="portfolioImage"/>
            <portfolioImage/>
            <a href="https://github.com/robinlashae1"className="linkDiv"><i className="bi-info-circle-fill" role="img" aria-label="More about me"></i></a>
            <h3 className='intro'>Hi, I'm</h3>
            <h1 className='intro'>Robin Vernon</h1>
            
        </div>
    )

};
export default HomePage;
const activeStyles={
    fontSize: "40px",
    marginLeft:"5px",
    marginTop: "5%"
}