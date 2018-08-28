import React from "react";
import "./wrapper.css";

const Wrapper = props => {
return (
    <div className="wrapper">
    <div className = "row col-lg-8 text-center">
    {props.children}
    </div>
    </div>
);
}

export default Wrapper;
