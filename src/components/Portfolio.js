import React, { Component } from "react";
import Card from "../TrackCards/CardTrackUI";
// thr CSS styling for this section:
import "../TrackCards/cards.css";
import wj from "../TrackCards/cards-img/wjChampionships.jpg";
import BW from "../TrackCards/cards-img/blackNwhite.jpg";
import yale from "../TrackCards/cards-img/yale.png";
export default class Porfolio extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="trackSectionTitle">
          <h1
            style={{
              fontFamily: "opensans-bold",
              fontSize: 50,
              color: "white",
            }}
          >
            <span>Track</span>
          </h1>
        </div>
        <section className="trackProtfolio">
          <div
            className="proverb"
            style={{
              fontSize: 20,
              fontFamily: "librebaskerville-italic",
            }}
          >
            {
              <p style={{ width: 900 }}>
                “You dream. You plan. You reach. There will be obstacles. There
                will be doubters. There will be mistakes. But with hard work,
                with belief, with confidence and trust in yourself and those
                around you, there are no limits.” - Michael Phelps
              </p>
            }
          </div>
          <div className="trackCards">
            <Card
              imgsrc={wj}
              title="World Junior Championships (Bydgoszcz 2016)"
              text="Throughout my career, I achieved the minimum time for major international championships such as the Youth Summer Olympic Festival (2013), European Junior Championships (2015), and the World Junior Championships (2016)."
            />

            <Card
              imgsrc={BW}
              title="The 20th Maccabiah Games (Jerusalem 2017)"
              text="I am the current Maccabiah Games record holder in the 110 meters hurdles event (14.25s.)"
            />

            <Card
              imgsrc={yale}
              title="Harvard-Yale-Princeton Meet (Connecticut 2020)"
              text="Division-1 student-athlete representing Yale University in the Sprint Hurdles event."
            />
          </div>
        </section>

        {/* <div className="row">
          <div className="twelve columns collapsed">
            <div className="two columns header-col"></div>
            <h1
              style={{
                fontSize: 20,
                fontFamily: "librebaskerville-italic",
                color: "white",
              }}
            >
              “You dream. You plan. You reach. There will be obstacles. There
              will be doubters. There will be mistakes. But with hard work, with
              belief, with confidence and trust in yourself and those around
              you, there are no limits.” - Michael Phelps
            </h1>
            <div className="nine columns main-col">
              <div
                className="container-fluid d-flex justify-content-center"
                // style={{
                //   display: "flex",
                //   flexDirection: "row",
                //   justifyContent: "center",
                //   marginLeft: 245,
                //   // marginRight: 179,
                //   // marginTop: 7,
                // }}
              >
                <div
                  className="row"
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "row",
                  // }}
                >
                  <div
                    className="col-md-4"
                    // style={{ marginRight: 2 }}
                  >
                    <Card
                      imgsrc={wj}
                      title="World Junior Championships (Bydgoszcz 2016)"
                      text="Throughout my career I achived the minimun time for major international championships such as the Youth Summer Olympic Festival (2013), European Junior Championships (2015), and the World Junior Championships (2016)."
                    />
                  </div>
                  <div
                    className="col-md-4"
                    // style={{ marginRight: 2 }}
                  >
                    <Card
                      imgsrc={BW}
                      title="The 20th Maccabiah Games (Jerusalem 2017)"
                      text="I am the current Maccabiah Games record holder in the 110 meters hurdles event (14.25s.)"
                    />
                  </div>
                  <div
                    className="col-md-4"
                    // style={{ marginRight: 2 }}
                  >
                    <Card
                      imgsrc={yale}
                      title="Harvard-Yale-Princeton Meet (Connecticut 2020)"
                      text="Division-1 student athlete representing Yale University in the Sprint Hurdles event."
                    />
                  </div>
                </div>
              </div> */}
        {/* </div> */}
        {/* <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt=""
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div> */}
        {/* </div>
        </div> */}
      </section>
    );
  }
}
