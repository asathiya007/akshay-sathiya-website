import React from 'react'; 
import eaglescout from '../img/eaglescout-min.png';
import oracle from '../img/oracle-min.png';
import cpp from '../img/cpp-min.png';
import RecognitionCard from './RecognitionCard';

const Recognition = () => { 

    const cards = [
        {
            image: oracle, 
            title: 'Oracle Certified Associate (Java SE8 Programming)',
            organization: 'Oracle Corporation',
            date: 'January 2019',
            descriptions: [
                'I am an Oracle Certified Associate in Java SE8 Programming.',
                'I earned this certification through studying and demonstrating mastery in Java programming and object-oriented programming principles (inheritance, polymorphism, encapsulation, and abstraction).', 
            ]
        },
        {
            image: cpp, 
            title: 'Certificate in Advanced C++ Programming',
            organization: 'Diablo Valley College',
            date: 'October 2018',
            descriptions: [
                'During my high school years, I dual-enrolled in computer science courses at Diablo Valley College.', 
                'After completing many challenging and fast-paced C++ programming courses, I earned a Certificate of Achievement in Computer Science for Advanced C++ Programming from Diablo Valley College.',
            ]
        },
        {
            image: eaglescout, 
            title: 'Eagle Scout',
            organization: 'Boy Scouts of America',
            date: 'December 2017',
            descriptions: [
                'I am a proud Eagle Scout from Troop 888!',
                'Throughout my years as a Boy Scout, I have held multiple leadership positions in my troop, earned several merit badges, and given back to my community through my Eagle Project, where I built mobile lost and found bins for my high school, Dougherty Valley High School.', 
            ]
        }
    ]
    
    return (
        <div className="h-center top-space bottom-space">
            <div className="w-60">
                <p className="f1 fw7 text-dark mv0">
                    <span className="fas fa-award"></span> Recognition 
                </p>
                <p>Check out some of the awards, honors, and certifications I have received!</p>
                {cards.map((card, i) => {
                    return (
                        <div>
                            <hr />
                            <RecognitionCard 
                                key={i}
                                title={card.title}
                                organization={card.organization}
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

export default Recognition; 