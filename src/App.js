import React from "react";
import Wrapper from "./components/Wrapper";
import Links from "./components/Links";
import Hexagon from "./components/Hexagon";
import Headshot from "./components/Headshot";
import info from "./info.json";
import projects from "./projects.json";
import links from "./links.json";

class App extends React.Component {
  state = { info, projects, links };

  render() {
    return (
      <Wrapper>
        <div class="row" id="header">
          <p>
            <h1>
              <b>{this.state.info.name}</b> - {this.state.info.title}
            </h1>
          </p>
        </div>
        <div class="row">
          <div class="col-md-4">
            <Headshot />
          </div>
          <div class="col-md-4">
            <p>{this.state.info.description}</p>
          </div>
          <div class="col-md-4">
            <ul id="projects" class="clr">
              {this.state.links.map(project => {
                return <Hexagon project={project} />;
              })}
            </ul>
          </div>
        </div>
        <ul id="projects" class="clr">
          {this.state.projects.map(project => {
            return <Hexagon project={project} />;
          })}
        </ul>
        <div />
      </Wrapper>
    );
  }
}

export default App;
