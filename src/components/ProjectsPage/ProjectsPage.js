import React from "react";
import "./ProjectsPage.css";
import Scroll from "../Scroll/Scroll";
import HawkEye from "./HawkEye.png";
import ProjectCard from "./ProjectCard";
import SafeAndSound from './SafeAndSound.jpg';
import MaiJournal from './MaiJournal.jpg';
import HotSpot from './HotSpot.png';
import CarCam from './carcam.png';

const projects = [
    {
        image: CarCam, 
        name: 'CarCam',
        descriptions: [
            'CarCam is a computer vision pipeline for autonomous vehicles, built with PyTorch and OpenCV. CarCam uses machine learning to detect lanes, track road entities (like other vehicles), and assess collision risks with these road entities.',
            'CarCam relies on input from only one camera, instead of relying on several cameras, multiple sensors, and/or complex systems like LiDAR, making safe self-driving simple, cheap, and easily accessible to all vehicles.',
            'Lanes are marked with blue lines, and road entities are bounded in green or red boxes. A road entity with which a collision is unlikely to occur is bounded in a green box and is deemed \'safe\'. A road entity with which a collision may occur is bounded in a red box and is deemed \'risky\'.',
            'I built this with PyTorch and OpenCV'
        ], 
        link: 'https://youtu.be/IRfuNHZG8CQ', 
        linkType: 'Demo Video'
    },
    {
        image: HotSpot,
        name: 'HotSpot',
        descriptions: [
            'An artificial intelligence tool that uses computer vision to detect wildfires in aerial images from planes, drones, satellites, etc. This was built in response to the wildfires that have been sparked across California throughout the years, the most recent of which happened due to the heat wave in August 2020.',
            'Wildfires are often noticed by humans after they have gotten too large. By detecting these wildfires from the air before they get too large and reach humans, HotSpot enables authorities to take action to control the wildfire, limit the damage, and save countless lives.',
            'I built this with React, Flask, PyTorch, and Heroku'
        ],
        link: 'https://hotspot-asathiya.herokuapp.com/',
        linkType: 'Live Project'
    },
    {
        image: MaiJournal,
        name: 'Mai Journal',
        descriptions: [
            'HackSC 2020',
            'An AI-powered journaling platform for the mentally ill that uses natural language processing to analyze journal entries and recommends online media (news articles, YouTube videos, etc.) to help stabilize mood and mental state.',
            'My team and I built this with HTML, CSS, JavaScript, Node.js, Firebase, Heroku, Google Cloud Platform Natural Language, and Google Cloud Platform App Engine'
        ],
        link: 'https://devpost.com/software/mindjournal',
        linkType: 'Devpost Page'
    },
    {
        image: SafeAndSound,
        name: 'Safe & Sound',
        descriptions: [
            'HackDavis 2020 Winner: Best Use of Google Cloud Platform.',
            'A machine learning system that protects people at risk of suicide from self-harm by using natural language processing to analyze their text messages for significant distress and notifying their loved ones to reach out before it’s too late.',
            'My team and I built this with React, Django, MongoDB, and Google Cloud Platform Natural Language'
        ],
        link: 'https://devpost.com/software/safe-sound-gt1k9u',
        linkType: 'Devpost Page'
    },
    {
        image: HawkEye,
        name: "HawkEye Face Detection",
        descriptions: ["A system that uses AI and computer vision to detect faces in users’ photos and wrap them in blue bounding boxes.",
            "I built this with React, Node.js, Express, PostgreSQL, and Heroku.",
            "Log in with guest credentials ['john.doe@gmail.com', 'johndoe'] or register your own account to give it a try!"],
        link: "https://hawkeye-asathiya.herokuapp.com/",
        linkType: "Live Project"
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects" style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-100">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{ backgroundColor: "black", color: "lightskyblue" }}>Projects</h1>
                <Scroll>
                    <div className="center w-80" style={{ flexFlow: "row wrap" }}>
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
