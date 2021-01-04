import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    const linkedinurl = (
      <a
        href="https://www.linkedin.com/in/itamar-fayler-110/"
        style={{ color: "rgb(193, 190, 187)", fontSize: 18 }}
      >
        {"linkedin.com/in/itamar-fayler-110/"}
      </a>
    );
    const email = (
      <a
        href="mailto:itamar.fayler@yale.edu"
        style={{ color: "rgb(193, 190, 187)", fontSize: 18 }}
      >
        {"Itamar.fayler@yale.edu"}
      </a>
    );
    const phone = (
      <a
        href="https://www.linkedin.com/in/itamar-fayler-110/"
        style={{ color: "rgb(193, 190, 187)", fontSize: 18 }}
      >
        {"+972(0)507710140 "}
      </a>
    );
    return (
      <section id="contact" style={{}}>
        <div className="row section-head" style={{}}>
          <div className="ten columns" style={{}}>
            <p
              className="lead"
              style={{ color: "white", marginLeft: 282, fontSize: 24 }}
            >
              Feel free to contact me in any matter
            </p>
          </div>
        </div>
        <div className="row" style={{}}>
          <aside className="eigth columns footer-widgets" style={{}}>
            <div
              className="widget"
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 160,
              }}
            >
              <h4 style={{ marginRight: 40 }}>{linkedinurl}</h4>
              <h4 style={{ marginRight: 40, marginLeft: 40 }}>{email}</h4>
              <h4 style={{ marginLeft: 40 }}>{phone}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
