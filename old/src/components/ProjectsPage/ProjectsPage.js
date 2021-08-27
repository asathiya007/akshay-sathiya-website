import React from "react";
import "./ProjectsPage.css";
import Scroll from "../Scroll/Scroll";
import ProjectCard from "./ProjectCard";
import SafeAndSound from './SafeAndSound.jpg';
import HotSpot from './HotSpot.png';
import AmazonStocks from './AmazonStocks.jpeg';
import CarCam from './carcam.png';

const projects = [
    {
        image: CarCam, 
        name: 'CarCam',
        descriptions: [
            'An AI pipeline for cars that detects collision risks on the road.',
            'I built this with PyTorch and OpenCV.'
        ], 
        link: 'https://youtu.be/IRfuNHZG8CQ', 
        linkType: 'Demo Video'
    },
    {
        image: AmazonStocks, 
        name: 'Amazon Stock Price Prediction',
        descriptions: [
            'This was a course project for CS 7641 (Machine Learning) at Georgia Tech. I led a team of five (including myself) students/developers to build ML models to accurately forecast Amazon stock\'s open, high, low, and close prices.',
            'My team and I built this with Keras and Scikit-learn. '
        ], 
        link: null, 
        linkType: null
    },
    {
        image: HotSpot,
        name: 'HotSpot',
        descriptions: [
            'A machine learning tool that detects fires in aerial images. Inspired by California\'s wildfire crisis in August 2020.',
            'I built this with PyTorch, Flask, Heroku, and React.'
        ],
        link: 'https://hotspot-asathiya.herokuapp.com/',
        linkType: 'Live Project'
    },
    {
        image: SafeAndSound,
        name: 'Safe & Sound',
        descriptions: [
            'HackDavis 2020 Winner: Best Use of Google Cloud Platform.',
            'An AI system that protects people at risk of self-harm by analyzing their texts and contacting their support network.',
            'My team and I built this with Google Cloud Platform Natural Language, Django, MongoDB, and React.'
        ],
        link: 'https://devpost.com/software/safe-sound-gt1k9u',
        linkType: 'Devpost Page'
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
