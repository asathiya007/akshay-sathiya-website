import React from 'react'; 
import ProjectCard from './ProjectCard';
import safeandsound from '../img/safeandsound-min.jpg';
import hotspot from '../img/hotspot-min.png';
import amazonstocks from '../img/amazonstocks-min.jpeg';
import carcam from '../img/carcam-min.png';
import sds from '../img/sds-min.png';
import nbacc from '../img/nbacc-min.png';
import nbatt from '../img/nbatt-min.png';

const Projects = () => { 

    const cards = [
        {
            image: nbatt, 
            title: 'NBA Trending Teams',
            stack: 'Scikit-learn, D3.js',
            date: 'December 2021',
            descriptions: [
                'Course project for CS 6242 (Data and Visual Analytics) at Georgia Tech (Fall 2021). Led a team of five (including myself) students/developers to build machine learning models that performed sentiment analysis on tweets for each NBA team over time and interactive data visualizations to show how positively and negatively trending NBA teams are over time.',
                'We trained naive Bayes, logistic regression, and random forest models for sentiment classification. We used D3.js to produce the interactive data visualizations (line graphs and bar graphs).'
            ], 
            url: 'https://github.com/asathiya007/nba-trending-teams'
        },
        {
            image: nbacc, 
            title: 'NBA Crowdsourcing Comparisons',
            stack: 'Scikit-learn, Flask, React-Native, Firebase',
            date: 'December 2021',
            descriptions: [
                'Course project for CS 6220 (Big Data Systems and Analytics) at Georgia Tech (Fall 2021). Led a team of four (including myself) students/developers to build a crowdsourcing mobile app to collect NBA player comparison data and train machine learning models (linear regression and random forest regression models) to predict how much better one NBA player is over another given their statistics (box scores, shooting percentage, etc.).'
            ], 
            url: 'https://github.com/asathiya007/nba-crowdsourcing-comparisons'
        },
        {
            image: sds, 
            title: 'Sentiment Dataset Shift',
            stack: 'Python',
            date: 'December 2021',
            descriptions: [
                'Course project for CS 8803 DMM (Data Management and Machine Learning) at Georgia Tech (Fall 2021). I developed Sentiment Dataset Shift along with another student/classmate.',
                'Sentiment Dataset Shift is a pipeline that uses data science and statistics techniques to quantify the dataset shift of sentiment classification datasets.'
            ], 
            url: 'https://github.com/asathiya007/sentiment-dataset-shift'
        },
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
            stack: 'PyTorch, Flask, React, and Heroku',
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