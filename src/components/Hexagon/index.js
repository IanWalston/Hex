import React from "react";
import "./style.css";

function Hexagon(props) {
  return (
    <li>
      <div onClick={()=>{window.location = props.link}}>
          <img src={props.image} alt="" />
          <h1>{props.name}</h1>
          <p>{props.description}</p>
      </div>
    </li>
  );
}

export default Hexagon;
