import React from 'react'; 
import akshaymsft from '../img/akshaymsft.png';
import akshayfb from '../img/akshayfb.jpg';
import akshaymtech from '../img/akshaymtech.png';
import analogyplus from '../img/analogyplus.png';
import llnl from '../img/llnl.png';
import ExperienceCard from './ExperienceCard';

const Experience = () => { 

    const cards = [
        {
            image: akshaymsft, 
            title: 'Software Engineer Intern - Azure Cloud + AI',
            organization: 'Microsoft',
            location: 'Remote',
            date: 'May 2021 - August 2021',
            descriptions: [
                'I developed ML models using PyTorch and Scikit-learn to streamline health checking for Azure Compute instances running AI workloads. I also developed an AI pipeline using Python to automate data preparation and model building.',
                'The technology I built drastically reduced the time for single-instance validation on Azure (from hours to minutes), allowing Microsoft to quickly detect and restore unhealthy Azure Compute instances, keeping Azure robust and reliable for all users.', 
            ]
        },
        {
            image: akshayfb, 
            title: 'Software Engineer Intern - Messenger AI/ML',
            organization: 'Facebook',
            location: 'Remote',
            date: 'May 2020 - August 2020',
            descriptions: [
                'I developed a chatbot system for Messenger using React, Hack/PHP, Java, and GraphQL that uses artificial intelligence to automate FAQ responses for Facebook pages of small/medium-sized businesses (SMBs).', 
                'The technology I built increased the number of fulfilled valuable business events (sales, quotes, etc.) on Messenger by orders of magnitude, as a part of Facebook’s initiative to use AI to help SMBs survive and operate through the COVID-19 pandemic.'
            ]
        },
        {
            image: akshaymtech, 
            title: 'Software Engineer Intern - Data & Analytics',
            organization: 'Macy\'s Technology',
            location: 'John\'s Creek, GA',
            date: 'May 2019 - August 2019',
            descriptions: [
                'I developed a dashboard using React, Express, Node.js, Google Cloud Platform BigQuery, and Google Cloud Platform Cloud Run that detects aging inventory and provides data analytics to improve the supply chain. This project won 1st place at the Macy’s Tech Summer 2019 Intern Hackathon.',
                'I developed a data-as-a-service (DaaS) application using Java and Google Cloud Platform to map order data to Google Cloud Platform BigQuery database tables. I also built an acronym dictionary wiki using React, Express, Node.js, and PostgreSQL to record and update company jargon.'
            ]
        },
        {
            image: analogyplus, 
            title: 'Mobile App Development Intern',
            organization: 'Analogy Plus LLC',
            location: 'Remote',
            date: 'June 2017 - August 2017',
            descriptions: [
                'I helped design & develop Consent App using Swift and Xcode. Consent App is an iOS mobile app for secure, electronic waiver-signing.',
                'I received guidance and training in Android mobile app development using Java and Android Studio.'
            ]
        },
        {
            image: llnl, 
            title: 'Cyber Defense Intern',
            organization: 'Lawrence Livermore National Laboratory',
            location: 'Livermore, CA',
            date: 'June 2016 - August 2016',
            descriptions: [
                'I conducted research using Python on the direct relationship between proximity & signal strength. Presented my research and discussed the application of my findings regarding drone tracking and drone behavior prediction.',
                'I also competed in lab-wide solo and team Capture-the-Flag (CTF) cybersecurity competitions.'
            ]
        }
    ]
    
    return (
        <div className="h-center top-space bottom-space">
            <div className="w-60">
                <p className="f1 fw7 text-dark mv0">
                    <span className="fas fa-briefcase"></span> Experience 
                </p>
                <p>Check out the awesome places I have worked and the work I did! I have received a full-time job offer at Microsoft. Previously, I have received internship offers at Microsoft, Facebook, Amazon, and other great companies.</p>
                {cards.map((card, i) => {
                    return (
                        <div>
                            <hr />
                            <ExperienceCard 
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

export default Experience; 