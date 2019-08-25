import React from "react";
import Button from "react-bootstrap/Button";
import "./ProjectCard.css";

const ProjectCard = ({ image, name, descriptions, link, linkType }) => {
    const cardClicked = () => {
        window.open(link).focus();
    }

    return (
        <article className="br3 ba dark-gray bg-near-white b--black-10 w-30 ma3">
            <div className="w-100 bg-black br3 br--top center pa2">
                <img src={image} className="db br3" alt="" height="200px"/>
            </div>
            <div className="pa2 ph3-ns pb3-ns" style={{height: "38vh"}}>
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="mv0" style={{ fontSize: "1.5vw" }}>{name}</h1>
                    </div>
                </div>
                <div className="f6 lh-copy mt2 mid-gray w-100" style={{ fontSize: "0.8vw"}}>
                    {
                        descriptions.map((desc, i) => (
                            <p key={i}>{desc}</p>
                        ))
                    }
                </div>
                <Button variant="primary" onClick={cardClicked} style={{ fontSize: "0.8vw"}}>{linkType}</Button>
            </div>
        </article>
    );
};

export default ProjectCard; 