import React from "react";
import "./ProjectsPage.css";
import Scroll from "../Scroll/Scroll";
import HawkEyePic from "./HawkEyePic.png";
import StarWarsPic from "./StarWarsPic.png";
import HotShotTennisPic from "./HotShotTennisPic.png";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        image: HawkEyePic,
        name: "HawkEye Face Detection",
        descriptions: ["A full-stack web app that uses AI/computer vision to detect faces in users’ photos and wrap them in blue bounding boxes.", "User data (name, email, entry count, date joined, etc.) is maintained in a database.",
            "Built with React.js, Node.js, Express.js, PostgreSQL and deployed with Heroku.",
            "Log in with credentials ['guest', 'guest'] or register your own account to give it a try!"],
        link: "https://hawkeye-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: StarWarsPic,
        name: "Star Wars Cards",
        descriptions: ["A web app that fetches data about Star Wars characters from SWAPI (the Star Wars API) and displays profile cards for each character. When these cards are clicked, the user is taken to the character’s Wookiepedia (the Star Wars wiki) page.", "Users can also search for specific cards/characters and have their card display filtered accordingly.",
            "Built with React.js and deployed with Heroku.",
            "Give it a try!"],
        link: "https://starwarscards-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: HotShotTennisPic,
        name: "HotShot Tennis API",
        descriptions: ["An API that provides specific data about tennis players (name, year turned pro, playing style, grand slam wins, etc.).", "Player data is maintained in a database and can be updated to as time goes on to maintain concurrency.",
            "Built with Node.js, Express.js, PostgreSQL and deployed with Heroku.",
            "Give it a try!"],
        link: "https://hotshot-tennis-api-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: HotShotTennisPic,
        name: "HotShot Tennis API",
        descriptions: ["An API that provides specific data about tennis players (name, year turned pro, playing style, grand slam wins, etc.).", "Player data is maintained in a database and can be updated to as time goes on to maintain concurrency.",
            "Built with Node.js, Express.js, PostgreSQL and deployed with Heroku.",
            "Give it a try!"],
        link: "https://hotshot-tennis-api-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: HotShotTennisPic,
        name: "HotShot Tennis API",
        descriptions: ["An API that provides specific data about tennis players (name, year turned pro, playing style, grand slam wins, etc.).", "Player data is maintained in a database and can be updated to as time goes on to maintain concurrency.",
            "Built with Node.js, Express.js, PostgreSQL and deployed with Heroku.",
            "Give it a try!"],
        link: "https://hotshot-tennis-api-asathiya.herokuapp.com/",
        linkType: "Live Project"
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects" style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-100">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{ backgroundColor: "black", color: "lightskyblue" }}>Projects</h1>
                <Scroll>
                    <div className="center w-80" style={{flexFlow: "row wrap"}}>
                        {
                            projects.map((proj, i) =>
                                (
                                    <ProjectCard
                                        key={i}
                                        image={proj.image}
                                        name={proj.name}
                                        descriptions={proj.descriptions}
                                        link={proj.link}
                                        linkType={proj.linkType}
                                    />
                                )
                            )
                        }
                    </div>
                </Scroll>
            </div>
        </div>
    );
};

export default ProjectsPage; 