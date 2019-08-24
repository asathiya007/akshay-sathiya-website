import React from "react";

const WorkExpCard = ({employer, role, time, descriptions, image}) => {
    return (
        <div className="center pa4">
            <article className="br3 ba dark-gray bg-near-white b--black-10 w-50 grow">
                <img src={image} className="db w-100 br3 br--top" alt="" />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <h1 className="f3 f4-ns mv0">{employer}</h1>
                            <h2 className="f5 mv0">{role}</h2>
                            <h3 className="f6">{time}</h3>
                        </div>
                    </div>
                    <div className="f6 lh-copy mt2 mid-gray w-100">
                        {
                            descriptions.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))
                        }
                    </div>
                </div>
            </article>
        </div>
    );
}; 

export default WorkExpCard; 