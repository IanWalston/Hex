import React from "react";
import Wrapper from "./components/Wrapper";
import Links from "./components/Links";
import Hexagon from "./components/Hexagon";
import info from "./info.json";
import projects from "./projects.json";
import hexlinks from "./hexlinks.json";
import ReactTooltip from "react-tooltip";

class App extends React.Component {
  state = { info, projects, hexlinks, hexlinkson: true, darktheme: false };

  render() {
    return (
      <Wrapper darktheme={this.state.darktheme}>
        <ReactTooltip />
        <div class="row" id="header">
          <div className="col-md-8">
            <div className="row">
              <h1>
                <span>{this.state.info.name}</span>
                <span style={{ color: "grey" }}>
                  {" " + this.state.info.title}
                </span>
              </h1>
            </div>
            <div className="row">
              <p>{this.state.info.description}</p>
            </div>
          </div>
          <div className="col-md-3" style={{ "min-height": "300px" }}>
            {this.state.hexlinkson ? (
              <div>
                <ul id="projects">
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
          <div className="col-md-1">
            <div className="row mt-3">
              <img
                data-tip="list view"
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
                    : "view links as hexagon"
                }
                onClick={() =>
                  this.setState({ hexlinkson: !this.state.hexlinkson })
                }
              />
            </div>
            <div className="row my-2">
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
          </div>
        </div>
        <div class="row" />
        <ul id="projects" className="clr winkhover">
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
