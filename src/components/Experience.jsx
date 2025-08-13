import React from 'react'; 
import akshaymsftintern from '../img/akshaymsft-min.png';
import akshaymsft from '../img/akshaymsft2022-min.png';
import akshayfb from '../img/akshayfb-min.jpg';
import akshaymtech from '../img/akshaymtech-min.png';
import llnl from '../img/llnl-min.png';
import ExperienceCard from './ExperienceCard';

const Experience = () => { 
    const cards = [
        {
            image: akshaymsft, 
            title: 'Data Scientist II, Data Scientist (current level: 62) - Azure Cloud + AI',
            organization: 'Microsoft',
            location: 'Redmond, WA',
            date: 'August 2022 - Present',
            descriptions: [
                'I was a co-founding data scientist of the EnvDesign model, a system (patent pending) that uses graph theory and optimization algorithms to design pre-production testing environments for Azure internal programs (an NP-hard problem). It is used in AzQualify, a pre-production testing/regression prevention system in Azure that catches ~5-10 regressions a month. Received a Microsoft Patent Cube Award after filing a patent for the EnvDesign Model.',
                'I was a co-founding data scientist of an open-source Python library, optimizn, that helps users customize optimization algorithms (simulated annealing, branch & bound) and the multi-arm bandit reinforcement learning algorithm for their problems/use cases.',
                'I wrote two papers (as first-name author) describing the EnvDesign model and the optimizn library. I co-authored a blog with Mark Russinovich, CTO of Azure, about how the optimizn library is used in Azure. I also presented both the EnvDesign model and optimizn library at Microsoft-internal poster galleries for ML, AI, and data science. See the Publications section of this website for links to the papers and blog.',
                'I was the founding data scientist of two inner-source Python libraries, Nitro and PeftGenie, that helps users fine-tune diffusion models and language models with parameter-efficient fine-tuning (PEFT) techniques, specifically LoRA and p-tuning. I presented both libraries at a company-internal poster gallery for ML, AI, data science, and gaming.'
            ]
        },
        {
            image: akshaymsftintern, 
            title: 'Software Engineer Intern - Azure Cloud + AI, Microsoft Research',
            organization: 'Microsoft',
            location: 'Remote',
            date: 'May 2021 - August 2021',
            descriptions: [
                'I developed ML models using PyTorch and Scikit-learn to predict whether servers/nodes running AI workloads are healthy or unhealthy. I also developed a pipeline using Python to facilitate data preparation and model training across different types of ML models.',
                'The technology I developed can be used to detect unhealthy nodes in Azure, and in doing so, help keep Azure robust and reliable.', 
            ]
        },
        {
            image: akshayfb, 
            title: 'Software Engineer Intern - Messenger AI/ML',
            organization: 'Facebook',
            location: 'Remote',
            date: 'May 2020 - August 2020',
            descriptions: [
                'I developed a suggested-reply flow for Messenger using React, Hack/PHP, Java, and GraphQL that uses artificial intelligence to facilitate FAQ responses for Facebook pages of small/medium-sized businesses (SMBs).', 
                'The suggested-reply flow I developed can streamline interactions between customers and SMBs on Messenger and increase the number of fulfilled valuable business events (sales, quotes, etc.).'
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
                'I worked on a data-as-a-service (DaaS) application using Java and Google Cloud Platform to map order data to Google Cloud Platform BigQuery database tables. I also built an acronym dictionary wiki using React, Express, Node.js, and PostgreSQL to record and update company jargon.'
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
            ]
        }
    ]
    
    return (
        <div className="h-center top-space bottom-space">
            <div className="w-60">
                <p className="f1 fw7 text-dark mv0">
                    <span className="fas fa-briefcase"></span> Experience 
                </p>
                <p>Check out the awesome places I have worked at and the work I did!</p>
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