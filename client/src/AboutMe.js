import React from 'react';
import NavBar from './NavBar';

 function AboutMe ({title}){

    return(
        <div className="aboutMe fullpage backGround">
            <h1 className='title'>{title}</h1>
            <NavBar />
        </div>

    )

};
export default AboutMe