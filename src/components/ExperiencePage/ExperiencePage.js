import React from "react";
import "./ExperiencePage.css";
import AkshayMTech from "./AkshayMTech.png";
import ExperienceCard from "./ExperienceCard";
import AnalogyPlusLogo from "./AnalogyPlusLogo.png";
import AkshayFB from "./AkshayFB.png";
import LLNLLogo from "./LLNLLogo.png";
import Scroll from "../Scroll/Scroll";
import MicrosoftLogo from "./MicrosoftLogo.png";

const experience = [
    {
        employer: "Microsoft",
        role: "Software Engineer Intern - Azure Cloud + AI",
        time: "May 2021 - August 2021",
        descriptions: [
            "I developed ML models using Scikit-learn and PyTorch to streamline health checking for Azure Compute instances running AI workloads. I also developed an AI pipeline using Python to automate data preparation and model building.",
            "The technology I built drastically reduced the time for single-instance validation on Azure (from hours to minutes), allowing Microsoft to quickly detect and restore unhealthy Azure Compute instances, keeping Azure robust and reliable for all users."
        ], 
        image: MicrosoftLogo
    },
    {
        employer: "Facebook",
        role: "Software Engineer Intern - Messenger AI/ML",
        time: "May 2020 - August 2020",
        descriptions: [
            "I developed a chatbot system for Messenger using Hack/PHP, Java, GraphQL, and React that uses artificial intelligence to automate FAQ responses for Facebook pages of small/medium-sized businesses (SMBs).",
            "The technology I built increased the number of fulfilled valuable business events (sales, quotes, etc.) on Messenger by orders of magnitude, as a part of Facebook’s initiative to use AI to help SMBs survive and operate through the COVID-19 pandemic.",
        ],
        image: AkshayFB
    },
    {
        employer: "Macy's Systems & Technology",
        role: "Software Engineer Intern - Data & Analytics",
        time: "May 2019 - August 2019",
        descriptions: [
            "I developed a dashboard using React, Express, Node.js, and GCP that detects aging inventory and provides data analytics to improve the supply chain. This project won 1st place at the Macy’s Tech Summer 2019 Intern Hackathon.",
            "I built an acronym dictionary tool using Java and MySQL to help Macy’s cultivate a wiki of company jargon.",
            "I developed a data-as-a-service (DaaS) application using Java to map order data to cloud GCP database tables.",
        ], 
        image: AkshayMTech
    },
    {
        employer: "Analogy Plus LLC",
        role: "Mobile App Development Intern",
        time: "June 2017 - August 2017",
        descriptions: [
            "I helped design & develop Consent App (iOS mobile app) for secure waiver-signing.",
            "I received guidance and training in Android mobile app development."
        ],
        image: AnalogyPlusLogo
    },
    {
        employer: "Lawrence Livermore National Laboratory",
        role: "Cyber Defense Intern",
        time: "June 2016 - August 2016",
        descriptions: [
            "I conducted and presented research on the direct relationship between proximity & signal strength.",
            "I competed in lab-wide solo and team Capture the Flag cybersecurity competitions."
        ],
        image: LLNLLogo
    }
];

const ExperiencePage = () => {
    return (
        <div className="experience" style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-100">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{ backgroundColor: "black", color: "lightcoral" }}>Experience</h1>
                <Scroll>
                    {
                        experience.map((exp, i) => (
                            <ExperienceCard key={i} employer={exp.employer} role={exp.role} time={exp.time} descriptions={exp.descriptions} image={exp.image} />
                        ))
                    }
                </Scroll>
            </div>
        </div>
    );
}

export default ExperiencePage;