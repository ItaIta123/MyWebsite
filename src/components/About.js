import React, { Component } from "react";
import Card from "../ProjectsCards/CardProjectsUI";
import "../ProjectsCards/projectcards.css";
import tracker from "../ProjectsCards/projects-cards-img/tracker.png";
import spotify from "../ProjectsCards/projects-cards-img/spotifylyrics.png";
import karen from "../ProjectsCards/projects-cards-img/karen.png";
import personalWebsite from "../ProjectsCards/projects-cards-img/personalWebsite.png";
import icons from "../ProjectsCards/programingIcons";
import scrapy from "../ProjectsCards/projects-cards-img/scrapy.png";
import selenium from "../ProjectsCards/projects-cards-img/selenium.png";
import insta from "../ProjectsCards/projects-cards-img/insta.png";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src="images/profilepic.jpg"
              alt="profilePic"
              style={{ marginTop: 10 }}
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
            </div>
            {/* /************ SECOND ROW  **************/}
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
            </div>
            {/* <div
              className="container-fluid d-flex justify-content-center"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginRight: 179,
                marginTop: 80,
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
                    imgsrc={wj}
                    title="World Junior Championships (Bydgoszcz 2016)"
                    text="Throughout my career I achived the minimun time for major international championships such as the Youth Summer Olympic Festival (2013), European Junior Championships (2015), and the World Junior Championships (2016)."
                  />
                </div>
                <div className="col-md-4" style={{ marginRight: 50 }}>
                  <Card
                    imgsrc={BW}
                    title="The 20th Maccabiah Games (Jerusalem 2017)"
                    text="I am the current Maccabiah Games record holder in the 110 meters hurdles event (14.25s.)"
                  />
                </div>
                <div className="col-md-4" style={{ marginRight: 50 }}>
                  <Card
                    imgsrc={yale}
                    title="Harvard-Yale-Princeton Meet (Connecticut 2020)"
                    text="Division-1 student athlete representing Yale University in the Sprint Hurdles event."
                  />
                </div>
              </div>
            </div> */}

            {/* <p style={{ marginTop: 400 }}></p> */}

            {/* <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
