import React from 'react'; 
import PublicationCard from './PublicationCard';
import envdesignmodel from '../img/envdesignmodel-min.png';
import optimizn from '../img/optimizn-min.png';
import azureblog from '../img/azureblog-min.png';


const Publication = () => { 

    const cards = [
        {
            image: envdesignmodel, 
            title: 'The EnvDesign Model: A Method to Solve the Environment Design Problem',
            publisher: 'arXiv (Cornell University)',
            date: 'July 2025',
            descriptions: [
                'The EnvDesign model, developed by Akshay Sathiya and Rohit Pandey, is a system (patent pending) that uses graph theory, optimization algorithms, and dynamic programming to determine pre-production testing environments for Azure internal programs (an NP-hard problem). While its original use case is for pre-production testing in the cloud, it is domain-agnostic and can be used for combinatorial testing in other contexts/fields too.',
            ],
            url: 'https://arxiv.org/abs/2412.18109'
        },
        {
            image: optimizn, 
            title: 'optimizn: a Python Library for Developing Customized Optimization Algorithms',
            publisher: 'arXiv (Cornell University)',
            date: 'July 2025',
            descriptions: [
                'optimizn is an open-source Python library, developed by Akshay Sathiya and Rohit Pandey, that helps users customize optimization algorithms (simulated annealing, branch & bound) and the multi-arm bandit reinforcement learning algorithm for their problems/use cases.',
            ],
            url: 'https://arxiv.org/abs/2503.00033'
        },
        {
            image: azureblog, 
            title: 'Advancing cloud platform operations and reliability with optimization algorithms',
            publisher: 'Microsoft',
            date: 'August 2024',
            descriptions: [
                'This blog, authored by Azure CTO Mark Russinovich, Akshay Sathiya, and Rohit Pandey, describes how the optimizn open-source library is used in Azure.',
            ],
            url: 'https://azure.microsoft.com/en-us/blog/advancing-cloud-platform-operations-and-reliability-with-optimization-algorithms/'
        },
    ]
    
    return (
        <div className="h-center top-space bottom-space">
            <div className="w-60">
                <p className="f1 fw7 text-dark mv0">
                    <span className="fas fa-file"></span> Publications 
                </p>
                <p>Check out my publications!</p>
                {cards.map((card, i) => {
                    return (
                        <div>
                            <hr />
                            <PublicationCard 
                                key={i}
                                title={card.title}
                                publisher={card.publisher}
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

export default Publication; 