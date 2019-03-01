import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="wrapper p-2 m-2 rounded border">
      <div className="container p-2 m-2 rounded border">
        <div className="row p-2 m-2 rounded border">
        <div className="p-2 m-2">
        {props.children}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
