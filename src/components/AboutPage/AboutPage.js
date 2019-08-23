import React from "react";
import "./AboutPage.css";
import AkshayFBPic from "./AkshayFBPic.jpg";

const AboutPage = () => {
    return (
        <div className="aboutpage" style={{display: "flex", justifyContent: "center"}}>
            <div className="intro">
                <h1 className="f1">About Me</h1>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="pa2">
                    <img src={AkshayFBPic} alt="" width="15%" height="100%" style={{objectFit: "cover"}} className="br4 fbPic grow"/>
                    <div className="w-50 ml4 text">
                        <p className="f4">Hey there, thanks for visiting my website! I am Akshay Sathiya, and I am currently studying computer science with a specialization in intelligence and information internetworks at the Georgia Institute of Technology. I aspire to expand and apply my skill set in full-stack web development, artificial intelligence, and entrepreneurship.</p>
                        <br/>
                        <p className="f4">I have been born and raised in the Bay Area, California, and I currently attend school in Atlanta, so I am no stranger to "hustle culture". I have had the honor and privilege of seeing technology be developed right in my backyard and watching it grow and change the world.</p>
                        <br />
                        <p className="f4">I aim to leverage my computer science and leadership skills to build stellar technology and change the world in my own way, so let's team up!</p>
                        <br />
                    </div>
                </div>
                <div className="mt1">
                    <h1>Learn more about me below!</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutPage; 