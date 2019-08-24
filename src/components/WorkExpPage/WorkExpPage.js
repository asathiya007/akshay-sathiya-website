import React from "react";
import "./WorkExpPage.css";
import AkshayMTech from "./AkshayMTech.jpg";
import WorkExpCard from "./WorkExpCard";
import AnalogyPlusLogo from "./AnalogyPlusLogo.png";
import LLNLLogo from "./LLNLLogo.png";
import Scroll from "../Scroll/Scroll";

const workExps = [
    {
        employer: "Macy's Systems & Technology",
        role: "Data & Analytics (DaaS) Intern",
        time: "May 2019 - August 2019",
        descriptions: [
            "I developed & debugged a Google Cloud Platform (GCP) Dataflow application which flattened & mapped order data from a JSON payload to a GCP BigQuery database as a part of the company’s shift to Google Cloud Platform.",
            "I created a Confluence webpage which assisted in onboarding for the DaaS team and GCP setup.",
            "I built an 'Age In Rack' dashboard using React.js, Express.js, Node.js, and GCP BigQuery (full-stack web app), which displays items in a Macy’s mega-center/warehouse in tabular form, flags items that have been in storage for too long, and displays the overhead cost of storing the flagged items. Also displays a number readout and pie chart of flagged items. This project won 1st place at the 2019 Macy’s Tech Intern Hackathon. Code has been handed over to Macy’s.",
            "I built a desktop tool and a full-stack web app called'Macy’s Acronym Dictionary', using JDBC/Java & MySQL (desktop tool) and then React.js, Express.js, Node.js, and PostgreSQL (full-stack web app). This tool allows new hires, interns, etc. at Macy's to become acclimated to the work environment much more quickly by allowing them to interact with a shared repository of company jargon which will be updated and will evolve as time goes. Code has been handed over to Macy’s."
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
        <div className="workexp aboutpage" style={{ display: "flex", justifyContent: "center" }}>
            <div className="display w-100">
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