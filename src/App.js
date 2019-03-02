import React from "react";
import Wrapper from "./components/Wrapper";
import Links from "./components/Links";
import Hexagon from "./components/Hexagon";
import Headshot from "./components/Headshot";
import info from "./info.json";
import projects from "./projects.json";
import hexlinks from "./hexlinks.json";

class App extends React.Component {
  state = { info, projects, hexlinks, hexlinkson: true, darktheme: false };

  render() {
    return (
      <Wrapper darktheme={this.state.darktheme}>
        <div class="row" id="header">
          <div className="col-md-11">
            <p>
              <h1>
                <b>{this.state.info.name}</b> - {this.state.info.title}
              </h1>
            </p>
          </div>
          <div className="col-md-1">
            <input
              type="button"
              value="Dark"
              className="btn-secondary"
              onClick={() =>
                this.setState({ darktheme: !this.state.darktheme })
              }
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <Headshot />
          </div>
          <div class="col-md-4">
            <p>{this.state.info.description}</p>
          </div>
          <div class="col-md-4">
          <img
alt="hex view controller"
width="32px"
src={this.state.hexlinkson?"./img/icons/list.png":"./img/icons/hexagon.png"}
onClick={() => this.setState({ hexlinkson: !this.state.hexlinkson })}
/>
            {this.state.hexlinkson ? (
              <div>
                <ul id="projects">
                  {this.state.hexlinks.map(link => {
                    return (
                      <Hexagon
                        image={link.hexicon}
                        link={link.link}
                        darktheme={this.state.darktheme}
                      />
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div>
                <Links info={this.state.hexlinks} />
              </div>
            )}
          </div>
        </div>
        <ul id="projects" className="clr">
          {this.state.projects.map(project => {
            return (
              <Hexagon
                image={project.image}
                link={project.link}
                name={project.name}
                description={project.description}
                darktheme={this.state.darktheme}
              />
            );
          })}
        </ul>
        <div />
      </Wrapper>
    );
  }
}

export default App;
