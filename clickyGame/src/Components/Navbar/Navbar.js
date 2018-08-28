import React from "react";
import "./Navbar.css";

const Navbar = props => {
    return (<div className="navbar">
    <h1>Clicky Game</h1>
    <h2><span>{props.result}</span></h2>
    <div className="score">
    Correct: <span>{props.correct}</span>&nbsp;
    Max Score: <span>{props.maxScore}</span>
    </div>
    </div>)
};

export default Navbar;
