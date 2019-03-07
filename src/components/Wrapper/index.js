import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className={`wrapper p-2 ${props.darktheme?"darkwrapper":null}`}>
      <div className={`container p-2 m-2 `}>
        <div className="row p-2 m-2">
        <div className="p-2 m-2">
        {props.children}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
