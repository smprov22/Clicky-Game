import React from "react";
import "./style.css";

function WhichWeasley(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default WhichWeasley;
