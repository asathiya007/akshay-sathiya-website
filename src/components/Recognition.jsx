import React from 'react'; 
import eaglescout from '../img/eaglescout-min.png';
import oracle from '../img/oracle-min.png';
import cpp from '../img/cpp-min.png';
import nvidia from '../img/nvidia-min.png';
import akshaygtc from '../img/akshaygtc-min.png';
import msftpatentcube from '../img/msftpatentcube.png';
import RecognitionCard from './RecognitionCard';

const Recognition = () => { 

    const cards = [
        {
            image: nvidia, 
            title: 'Building RAG Agents with LLMs',
            organization: 'Nvidia',
            date: 'March 2025',
            descriptions: [
                'I attended a virtual workshop on building RAG agents with LLMs at Nvidia GTC (GPU Technology Conference) 2025.',
                'In the workshop, I learned about retrieval augmented generation (RAG) and LangChain, and I demonstrated my understanding of these concepts by implementing a RAG pipeline with LangChain to answer questions about papers on arXiv.', 
            ]
        },
        {
            image: nvidia, 
            title: 'Generative AI with Diffusion Models',
            organization: 'Nvidia',
            date: 'October 2024',
            descriptions: [
                'I took an online course through the Nvidia Deep Learning Institute (DLI) on diffusion models.',
                'In the course, I learned about diffusion models for image generation and demonstrated my understanding of these concepts by implementing a diffusion model to generate images of flowers and images of handwritten images.', 
            ]
        },
        {
            image: msftpatentcube, 
            title: 'Microsoft Patent Cube Award',
            organization: 'Microsoft',
            date: 'August 2024',
            descriptions: [
                'While working at Microsoft Azure, I was a co-founding data scientist for a methodology of desigining testing environments (an NP-hard constrained optimization problem), using graph theory and optimization algorithms.',
                'This methodology, called the EnvDesign model, has been developed for and is being used in pre-production testing in Azure, but is generalizable to other contexts/domains.',
                'To learn more about the EnvDesign model, see the Publications section of this website.'
            ]
        },
        {
            image: akshaygtc, 
            title: 'Efficient Large Language Model (LLM) Customization',
            organization: 'Nvidia',
            date: 'March 2024',
            descriptions: [
                'I attended an in-person workshop on efficient LLM customization at Nvidia GTC (GPU Technology Conference) 2024.',
                'In the workshop, I learned about parameter-efficient fine-tuning techniques (p-tuning, LoRA) and demonstrated my understanding of these concepts by applying them to various tasks (e.g. question answering, sentiment analysis) using the Nvidia NeMo service.', 
            ]
        },
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