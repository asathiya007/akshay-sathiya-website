import React from "react";
import "./AboutMePage.css";
import AkshayFBPic from "./AkshayFBPic.jpg";
import GitHubLogo from "./GitHubLogo.png";
import LinkedInLogo from "./LinkedInLogo.png";
import EagleScoutBadge from "./EagleScoutBadge.png";
import OracleCertBadge from "./OracleCertBadge.png";
import Scroll from "../Scroll/Scroll";

const AboutMePage = () => {

    const linkToGitHub = () => {
        window.open("https://github.com/asathiya007").focus();
    }

    const linkToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/akshaysathiya/").focus();
    }

    return (
        <div className="aboutMePage" style={{display: "flex", justifyContent: "center"}}>
            <div className="intro">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{backgroundColor: "black", color: "lightgreen"}}>About Me</h1>
                <Scroll>
                    <div className="pa2 center">
                        <img src={AkshayFBPic} alt="" width="15%" height="100%" style={{ objectFit: "cover" }} className="br4 fbPic" />
                        <div className="w-50 mh4 text">
                            <p className="f4">Hey there, I am Akshay Sathiya! I graduated from the Georiga Institute of Technology in three years with my Bachelor of Science degree in computer science (specialization: intelligence + information internetworks) and I am currently working towards my Master of Science degree in computer science (specialization: machine learning). I am an Eagle Scout and an Oracle Certified Associate in Java SE 8 Programming. I aspire to expand and apply my skill set in artificial intelligence, machine learning, and entrepreneurship.</p>
                            <p className="f4">I have been born and raised in the Bay Area, California, and I currently attend school in Atlanta, so I am no stranger to "hustle culture". I have had the honor and privilege of seeing technology be developed right in my backyard and watching it grow and change the world. I am so excited to be a part of the new wave of artificial intelligence and machine learning.</p>
                            <p className="f4">I am so excited to leverage my computer science and leadership skills to build impactful technology and push the world forward, so let's team up! Shoot me an email at akshay.sathiya@gmail.com or call/text me at +1-925-548-7652.</p>
                        </div>
                        <div className="honorsBadges h-100 w-15 pb3" style={{display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}>
                            <img className="mb4" src={EagleScoutBadge} alt="" width="150px"/>
                            <img className="mt4" src={OracleCertBadge} alt="" width="150px"/>
                        </div>
                    </div>
                    <div className="mt1">
                        <div className="w-80 ph4 center">
                            <h1>Learn more about me and what I do, below!</h1>
                        </div>
                        <div className="center mt2 pa2 mb3 pb3 links">
                            <img src={GitHubLogo} alt="" className="pa3 mr4 ml4 br-100 grow" width="200px" height="200px" onClick={linkToGitHub} />
                            <img src={LinkedInLogo} alt="" className="pa3 mr4 ml4 br-100 grow" width="200px" height="200px" onClick={linkToLinkedIn} />
                        </div>
                    </div>
                </Scroll>
            </div>
        </div>
    );
};

export default AboutMePage; 