import React from 'react';
import NavBar from './NavBar';

 function AboutMe ({title}){

    return(
        <div className="aboutMe fullpage backGround">
            <h1 className='title'>{title}</h1>
            <NavBar />
            <div className='textSpace'>
            <p >My name is Robin Vernon and I am a full-stack  Developer, from/currently living in Philadelphia, PA. I have a Certificate in Software Development from the Flatiron School, and my primary interest is in Front in development. In my free time, I do puzzles, organize my life and work of side projects. I am a fast learner, who loves to try new things. I particularly enjoy web Development because of how closely coding resembles a puzzle. </p>
            <h3 className='aboutTitle'>Languages List</h3>
            <p>I have been studying web development for almost a year. At the flatiron school, I learned many things. I have worked on projects in both front and back-end development, and Ibe worked in HTML/HTML5, CSS/CSS3, JavaScript, React, Ruby, RubyonRails,jQuery, and SQL/MySQL/PostgreSQL, to name a few. I have worked on both group projects, and solo projects. </p>
            <h3 className='aboutTitle'>This is a Rails app</h3>
            <p>The site you are currently viewing is a Ruby on Rails application built from scratch. I have a functional db along with a front end, with many different components. I would love to chat about the logic and hear constructive criticism. If you’re looking to talk, you can find me via the social icons on my home page. Connect with me on LinkedIn, check out my code on GitHub, or email me to Chat! Hoping to hear from you</p>       
            </div>
        </div>

    )

};
export default AboutMe