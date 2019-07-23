import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="title display-4">{props.children}</h1>
        <p className="lead">Try and keep track of all the Weasley's!</p>
      </div>
      <div className="container">
        <p className="guessOutcome">You guessed (in)correctly!</p>
        <p className="score">Score: 0 | Top Score: 0</p>
      </div>
    </div>
  );
}

export default Title;
