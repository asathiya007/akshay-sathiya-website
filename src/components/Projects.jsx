import React from 'react'; 
import ProjectCard from './ProjectCard';
import safeandsound from '../img/safeandsound.jpg';
import hotspot from '../img/hotspot.png';
import amazonstocks from '../img/amazonstocks.jpeg';
import carcam from '../img/carcam.png';

const Projects = () => { 

    const cards = [
        {
            image: carcam, 
            title: 'CarCam',
            stack: 'PyTorch and OpenCV',
            date: 'December 2020',
            descriptions: [
                'An artificial intelligence pipeline for autonomous vehicles that detects lanes, tracks road entities (like other vehicles), and assesses collision risks with these road entities.',
                'CarCam relies on input from only one camera, instead of relying on several cameras, multiple sensors, and/or complex systems like LiDAR, making safe self-driving simple, cheap, and easily accessible to all vehicles.'
            ], 
            url: 'https://youtu.be/IRfuNHZG8CQ'
        },
        {
            image: amazonstocks, 
            title: 'Amazon Stock Price Prediction',
            stack: 'Keras and Scikit-learn',
            date: 'December 2020',
            descriptions: [
                'Course project for CS 7641 (Machine Learning) at Georgia Tech. I led a team of five (including myself) students/developers to build ML models to accurately forecast Amazon stock’s open, high, low, and close prices.',
                'We developed and evaluated a linear regression model, an ARIMA model, and a LSTM neural network. We also explored dimensionality reduction with PCA.'
            ], 
        },
        {
            image: hotspot, 
            title: 'HotSpot',
            stack: 'PyTorch, React, Flask, and Heroku',
            date: 'August 2020',
            descriptions: [
                'A machine learning tool that detects fires in aerial images captured by planes, drones, satellites, etc. Inspired by California\'s wildfire crisis in August 2020.', 
                'Wildfires are often noticed by humans after they have gotten too large and too close to civilization. By detecting these wildfires from the air before they get too large and reach humans, HotSpot enables authorities to take action early to contain and put out the wildfires, prevent and mitigate damage, and save countless lives.'
            ], 
            url: 'https://hotspot-asathiya.herokuapp.com'
        },
        {
            image: safeandsound, 
            title: 'Safe & Sound',
            stack: 'React, Django, MongoDB, and Google Cloud Platform Natural Language',
            date: 'January 2020',
            descriptions: [
                'An AI system that protects people at risk of self-harm by analyzing their text messages for significant distress and prompting their support network to reach out.',
                'Won "Best Use of Google Cloud" at HackDavis 2020.', 
            ], 
            url: 'https://devpost.com/software/safe-sound-gt1k9u'
        }
    ]
    
    return (
        <div className="h-center top-space bottom-space">
            <div className="w-60">
                <p className="f1 fw7 text-dark mv0">
                    <span className="fas fa-pencil-ruler"></span> Projects 
                </p>
                <p>Check out these cool projects I have made for courses, hackathons, fun, etc.!</p>
                {cards.map((card, i) => {
                    return (
                        <div>
                            <hr />
                            <ProjectCard 
                                key={i}
                                title={card.title}
                                stack={card.stack}
                                date={card.date}
                                image={card.image}
                                descriptions={card.descriptions}
                                url={card.url}
                                idx={i}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects; 