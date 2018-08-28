import React from "react";
import "./character.css";

const character = props => 
    (
        <div className="img-container" key={props.key} id= {props.id} clicked={props.clicked} name={props.name} img={props.img} onClick = {() => {props.handleOnClick(props.id)}} >
        <img alt={props.name} src={props.img}/>
        </div>
    );

export default character;

