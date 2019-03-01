import React from "react";
import "./style.css";

function Hexagon(props) {
  return (
    <div>
      <svg
        id="color-fill"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="300"
        xlink="http://www.w3.org/1999/xlink"
      >
        <text x="65" y="60">
          {props.project.name}
        </text>
        <defs>
          <pattern
            id={"image-bg" + props.project.image}
            x="0"
            y="0"
            height="300"
            width="300"
            patternUnits="userSpaceOnUse"
          >
            <image width="300" height="300" href={props.project.image} />
          </pattern>
          {console.log(props.project.image)}
          {console.log()}
        </defs>

        <polygon
          class="hex"
          points="150,300 300,225 300,75 150,0 0,75 0,225"
          fill={`url('#image-bg${props.project.image}')`}
        />
      </svg>
    </div>
  );
}

export default Hexagon;
