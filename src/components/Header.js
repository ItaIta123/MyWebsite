import React, { Component } from "react";
import Typed from "react-typed";
// import Lottie from "lottie-web";
// import bigArrow from "../Lottie annimations/bigArrow.json";
// import Animation from "./LottieAnimation";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            {/* Changed the href value blow to '#none' instead of '#' */}
            <a className="mobile-btn" href="#none" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Track
                </a>
              </li>
              {/* <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline" style={{ marginTop: 50 }}>
                I am {resumeData.name}.
              </h1>
              <div style={{ marginTop: 130 }}>
                <Typed
                  className="typed-text"
                  style={{
                    fontSize: 55,
                    color: "#fff",
                    fontFamily: "sans-serif",
                  }}
                  strings={["Developer", "Student", "Athlete"]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                ></Typed>
              </div>

              {/* <h3
                style={{
                  color: "#fff",
                  fontFamily: "sans-serif ",
                  marginTop: 15,
                  fontSize: 21,
                }}
              >
                I am an {resumeData.role}. {resumeData.roleDescription}
              </h3> */}
              {/* <hr /> */}
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div style={{ marginTop: 120 }}>
                            <i className={item.className}></i>
                          </div>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
