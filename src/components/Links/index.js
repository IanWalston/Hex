import React from "react";

function Links(props) {
  return (
    <div>
      <ul>
        {props.info.map(info => {
          return (
            <div className="p-1">
              <a href={info.link}>
                <img alt={info.name + "link"} src={info.icon} width="28px" height="auto" /> {info.name}
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
