import React from "react";
import Button from "react-bootstrap/Button";

const ProjectCard = ({ image, name, descriptions, link, linkType }) => {
    const cardClicked = () => {
        window.open(link).focus();
    }

    return (
        <article className="br3 ba dark-gray bg-near-white b--black-10 ma3 flex justify-center w-100">
            <div className="br3 br--left bg-black pa2 w-30 flex-column justify-center mobile-hide">
                <img src={image} className="db br3 w-100" height="275px" alt=""/>
            </div>
            <div className="w-70">
                <div className="dt w-100 mt1 pv2">
                    <div className="dtc">
                        <h1 className="mv0">{name}</h1>
                    </div>
                </div>
                <div className="pa2 ph3-ns pb3-ns center">
                    <div className="f6 lh-copy mt2 mid-gray w-100">
                        {
                            descriptions.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="ma3">
                    <Button variant="primary" onClick={cardClicked}>View {linkType}</Button>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard; 