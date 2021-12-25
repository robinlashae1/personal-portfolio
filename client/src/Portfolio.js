import React from 'react';
import NavBar from './NavBar';

 function Portfolio ({title}){

    return(
        <div className="portfolio fullpage backGround">
            <h1 className='title'>{title}</h1>
            <NavBar />
        </div>

    )

};
export default Portfolio