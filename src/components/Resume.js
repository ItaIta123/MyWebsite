import React, { Component } from "react";
import icons from "../ProjectsCards/programingIcons";


export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="resume">
        <div className="resumeSectionTitle">
          <h1
            style={{
              fontFamily: "opensans-bold",
              fontSize: 50,
              color: "black",
            }}
          >
            <span>Resume</span>
          </h1>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span style={{ fontSize: 17.2 }}>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3 style={{ fontSize: 30 }}>{item.UniversityName}</h3>
                      {item.UniversityName === "Herbert Scarf Fellowship" ? (
                        <a href="https://economics.yale.edu/undergraduate/sro/summer-2021/beliefs-and-prediction-markets">
                          Fellowship Website
                        </a>
                      ) : (
                        <></>
                      )}

                      <p className="info" style={{ color: "#232425" }}>
                        {item.specialization}
                        {/* <span>&bull;</span>{" "} */}
                        <em
                          className="date"
                          style={{ color: "#232425", fontSize: 18 }}
                        >
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p style={{ color: "#232425", fontSize: 18 }}>
                        {item.Achievements}
                        <section></section>
                        {item.Achievements2}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span style={{ fontSize: 17.2 }}>Military Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3 style={{ fontSize: 30 }}>{item.CompanyName}</h3>
                      <p
                        className="info"
                        style={{ color: "#232425", fontSize: 18 }}
                      >
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em
                          className="date"
                          style={{ color: "#232425", fontSize: 18 }}
                        >
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p style={{ color: "#232425", fontSize: 18 }}>
                        {item.Achievements}
                        <section></section>
                        {item.Achievements2}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span style={{ fontSize: 17.2 }}>Programming Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              {/* <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul> */}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {icons["nodejs"]}
                {icons["mongo"]}
                {icons["express"]}
                {icons["postman"]}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {icons["python"]}
                {icons["react"]}
                {icons["pycharm"]}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {icons["javascript"]}
                {icons["c"]}
                {icons["css"]}
                {icons["html"]}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
