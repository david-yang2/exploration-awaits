import React from 'react';
// import video from "../../../app/assets/videos/homepage.mp4";


const Home = () => {
    return (
        // <div>
            <div className="home">
                <h1>Let's Explore The Great Outdoors!</h1>
                <h3>Our overland rigs are more than capable of conquering any trails you throw at them.</h3>
                <a href={`#/rigs`}>
                    <button className="home-button" > Lets get exploring! </button>
                </a>
            </div>
            // <video src={video} width="600" height="300" // controls="controls" autoplay="true" />
        // </div> 
    
    )
}

export default Home;