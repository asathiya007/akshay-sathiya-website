import React from 'react'; 
import akshaybsgt from '../img/akshaybsgt.png';
import akshaymsgt from '../img/akshaymsgt.png';
import gtael from '../img/gtael.png';
import hexlabs from '../img/hexlabs.png';
import gtgrandchallenges from '../img/gtgrandchallenges.png';
import EducationCard from './EducationCard';


const Education = () => { 

    const cards = [
        {
            image: akshaymsgt, 
            title: 'Master\'s of Science in Computer Science - Machine Learning',
            organization: 'Georgia Institute of Technology',
            location: 'Atlanta, GA',
            date: 'August 2021 - May 2022 (Expected)',
            descriptions: [
                'I am currently earning my M.S. degree in computer science at Georgia Tech, specializing in machine learning.',
                'Relevant coursework: Machine Learning, Data Management and Machine Learning, Big Data Systems and Analytics, Data and Visual Analytics, Computer Vision, Computational Science/Engineering Algorithms'
            ]
        },
        {
            image: akshaybsgt, 
            title: 'Bachelor\'s of Science in Computer Science - Intelligence and Information Internetworks',
            organization: 'Georgia Institute of Technology',
            location: 'Atlanta, GA',
            date: 'August 2018 - May 2021',
            descriptions: [
                'I earned my B.S. degree in computer science at Georgia Tech (in three years!), specializing in intelligence and information internetworks. I graduated with Highest Honor and several Dean\'s List appearances.', 
                'Relevant coursework: Machine Learning, Computer Vision, Robotics and Perception, Intro to AI, Design and Analysis of Algorithms, Data Structures and Algorithms, Intro to Database Systems, Linear Algebra, Statistics and Applications, Intro to Multivariable Calculus, Systems and Networks'
            ]
        },
        {
            image: hexlabs, 
            title: 'HexLabs/HackGT Tech Team - Software Engineer and Project Lead',
            organization: 'Georgia Institute of Technology',
            location: 'Atlanta, GA',
            date: 'January 2020 - May 2021',
            descriptions: [
                'As a software engineer and project lead on the HexLabs (formerly called HackGT) Tech Team, I led the development of the Beardell Bot, an chatbot system built with React, Express, and Node.js and deployed via Google Cloud Platform.',
                'The Beardell Bot is integrated with Slack and uses artificial intelligence to answer participant\'s questions or pair them up with mentors who can answer their question. The Beardell Bot helped over a thousand participants at our flagship hackathon, HackGT, and at our other hackathons to learn more about software engineering and complete their hackathon projects.'
            ]
        },
        {
            image: gtael, 
            title: 'Augmented Environments Lab - Software Engineer',
            organization: 'Georgia Institute of Technology',
            location: 'Atlanta, GA',
            date: 'January 2020 - May 2021',
            descriptions: [
                'As a software engineer in the Augmented Environments Lab at Georgia Tech, I developed features of a lab-wide AR/VR immersive book project using HTML, CSS, JavaScript, AFrame, Mozilla Hubs, and Blender.', 
                'Throughout my time at the AEL, I developed collision-detection components, 3D models, interactive virutal reality scenes, and many more integral parts of the AR/VR immersive book project.'
            ]
        },
        {
            image: gtgrandchallenges, 
            title: 'Grand Challenges Research Program - Software Engineer',
            organization: 'Georgia Institute of Technology',
            location: 'Atlanta, GA',
            date: 'August 2018 - May 2019',
            descriptions: [
                'As a software engineer in the Grand Challenges Research Program at Georgia Tech, I worked with four other students to develop an Android mobile app with Java, JavaScript, Android Studio, and Heroku to help Georgia Tech students pair up with each other and form groups to safely walk across campus at night.'
            ]
        },
    ]
    
    return (
        <div className="h-center top-space bottom-space">
            <div className="w-60">
                <p className="f1 fw7 text-dark mv0">
                    <span className="fas fa-graduation-cap"></span> Education 
                </p>
                <p>Check out my educational background, involvements, and accomplishments!</p>
                {cards.map((card, i) => {
                    return (
                        <div>
                            <hr />
                            <EducationCard 
                                key={i}
                                title={card.title}
                                organization={card.organization}
                                location={card.location}
                                date={card.date}
                                image={card.image}
                                descriptions={card.descriptions}
                                idx={i}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Education; 