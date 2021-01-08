import React, { Component } from "react";
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
              <span style={{ fontSize: 20 }}>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3 style={{ fontSize: 30 }}>{item.UniversityName}</h3>
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
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */}

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span style={{ fontSize: 20 }}>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
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
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
