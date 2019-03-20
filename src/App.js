import React from "react";
import Wrapper from "./components/Wrapper";
import Links from "./components/Links";
import Hexagon from "./components/Hexagon";
import info from "./info.json";
import projects from "./projects.json";
import hexlinks from "./hexlinks.json";
import ReactTooltip from "react-tooltip";

var x = -Infinity;
console.log(x);

class App extends React.Component {
  state = { info, projects, hexlinks, hexlinkson: true, darktheme: false };

  render() {
    return (
      <Wrapper darktheme={this.state.darktheme}>
        <ReactTooltip />

        <div id="top">
          <div id="text">
            <h1>
              <span>{this.state.info.name}</span>
              <span style={{ color: "grey" }}>
                {" " + this.state.info.title}
              </span>
            </h1>
            <p>{this.state.info.description}</p>
          </div>
          <div>
            <div id="controls">
              <img
                id="list-control"
                alt="hex view controller"
                width="32px"
                height="32px"
                src={
                  this.state.hexlinkson
                    ? "./img/icons/list.png"
                    : "./img/icons/hexagon.png"
                }
                data-tip={
                  this.state.hexlinkson
                    ? "view links as list"
                    : "view links as hexagons"
                }
                onClick={() =>
                  this.setState({ hexlinkson: !this.state.hexlinkson })
                }
              />
              <input
                type="button"
                value="Dark"
                style={{ backgroundColor: "black", color: "white" }}
                className=""
                onClick={() =>
                  this.setState({ darktheme: !this.state.darktheme })
                }
              />
            </div>

            <div id="links">
              {this.state.hexlinkson ? (
                <div>
                  <ul class="hexagons">
                    {this.state.hexlinks.map(link => {
                      return (
                        <Hexagon
                          tooltip={link.tooltip}
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
        </div>

        <div id="projects-view">
          <p id="projects-header">PROJECTS</p>
          <ul className="hexagons clr winkhover">
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
        </div>
        <div />
      </Wrapper>
    );
  }
}

export default App;
