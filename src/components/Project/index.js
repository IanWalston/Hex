import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div class="row rounded border">
      <div class="col-md-4">
        <div class="row">
          <h3>{props.name}</h3>
        </div>
        
        <img alt={props.name + " image"} width="350px" src={props.image} />
      </div>
      <div class="col-md-8">
        <div class="row">{props.description}</div>
      </div>
    </div>
  );
}

export default Project;
