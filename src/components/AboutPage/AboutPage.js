import React from "react";
import "./AboutPage.css";
import AkshayFBPic from "./AkshayFBPic.jpg";

const AboutPage = () => {
    return (
        <div className="aboutpage" style={{display: "flex", justifyContent: "center"}}>
            <div className="intro">
                <h1 className="f1">About Me</h1>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={AkshayFBPic} alt="" width="15%" style={{objectFit: "cover"}} className="br4 fbPic"/>
                    <div className="w-50 ml4 text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem cumque nemo rem consequuntur. Assumenda, tenetur, ipsam facere animi vitae nulla minus rem quisquam, saepe unde incidunt ad veniam aliquid.</p>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem cumque nemo rem consequuntur. Assumenda, tenetur, ipsam facere animi vitae nulla minus rem quisquam, saepe unde incidunt ad veniam aliquid.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem cumque nemo rem consequuntur. Assumenda, tenetur, ipsam facere animi vitae nulla minus rem quisquam, saepe unde incidunt ad veniam aliquid.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem cumque nemo rem consequuntur. Assumenda, tenetur, ipsam facere animi vitae nulla minus rem quisquam, saepe unde incidunt ad veniam aliquid.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem cumque nemo rem consequuntur. Assumenda, tenetur, ipsam facere animi vitae nulla minus rem quisquam, saepe unde incidunt ad veniam aliquid.</p>
                        <br />
                    </div>
                </div>
                <div className="mt4">
                    <h1>Learn more about me below!</h1>
                </div>
            </div>
        </div>
    );
};

export default AboutPage; 