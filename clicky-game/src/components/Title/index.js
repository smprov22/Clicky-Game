import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="title display-4">{props.children}</h1>
        <p className="lead subtitle">Try and keep track of all the Weasley's! Click on an image to earn points, but don't click on any more than once!</p>
      </div>
      <div className="container">
        <p className="score">Score: {props.score} | Top Score: {props.highscore}</p>
      </div>
    </div>
  );
}

export default Title;
