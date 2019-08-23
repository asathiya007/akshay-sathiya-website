import React from "react";
import "./AboutPage.css";
import AkshayFBPic from "./AkshayFBPic.jpg";

const AboutPage = () => {
    return (
        <div className="aboutpage" style={{display: "flex", justifyContent: "center"}}>
            <div className="intro">
                <h1 className="f1">About Me</h1>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={AkshayFBPic} alt="" width="15%" style={{objectFit: "cover"}} className="br4 fbPic"/>
                    <div className="w-50 ml4 text">
                        <p className="f5">Hey there, thanks for visiting my website! I am Akshay Sathiya, and I am currently studying computer science with a specialization in intelligence and information internetworks at the Georgia Institute of Technology. </p>
                        <br/>
                        <p className="f5">I have been born and raised in the Bay Area, California, and I currently attend school in Atlanta, so I am no stranger to the hustle-life. I have had the privilege of seeing technology be developed right in my backyard and watching it grow and change the world. I wish to use my skills to build stellar technology and change the world in my own way. </p>
                        <br />
                        <p className="f5">In computer science, I choose to focus on web development and artificial intelligence. Web development allows developers to bring their ideas to life and share them with the world, with a creative taste of their own. As a web developer, I feel empowered knowing that I can bring my ideas to life and hopefully, change the world with them. I also focus on artificial intelligence because that is the next step in computing. Computers are great, but they can only do exactly as they are told in code. What if they could employ human-like reasoning and heuristics? Through aritifical intelligence, we are combining a computer's speed and accuracy with a human's creativity and ingenuity. This will open the door to a future where virtually any problem, be it production issues in supply chain, or medical issues like cancer, can be solved by technology, and I don't just want to watch this happen. I want to be a part of it!</p>
                        <br />
                    </div>
                </div>
                <div className="mt4">
                    <h1>Learn more about me below!</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutPage; 