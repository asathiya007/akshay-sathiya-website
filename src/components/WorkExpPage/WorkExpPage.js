import React from "react";
import "./WorkExpPage.css";
import AkshayMTech from "./AkshayMTech.jpg";
import WorkExpCard from "./WorkExpCard";
import AnalogyPlusLogo from "./AnalogyPlusLogo.png";
import FacebookLogo from "./AkshayFB.jpg";
import LLNLLogo from "./LLNLLogo.png";
import Scroll from "../Scroll/Scroll";

const workExps = [
    {
        employer: "Facebook",
        role: "Software Engineer Intern",
        time: "May 2020 - August 2020",
        descriptions: [
            "I developed a suggested reply system for Facebook pages representing small/medium sized businesses (SMBs) to boost messaging efficiency and increase the number of valuable business events (sales, transactions, quotes, etc.) fulfilled through the Messenger platform.",
            "I developed this system for the mobile website (using Hack/PHP, JavaScript, and React) and for the Facebook Lite mobile app (using java, XML, Hack/PHP, and GraphQL).",
            "This system is a crucial part of Facebook's initiative to help SMBs survive and operate through the economic recession caused by the COVID-19 pandemic."
        ],
        image: FacebookLogo
    },
    {
        employer: "Macy's Systems & Technology",
        role: "Data & Analytics (DaaS) Intern",
        time: "May 2019 - August 2019",
        descriptions: [
            "I developed & debugged a Google Cloud Platform (GCP) Dataflow application which flattened & mapped order data from Macy's infrastructure to a GCP BigQuery database as a part of the company’s shift to Google Cloud Platform.",
            "I created a Confluence webpage which assisted in onboarding for the DaaS team and GCP setup.",
            "I built an \"Age In Rack\" dashboard using React, Express, Node.js, and GCP BigQuery, to detect aging inventory in Macy’s mega-centers and provide data analytics crucial to decreasing storage costs, increasing capacity, and increasing sales. This project won 1st place at the 2019 Macy’s Tech Intern Hackathon for improving the supply chain.",
            "I built a desktop tool and full-stack web app called \"Macy’s Acronym Dictionary\", using JDBC/Java & MySQL (desktop tool) and React, Express, Node.js, and PostgreSQL (full-stack web app). Macy’s new hires, interns, etc. can all interact with a shared repository of company jargon, which immensely helps in the onboarding process."
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

const WorkExpPage = () => {
    return (
        <div className="workexp" style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-100">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{ backgroundColor: "black", color: "lightcoral" }}>Work Experience</h1>
                <Scroll>
                    {
                        workExps.map((workExp, i) => (
                            <WorkExpCard key={i} employer={workExp.employer} role={workExp.role} time={workExp.time} descriptions={workExp.descriptions} image={workExp.image} />
                        ))
                    }
                </Scroll>
            </div>
        </div>
    );
}

export default WorkExpPage;