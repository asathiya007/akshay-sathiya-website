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
            'CarCam is a artificial intelligence pipeline for autonomous vehicles that detects lanes, tracks road entities (like other vehicles), and assesses collision risks with these road entities.',
            'CarCam relies on input from only one camera, instead of relying on several cameras, multiple sensors, and/or complex systems like LiDAR, making safe self-driving simple, cheap, and easily accessible to all vehicles.',
            'Lanes are marked with blue lines, and road entities are bounded in green or red boxes. A road entity with which a collision is unlikely to occur is bounded in a green box and is deemed \'safe\'. A road entity with which a collision may occur is bounded in a red box and is deemed \'risky\'.',
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
            'We developed a linear regression model, an autoregressive integrated moving average (ARIMA) model, and a long short-term memory (LSTM) neural network model. We visualized, compared, and discussed the performances of each of these models in our project presentation. We also explored dimensionality reduction with principal component analysis (PCA).',
            'My team and I built these models with Keras and Scikit-learn. '
        ], 
        link: null, 
        linkType: null
    },
    {
        image: HotSpot,
        name: 'HotSpot',
        descriptions: [
            'An machine learning tool that detects wildfires in aerial images from planes, drones, satellites, etc. This project was inspired by California\'s wildfire crisis in August 2020.',
            'Wildfires are often noticed by humans after they have gotten too large and too close to civilization. By detecting these wildfires from the air before they get too large and reach humans, HotSpot enables authorities to take action early to contain and put out the wildfires, prevent and mitigate the damage, and save countless lives.',
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
            'An AI system that protects people at risk of self-harm by using natural language processing to analyze their text messages for significant distress and notifying their loved ones to reach out before it’s too late.',
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
