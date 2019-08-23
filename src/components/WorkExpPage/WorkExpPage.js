import React from "react";
import "./WorkExpPage.css";
import AkshayMTech from "./AkshayMTech.jpg";

const WorkExpPage = () => {
    return (
        <div className="workexp aboutpage" style={{ display: "flex", justifyContent: "center" }}>
            <div className="display w-100">
                <h1 className="f1 mb1">Work Experience</h1>
                <div className="center">
                    <article className="br2 ba dark-gray bg-near-white b--black-10 mv4 w-40 grow">
                        <img src={AkshayMTech} className="db w-100 br2 br--top" alt=""/>
                        <div className="pa2 ph3-ns pb3-ns">
                            <div className="dt w-100 mt1">
                                <div className="dtc">
                                    <h1 className="f3 f4-ns mv0">Macy's Systems & Technology</h1>
                                    <h2 className="f5 mv0">Data & Analytics (DaaS) Intern</h2>
                                    <h3 className="f6">2019</h3>
                                </div>
                            </div>
                            <div className="f6 lh-copy mt2 mid-gray w-100">
                                <p>Developed & debugged a GCP Dataflow application which flattened & mapped order data from a JSON payload to a GCP BigQuery database as a part of the company’s shift to Google Cloud.</p>
                                <p>Created a Confluence webpage which assisted in onboarding for the DaaS team and GCP setup.  </p>
                                <p>Built Age In Rack dashboard using React.js, Express.js, Node.js, and GCP BigQuery (full-stack web app), which displays items in a Macy’s mega-center/warehouse in tabular form, flags items that have been in storage for too long, and displays the overhead cost of storing the flagged items. Also displays a number readout and pie chart of flagged items. This project won 1st place at the 2019 Macy’s Tech Intern Hackathon. Code has been handed over to Macy’s.</p>
                                <p>Built Macy’s Acronym Dictionary, using JDBC/Java & MySQL (desktop tool) and then React.js, Express.js, Node.js, and PostgreSQL (full-stack web app). Macy’s employees can look up jargon as well as add, edit, and/or remove jargon at will. Code has been handed over to Macy’s. </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default WorkExpPage;