import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../myLayout.css";
import "../ProjectsCards/projectcards.css";
import profilepic from "../profilepic/profilepicAvatar-min.jpg";

export default class About extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <section className="aboutSec">
          <div className="aboutSectionTitle">
            <h5
              style={{
                fontFamily: "opensans-bold",
                fontSize: 50,
                color: "white",
              }}
            >
              <span>About Me</span>
            </h5>
          </div>
          <div className="aboutRow">
            <img className="profilePic" src={profilepic} alt="profilePic" />
            <div className="aboutText">
              {/* <p
                className="aboutTitle"
                style={{
                  fontFamily: "opensans-bold",
                  fontSize: 50,
                  color: "white",
                }}
              >
                About Me
              </p> */}
              <p
                className="aboutcontent"
                style={{ fontSize: 28, color: "#CACADA" }}
              >
                My name is Itamar Fayler. I am an aspiring Software Engineer
                majoring in Computer Science and Economics at Yale University. I
                am currently exploring my interests in a number of topics
                including Software Engineering, Data Science, Machine Learning,
                and App Development. In addition, I am a student
                athlete, representing Yale University in the Sprint Hurdles
                events.
              </p>
            </div>
          </div>
          {/* <div className="bottomBorderLineWrapper">
            <p className="bottomBorderLine"></p>
          </div> */}
          <div className="videowrapper">
            <p
              className="videoTitle"
              style={{
                fontSize: 23,
                color: "#CACADA",
                width: 1000,
                textAlign: "center",
              }}
            >
              Here is a video of me clearing some 42 inch (107 cm) hurdles on my
              way to break the Maccabiah games 110 meters hurdles record (second
              from the left).
            </p>
            <ReactPlayer
              className="videoYoutube"
              url="https://youtu.be/X9sLPu-bxWE"
              controls={true}
              volume={0.09}
            />
          </div>
        </section>

        {/* <section className="aboutSection">
          <div className="Text"></div>
        </section>

        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="profilePic"
            />
          </div>

          <div className="nine columns main-col">
            <h2 style={{ fontSize: 50, marginLeft: 45, marginBottom: 10 }}>
              About Me
            </h2>
            <p
              style={{
                fontSize: 25,
                marginTop: 25,
                marginLeft: 45,
                color: "#C1BEBB",
                fontFamily: "sans-serif",
              }}
            >
              {resumeData.aboutme}
            </p>

            <ReactPlayer
              url="https://www.youtube.com/watch?v=X9sLPu-bxWE"
              controls={true}
              volume={0.1}
            />

            <div
              className="container-fluid d-flex justify-content-center"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginRight: 225,
                marginTop: 150,
              }}
            >
              <div
                className="row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div className="col-md-4" style={{}}>
                  <Card
                    imgsrc={tracker}
                    projecturl="https://github.com/ItaIta123"
                    icon1={icons["mongo"]}
                    icon2={icons["express"]}
                    icon3={icons["nodejs"]}
                    icon4={icons["react"]}
                    icon5={icons["amazon"]}
                  />
                </div>
                <div
                  className="col-md-4"
                  style={{ marginRight: 90, marginLeft: 90 }}
                >
                  <Card
                    imgsrc={spotify}
                    projecturl="https://github.com/ItaIta123/Spotify-Lyrics"
                    icon1={icons["python"]}
                    icon2={icons["pycharm"]}
                    icon3={icons["spotify"]}
                    codeimgsrc={scrapy}
                  />
                </div>
                <div className="col-md-4" style={{}}>
                  <Card
                    imgsrc={personalWebsite}
                    projecturl="https://github.com/ItaIta123"
                    icon1={icons["javascript"]}
                    icon2={icons["react"]}
                    icon3={icons["css"]}
                    icon4={icons["html"]}
                  />
                </div>
              </div>
            </div> */}
        {/* /************ SECOND ROW  **************/}
        {/* <div
              className="container-fluid d-flex justify-content-center"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginRight: 225,
                marginTop: 150,
              }}
            >
              <div
                className="row"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div className="col-md-4" style={{ marginRight: 50 }}>
                  <Card
                    imgsrc={insta}
                    projecturl="https://github.com/ItaIta123/Instagram-bot-for-buisnesses"
                    icon1={icons["python"]}
                    codeimgsrc={selenium}
                    icon2={icons["pycharm"]}
                    icon3={icons["instagram"]}
                  />
                </div>
                <div className="col-md-4" style={{ marginLeft: 50 }}>
                  <Card
                    imgsrc={karen}
                    projecturl="https://github.com/ItaIta123/PersonalAssistant"
                    icon1={icons["python"]}
                    icon2={icons["pycharm"]}
                    icon3={icons["google"]}
                    codeimgsrc={scrapy}
                  />
                </div>
              </div>
            </div> */}

        {/* </div>
        </div> */}
      </section>
    );
  }
}
