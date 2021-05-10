import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row" style={{marginTop: "2rem"}}>
          <div className="twelve columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top" style={{ marginTop: "3rem"}}>
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
