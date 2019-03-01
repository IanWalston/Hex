import React from "react";

function Links(props) {
  return (
    <div>
      <h2>Links</h2>
      <ul>
        <li>
          <a href={`mailto:${props.info.email}`}>Email: {props.info.email}</a>
        </li>
        <li>
          <a href="tel:+13017856988">Phone: (301)785-6988</a>
        </li>
        <li>
          <a href={props.info.LinkedIn}>LinkedIn</a>
        </li>
        <li>
          <a href={props.info.Github}>Github</a>
        </li>
        <li>
          <a href={props.info.resume}>Resume</a>
        </li>
        <li>
          <a href={props.info.tutorprofile}>Hey Tutor Profile</a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
