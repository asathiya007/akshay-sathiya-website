import React from "react";
import "./ProjectsPage.css";
import Scroll from "../Scroll/Scroll";

const ProjectsPage = () => {
    return (
        <div className="projects" style={{ display: "flex", justifyContent: "center" }}>
            <div className="w-100">
                <h1 className="f1 mt0 mb3 pb3 pt3" style={{ backgroundColor: "black", color: "lightskyblue" }}>Projects</h1>
                <Scroll>

                </Scroll>
            </div>
        </div>
    );
};

export default ProjectsPage; 