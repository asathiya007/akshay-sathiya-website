import React from "react";
import "./AboutPage.css";
import AkshayFBPic from "./AkshayFBPic.jpg";
import GitHubLogo from "./GitHubLogo.png";
import LinkedInLogo from "./LinkedInLogo.png";
import EagleScoutBadge from "./EagleScoutBadge.png";
import OracleCertBadge from "./OracleCertBadge.png";
import Scroll from "../Scroll/Scroll";

const AboutPage = () => {

    const linkToGitHub = () => {
        window.open("https://github.com/asathiya007").focus();
    }

    const linkToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/akshaysathiya/").focus();
    }

    return (
        <div className="aboutpage" style={{display: "flex", justifyContent: "center"}}>
            <div className="intro">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{backgroundColor: "black", color: "lightgreen"}}>About Me</h1>
                <Scroll>
                    <div className="pa2 center">
                        <img src={AkshayFBPic} alt="" width="15%" height="100%" style={{ objectFit: "cover" }} className="br4 fbPic grow" />
                        <div className="w-50 ml4 text">
                            <p className="f4">Hey there, thanks for visiting my website! I am Akshay Sathiya, and I am currently studying computer science with a specialization in intelligence and information internetworks at the Georgia Institute of Technology. I am also an Eagle Scout and an Oracle Certified Associate in Java SE 8 Programming. I aspire to expand and apply my skill set in full-stack web development, artificial intelligence, and entrepreneurship.</p>
                            <br />
                            <p className="f4">I have been born and raised in the Bay Area, California, and I currently attend school in Atlanta, so I am no stranger to "hustle culture". I have had the honor and privilege of seeing technology be developed right in my backyard and watching it grow and change the world.</p>
                            <br />
                            <p className="f4">I aim to leverage my computer science and leadership skills to build stellar technology and change the world in my own way, so let's team up!</p>
                            <br />
                        </div>
                        <div className="honorsBadges ml4 h-100 w-15 pb3" style={{display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
                            <img className="mb4 grow" src={EagleScoutBadge} alt="" width="150px"/>
                            <img className="mt4 grow" src={OracleCertBadge} alt="" width="150px"/>
                        </div>
                    </div>
                    <div className="mt1">
                        <h1>Learn more about me and my work below!</h1>
                        <div className="center mt2 pa2 links">
                            <img src={GitHubLogo} alt="" className="pa3 mr4 ml4 br-100 grow" width="200px" height="200px" onClick={linkToGitHub} />
                            <img src={LinkedInLogo} alt="" className="pa3 mr4 ml4 br-100 grow" width="200px" height="200px" onClick={linkToLinkedIn} />
                        </div>
                    </div>
                </Scroll>
            </div>
        </div>
    );
};

export default AboutPage; 