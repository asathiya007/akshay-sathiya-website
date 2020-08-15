import React from "react";
import "./ProjectsPage.css";
import Scroll from "../Scroll/Scroll";
import HawkEyePic from "./HawkEyePic.png";
import StarWarsPic from "./StarWarsPic.png";
import HotShotTennisPic from "./HotShotTennisPic.png";
import CrystalClearCompostPic from "./CrystalClearCompostPic.jpg";
import RiddleMeThisPic from "./RiddleMeThisPic.png";
import ProjectCard from "./ProjectCard";
import CodeCircle from './CodeCircle.jpg';
import SafeAndSound from './SafeAndSound.jpg';
import MaiJournal from './MaiJournal.jpg';

const projects = [
    {
        image: MaiJournal,
        name: 'Mai Journal',
        descriptions: [
            'HackSC 2020',
            'A journaling platform for the mentally ill. Analyzes journal entries and provides online media (news articles, YouTube videos, etc.) to help stabilize mood and mental state.',
            'Used the Google Cloud Natural Language API and trained a model using Google Cloud’s AutoML Natural Language to perform sentiment analysis and classification on journal entries. Deployed the Express + Node.js server using Google Cloud App Engine to interact with the Google Cloud NLP models.'
        ],
        link: 'https://devpost.com/software/mindjournal',
        linkType: 'Devpost'
    },
    {
        image: SafeAndSound,
        name: 'Safe & Sound',
        descriptions: [
            'HackDavis 2020 Winner: Best Use of Google Cloud Platform.',
            'A system that helps people at risk of suicide get the help they need from their loved ones before it’s too late.',
            'Trained a model using Google Cloud’s AutoML Natural Language to classify text messages as ‘distressed’ or ‘stable’. Messages classified as ‘distressed’ trigger an SMS containing the sender’s name, message text, and general location sent to the sender’s loved ones, prompting them to reach out.'
        ],
        link: 'https://devpost.com/software/safe-sound-gt1k9u',
        linkType: 'Devpost'
    },
    {
        image: CodeCircle,
        name: 'CodeCircle',
        descriptions: [
            'A social media platform that connects developers around the world.',
            'Developers can share content, showcase their education/experience credentials, and chat with other developers.',
            'Log in with guest credentials [‘john.doe@gmail.com’, ‘johndoe’] or register your own account to give it a try!'
        ],
        link: 'https://codecircle-asathiya.herokuapp.com/',
        linkType: 'Live Project'
    },
    {
        image: HawkEyePic,
        name: "HawkEye Face Detection",
        descriptions: ["A full-stack web app that uses AI/computer vision to detect faces in users’ photos and wrap them in blue bounding boxes.", "User data (name, email, entry count, date joined, etc.) is maintained in a database.",
            "Built with React.js, Node.js, Express.js, PostgreSQL and deployed with Heroku.",
            "Log in with guest credentials ['john.doe@gmail.com', 'johndoe'] or register your own account to give it a try!"],
        link: "https://hawkeye-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: HotShotTennisPic,
        name: "HotShot Tennis API",
        descriptions: ["An API that provides specific data about tennis players (name, year turned pro, playing style, grand slam wins, etc.).", "Player data is maintained in a database and can be updated to as time goes on to maintain concurrency.",
            "Built with Node.js, Express.js, PostgreSQL and deployed with Heroku.",
            "Give it a try!"],
        link: "https://hotshot-tennis-api-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: StarWarsPic,
        name: "Star Wars Cards",
        descriptions: ["A web app that fetches data about Star Wars characters from SWAPI (the Star Wars API) and displays profile cards for each character. When these cards are clicked, the user is taken to the character’s Wookiepedia (the Star Wars wiki) page.", "Users can also search for specific cards/characters and have their card display filtered accordingly.",
            "Built with React.js and deployed with Heroku.",
            "Give it a try!"],
        link: "https://starwarscards-asathiya.herokuapp.com/",
        linkType: "Live Project"
    },
    {
        image: CrystalClearCompostPic,
        name: "Crystal Clear Compost",
        descriptions: ["A desktop tool through which users can view and update data about their compost heap (such as the heap’s age, what items are in there and for how long, etc.). Heap data is maintained in flat files.",
            "Built with Java.",
            "Check out the GitHub repository!"],
        link: "https://github.com/asathiya007/Crystal-Clear-Compost",
        linkType: "GitHub Repo"
    },
    {
        image: RiddleMeThisPic,
        name: "Riddle Me This!",
        descriptions: ["An Android mobile app and riddle solving game that presents users with a series of riddles with clues and deceptions along the way.", "Free for download on the Google Play Store.",
            "Built with Java and Android Studio.",
            "Give it a try!"],
        link: "https://play.google.com/store/apps/details?id=akshaysathiya.riddlemethis&hl=en_US",
        linkType: "Google Play Store Profile"
    }
];

const ProjectsPage = () => {
    return (
        <div className="projects" style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-100">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{ backgroundColor: "black", color: "lightskyblue" }}>Projects</h1>
                <Scroll>
                    <div className="center w-80" style={{flexFlow: "row wrap"}}>
                        {
                            projects.map((proj, i) =>
                                (
                                    <ProjectCard
                                        key={i}
                                        image={proj.image}
                                        name={proj.name}
                                        descriptions={proj.descriptions}
                                        link={proj.link}
                                        linkType={proj.linkType}
                                    />
                                )
                            )
                        }
                    </div>
                </Scroll>
            </div>
        </div>
    );
};

export default ProjectsPage;
