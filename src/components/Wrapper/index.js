import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className={`wrapper ${props.darktheme ? "darkwrapper" : null}`}>
      {props.children}
    </div>
  );
}

export default Wrapper;
