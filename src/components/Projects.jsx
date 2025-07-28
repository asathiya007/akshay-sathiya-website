import React from 'react'; 
import ProjectCard from './ProjectCard';
import safeandsound from '../img/safeandsound-min.jpg';
import hotspot from '../img/hotspot-min.png';
import amazonstocks from '../img/amazonstocks-min.jpeg';
import carcam from '../img/carcam-min.png';
import sds from '../img/sds-min.png';
import nbacc from '../img/nbacc-min.png';
import nbatt from '../img/nbatt-min.png';
import medi from '../img/medi-min.png';
import stylesynth from '../img/stylesynth-min.png';
import cardcrafter from '../img/cardcrafter-min.png';
import genmk from '../img/genmk-min.png';
import neospaceinvaders from '../img/neospaceinvaders-min.png';
import paperbuddy from '../img/paperbuddy-min.png';
import streetchatter from '../img/streetchatter-min.png';


const Projects = () => { 

    const cards = [
        {
            image: streetchatter, 
            title: 'StreetChatter',
            stack: 'Python (LangChain)',
            date: 'July 2025',
            descriptions: [
                'StreetChatter is an AI that assumes the role of Street Fighter characters (e.g. Ryu, Dhalsim, Chun-Li, M. Bison, Ken) and chats with users to help them learn the lore of that character and the Street Fighter universe. StreetChatter is powered by an LLM (Llama-3.3-70b-instruct) and retrieval augmented generation (RAG).',
                'This project showcases how generative AI can be used to deepen player immersion. New Street Fighter players will be curious to learn about the lore of the game and the characters they play as/against. Rather than reading lots of exposition online, they can chat with their favorite Street Fighter characters and learn through their conversations! A much more fun way to learn about a new game.'
            ],
            url: 'https://github.com/asathiya007/streetchatter'
        },
        {
            image: paperbuddy, 
            title: 'PaperBuddy',
            stack: 'Python (LangChain)',
            date: 'July 2025',
            descriptions: [
                'PaperBuddy is an AI assistant that answers questions about papers on arXiv (arxiv.org) using an LLM (Llama-3.3-70b-instruct) and retrieval augmented generation (RAG).',
            ],
            url: 'https://github.com/asathiya007/paperbuddy'
        },
        {
            image: neospaceinvaders, 
            title: 'Neo Space Invaders',
            stack: 'C# (Unity), Python (Hugging Face)',
            date: 'July 2025',
            descriptions: [
                'A remake of the classic Space Invaders game, featuring adaptive difficulty and AI-generated (at run-time) backgrounds/sprites.',
                'This project showcases how generative AI can be used at runtime to provide a more vivid gameplay experience, while still retaining the familiar aspects of the game that people know and love.'
            ],
            url: 'https://github.com/asathiya007/neo-space-invaders'
        },
        {
            image: genmk, 
            title: 'GenMK',
            stack: 'Python (PyTorch, Hugging Face)',
            date: 'June 2025',
            descriptions: [
                'GenMK is an AI system that uses a multimodal model (Phi-4-multimodal-instruct) and a fine-tuned diffusion model (Stable Diffusion XL v1.0, fine-tuned with LoRA, a parameter-efficient fine-tuning technique) to generate images of new Mortal Kombat characters.',
                'This project showcases how generative AI can support the data preparation process (generating text descriptions for images in an image dataset) and support the creative process (in the context of Mortal Kombat, helping design new characters from provided text descriptions).'
            ],
            url: 'https://github.com/asathiya007/genmk'
        },
        {
            image: cardcrafter, 
            title: 'CardCrafter',
            stack: 'Python (PyTorch, Hugging Face)',
            date: 'June 2025',
            descriptions: [
                'CardCrafter is an AI system that uses a multimodal model (Phi-4-multimodal-instruct, with few-shot learning) and a fine-tuned diffusion model (Stable Diffusion v1.5, fine-tuned with LoRA, a parameter-efficient fine-tuning technique) to generate images of new Yu-Gi-Oh! Spell and Trap cards.',
                'This project showcases how generative AI can support the data preparation process (in the context of Yu-Gi-Oh! cards, extracting text from and describing certain parts of a Yu-Gi-Oh! card image) and support the creative process (in the context of Yu-Gi-Oh! cards, describing what the image at the center of the card should look like given the card\'s name and effect, and generating an image from that description).'
            ],
            url: 'https://github.com/asathiya007/cardcrafter'
        },
        {
            image: stylesynth, 
            title: 'StyleSynth',
            stack: 'Python (PyTorch)',
            date: 'March 2025',
            descriptions: [
                'StyleSynth is an AI system that uses a custom diffusion model to generate images of new articles of clothing.'
            ],
            url: 'https://github.com/asathiya007/stylesynth'
        },
        {
            image: medi, 
            title: 'Medi',
            stack: 'Python (Hugging Face)',
            date: 'February 2025',
            descriptions: [
                'Medi is an AI system that uses the Phi-3.5-mini-instruct language model with parameter efficient fine-tuning techniques (PEFT, specifically LoRA and p-tuning) to answer medical research questions.'
            ],
            url: 'https://github.com/asathiya007/medi'
        },
        {
            image: nbatt, 
            title: 'NBA Trending Teams',
            stack: 'Python (Scikit-learn), JavaScript (D3.js)',
            date: 'December 2021',
            descriptions: [
                'Course project for CS 6242 (Data and Visual Analytics) at Georgia Tech (Fall 2021). Led a team of five (including myself) students/developers to build machine learning models that performed sentiment analysis on tweets for each NBA team over time and interactive data visualizations to show how positively and negatively trending NBA teams are over time.',
                'We trained naive Bayes, logistic regression, and random forest models for sentiment analysis. We used D3.js to produce the interactive data visualizations (line graphs and bar graphs).'
            ], 
            url: 'https://github.com/asathiya007/nba-trending-teams'
        },
        {
            image: nbacc, 
            title: 'NBA Crowdsourcing Comparisons',
            stack: 'Python (Scikit-learn, Flask), JavScript (React-Native), Firebase',
            date: 'December 2021',
            descriptions: [
                'Course project for CS 6220 (Big Data Systems and Analytics) at Georgia Tech (Fall 2021). Led a team of four (including myself) students/developers to build a crowdsourcing mobile app to collect NBA player comparison data and train machine learning models (linear regression and random forest regression models) to predict how much better one NBA player is over another given their statistics (per-game averages, field goal percentage, etc.).'
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
            stack: 'Python (PyTorch, OpenCV)',
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
            stack: 'Python (Keras, Scikit-learn)',
            date: 'December 2020',
            descriptions: [
                'Course project for CS 7641 (Machine Learning) at Georgia Tech. I led a team of five (including myself) students/developers to build ML models to accurately forecast Amazon stock’s open, high, low, and close prices.',
                'We developed and evaluated a linear regression model, an ARIMA model, and a LSTM neural network. We also explored dimensionality reduction with PCA.'
            ], 
        },
        {
            image: hotspot, 
            title: 'HotSpot',
            stack: 'Python (PyTorch, Flask), JavaScript (React), and Heroku',
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
            stack: 'JavaScript (React), Python (Django), MongoDB, and Google Cloud Platform Natural Language',
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