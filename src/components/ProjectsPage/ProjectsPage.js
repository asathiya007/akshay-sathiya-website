import React from "react";
import "./ProjectsPage.css";
import Scroll from "../Scroll/Scroll";
import HawkEyePic from "./HawkEyePic.png";
import StarWarsPic from "./StarWarsPic.png";
import HotShotTennisPic from "./HotShotTennisPic.png";
import CrystalClearCompostPic from "./CrystalClearCompostPic.jpg";
import RiddleMeThisPic from "./RiddleMeThisPic.png";
import ProjectCard from "./ProjectCard";
import CodeCircle from './CodeCircle.jpg';
import SafeAndSound from './SafeAndSound.jpg';
import MaiJournal from './MaiJournal.jpg';

const projects = [
    {
        image: MaiJournal,
        name: 'Mai Journal',
        descriptions: [
            'HackSC 2020',
            'A journaling platform for the mentally ill. Analyzes journal entries and recommends online media (news articles, YouTube videos, etc.) to help stabilize mood and mental state.',
            'I built this with HTML, CSS, JavaScript, Node.js, Firebase, Heroku, Twilio (Programmable SMS), and Google Cloud Platform (Natural Language, App Engine)'
        ],
        link: 'https://devpost.com/software/mindjournal',
        linkType: 'Devpost'
    },
    {
        image: SafeAndSound,
        name: 'Safe & Sound',
        descriptions: [
            'HackDavis 2020 Winner: Best Use of Google Cloud Platform.',
            'A system that protects people at risk of suicide from self-harm by analyzing their text messages for significant distress and notifying their loved ones to reach out before it’s too late.',
            'I built this with React, Redux, Django, MongoDB, Twilio (Programmable SMS), and Google Cloud Platform (Natural Language)'
        ],
        link: 'https://devpost.com/software/safe-sound-gt1k9u',
        linkType: 'Devpost'
    },
    {
        image: CodeCircle,
        name: 'CodeCircle',
        descriptions: [
            'A social media platform that connects developers around the world.',
            'Developers can share content, showcase their education/experience credentials, and participate in platform-wide discussions.',
            'I built this with with React, Redux, Express, Node.js, MongoDB, Heroku, and the GitHub API',
            'Log in with guest credentials [‘john.doe@gmail.com’, ‘johndoe’] or register your own account to give it a try!'
        ],
        link: 'https://codecircle-asathiya.herokuapp.com/',
        linkType: 'Live Project'
    },
    {
        image: HawkEyePic,
        name: "HawkEye Face Detection",
        descriptions: ["A full-stack web app that uses AI/computer vision to detect faces in users’ photos and wrap them in blue bounding boxes.",
            "I built this with React.js, Node.js, Express.js, PostgreSQL, and Heroku.",
            "Log in with guest credentials ['john.doe@gmail.com', 'johndoe'] or register your own account to give it a try!"],
        link: "https://hawkeye-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: HotShotTennisPic,
        name: "HotShot Tennis API",
        descriptions: ["An API that provides specific data about tennis players (name, year turned pro, playing style, grand slam wins, etc.).",
            "I built this with Node.js, Express.js, PostgreSQL, and Heroku.",
            "Give it a try!"],
        link: "https://hotshot-tennis-api-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: StarWarsPic,
        name: "Star Wars Cards",
        descriptions: ["A web app that fetches data about Star Wars characters from SWAPI (the Star Wars API) and displays profile cards (linked to the respective Wookiepedia pages) for each character.",
            "I built this with React and Heroku.",
            "Give it a try!"],
        link: "https://starwarscards-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: CrystalClearCompostPic,
        name: "Crystal Clear Compost",
        descriptions: ["A desktop tool through which users can view and update data about their compost heap (such as the heap’s age, what items are in there and for how long, etc.).",
            "I built this with Java",
            "Check out the GitHub repository!"],
        link: "https://github.com/asathiya007/Crystal-Clear-Compost",
        linkType: "GitHub Repo"
    },
    {
        image: RiddleMeThisPic,
        name: "Riddle Me This!",
        descriptions: ["An Android mobile app and riddle solving game that presents users with a series of riddles with clues and deceptions along the way.", "Free for download on the Google Play Store.",
            "I built this with Java and XML.",
            "Give it a try!"],
        link: "https://play.google.com/store/apps/details?id=akshaysathiya.riddlemethis&hl=en_US",
        linkType: "Google Play Store Profile"
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
