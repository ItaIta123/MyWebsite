import React, { Component } from "react";
import Particles from "react-particles-js";
import "../myLayout.css";
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <section className="section">
          {/* <div className="particaleswrapper"> */}
          <Particles
            className="tsparticles-canvas-el"
            params={{
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
              particles: {
                number: {
                  value: 80,
                  dencity: {
                    eneable: true,
                    value_area: 10,
                  },
                },

                shape: {
                  type: "circle",
                  stroke: {
                    width: 4,
                    color: { value: "#cc5200" },
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 30,
                  opacity: 0.4,
                  width: 9,
                },
              },
            }}
          />
          {/* </div> */}
          <div className="title" style={{ fontSize: 50, color: "white" }}>
            Get In Touch
          </div>
          <p
            className="text"
            style={{ fontSize: 30, color: "rgb(193, 190, 187)" }}
          >
            Feel free to contact me on any matter!
          </p>
          <a href="mailto:itamar.fayler@yale.edu">
            <div
              className="bigButton"
              style={{ fontSize: 25, fontfamily: "opensans-bold" }}
            >
              Send Me an Email
            </div>
          </a>
        </section>
      </section>
      // <section id="contact" style={{}}>
      //   <div className="row section-head" style={{}}>
      //     <div
      //       // className="ten columns"
      //       style={{}}
      //     >
      //       <p
      //         // className="lead"
      //         style={{ color: "white", marginLeft: 282, fontSize: 24 }}
      //       >
      //         Get In Touch
      //       </p>
      //     </div>
      //   </div>
      //   <div className="row" style={{}}>
      //     <aside className="eigth columns footer-widgets" style={{}}>
      //       <div
      //         className="widget"
      //         style={{
      //           display: "flex",
      //           flexDirection: "row",
      //           marginRight: 160,
      //         }}
      //       >
      //         {/* <h4 style={{ marginRight: 40 }}>{linkedinurl}</h4>
      //         <h4 style={{ marginRight: 40, marginLeft: 40 }}>{email}</h4>
      //         <h4 style={{ marginLeft: 40 }}>{phone}</h4> */}
      //       </div>
      //     </aside>
      //   </div>
      //   <div className="bigButton">
      //     <p className="buttonText">Send Me an Email</p>
      //   </div>
      // </section>
    );
  }
}
