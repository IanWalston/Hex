import React from "react";
import "./style.css";

function Hexagon(props) {
  return (
    <li>
      <div onClick={()=>{window.location = props.link}}>
          <img className={props.darktheme?`inverted`:null} src={props.image} alt="" />
      
          {/* <p>{props.project.name}</p> */}
      </div>
    </li>
  );
}

export default Hexagon;
