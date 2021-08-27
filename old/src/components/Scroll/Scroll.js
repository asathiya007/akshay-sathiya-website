import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", height: "83vh"}} className="mt4 mb3">
            {props.children}
        </div>
    );
};

export default Scroll; 