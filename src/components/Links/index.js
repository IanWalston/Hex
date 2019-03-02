import React from "react";

function Links(props) {
  return (
    <div>
      <ul>
      {props.info.map(info=>{
        return (<div>
          <img src={info.icon} width="24px" height="auto"/><a href={info.link}>  {info.name}</a>
        </div>)
      })}

      </ul>
    </div>
  );
}

export default Links;
