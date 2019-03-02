import React from "react";
import "./style.css";

function Hexagon(props) {
  return  <li>
  <div>
    <img src={props.project.image} alt=""/>
    {/* <p>{props.project.name}</p> */}
</div>
</li>
}

export default Hexagon;
