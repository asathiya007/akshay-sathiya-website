import React from 'react'; 
import aiml from '../img/aiml.jpeg'; 
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import AboutCard from './AboutCard';

const About = () => { 

    const cards = [
        {
            image: aiml, 
            title: 'Career Focus',
            descriptions: [
                'My career interests and focal points lie in the realm of artificial intelligence and machine learning.', 
                'In the societies of today and tomorrow where data is the new oil, understanding data and building software that can learn and act on such data is the key to pushing the world forward.', 
                'I am so excited to be a part of this fascinating new wave of technology, and I can\'t wait to see what the future holds!'
            ]
        }, 
        {
            image: github, 
            title: 'GitHub',
            descriptions: [
                'Check out my GitHub to keep in touch with my developer activity and learn more about the cool stuff that I have built or that I am currently working on!', 
                'Take a look at my pinned repositories to see my best projects, the ones which I am the most proud of.'
            ],
            url: 'https://github.com/asathiya007'
        }, 
        {
            image: linkedin, 
            title: 'LinkedIn',
            descriptions: [
                'Check out my LinkedIn to learn more about me and my career accomplishments. ',
                'Let\'s connect on LinkedIn! I would love to keep in touch with you too.' 
            ],
            url: 'https://www.linkedin.com/in/akshaysathiya/'
        }
    ]
    
    return (
        <div className="h-center top-space bottom-space">
            <div className="w-60">
                <p className="f1 fw7 text-dark mv0">
                    <span className="fas fa-user"></span> About 
                </p>
                <p>Learn more about me below!</p>
                {cards.map((card, i) => {
                    return (
                        <div>
                            <hr />
                            <AboutCard 
                                key={i}
                                title={card.title}
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

export default About; 