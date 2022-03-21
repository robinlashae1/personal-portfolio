import React from 'react';
import NavBar from './NavBar';

 function Portfolio ({title}){

    return(
        <div className="portfolio fullpage backGround">
            <h1 className='title'>{title}</h1>
            <NavBar />
            <div style={{marginTop: "13vh",paddingLeft: "2vw"}}>
                <div className="portfolioWork">
                    <img/>
                    <div style={activeStyle}>
                       <h1>Campus Finder</h1>
                    <p style={pStyle}>A rails application which connects students with all available personal services around their campus. (Barbers, Artist, Nail Techs, Tutors, etc).This application has a resful API along with user functionality and active storage (aws) components.</p> 
                    </div>
                    <a href="https://www.loom.com/share/39033ef1ad1f44448045ad5a961385e8">Demo</a>
                </div>

                <div className="portfolioWork">
                    <img/>
                    <div style={activeStyle}>
                       <h1>Seed Watch</h1>
                    <p style={pStyle}>A rails application which provides plants owners with a way to track their plants through visuals and updates. This application has a set database of house plants, however users can utilize full CRUD functions through plant creation/manipulation in their own personal nursery. </p> 
                    </div>
                    <a href="https://www.loom.com/share/e98f29c3bf974a3395827e34b262d1a5">Demo</a>
                </div>

                <div className="portfolioWork">
                    <img/>
                    <div style={activeStyle}>
                       <h1>Main Street Pho</h1>
                    <p style={pStyle}>An Ordering application for my favorite local restaurant. Used to practice react. This was one of my first works, I love to include it to show my progress thus far. This is solely a react app so the data is from a db.json file and rendered dynamically throughout the app.</p> 
                    </div>
                    <a href="https://www.loom.com/share/96934f89a7fc4062b1293f1aa1cae499">Demo</a>
                </div>
            </div>
        </div>

    )

};
export default Portfolio;
const activeStyle={
    width: "98vw",
    height: "fit-content"
}
const pStyle={
    fontWeight: "600",
    color: "white"
}