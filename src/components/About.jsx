import React from 'react'; 
import aiml from '../img/aiml-min.jpeg'; 
import github from '../img/github-min.png';
import linkedin from '../img/linkedin-min.png';
import AboutCard from './AboutCard';

const About = () => { 

    const cards = [
        {
            image: aiml, 
            title: 'Career Focus',
            descriptions: [
                'My career focus is artificial intelligence and machine learning. I love building AI/ML technology and I am absolutely fascinated by it!', 
                'I think AI/ML technology, especially generative AI, will allow us to push the frontier in many domains, like gaming, cloud, etc. Consequently, we can improve existing functionality, develop new functionality, and ultimately deliver more effective technology and a better user experience.', 
                'I am so excited to be a part of this new wave of technology, and I can\'t wait to see what the future holds!'
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
                'Check out my LinkedIn to learn more about me and my career growth, accomplishments, etc. ',
                'Let\'s connect on LinkedIn! I would love to keep in touch with you.' 
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