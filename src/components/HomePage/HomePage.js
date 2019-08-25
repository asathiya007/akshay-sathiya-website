import React from "react";
import "./HomePage.css";

const HomePage = () => {
    const nameClicked = () => {
        window.open("https://akshaysathiya.herokuapp.com/");
    }

    return (
        <div className="content center pt4">
            <div className="title">
                <h1 className="grow" onClick={nameClicked}>AKSHAY SATHIYA</h1>
                <div className="typewriter grow">
                    <h3 className="bg-gray br3 ph2" style={{fontSize: "2vw"}}>Hey there, welcome to my website!</h3>
                </div>
            </div>
        </div>
    );
};

export default HomePage;