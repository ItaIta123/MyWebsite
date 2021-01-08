import React, { Component } from "react";
import "../myLayout.css";
import Card from "../ProjectsCards/CardProjectsUI";
// import "../ProjectsCards/projectcards.css";
import tracker from "../ProjectsCards/projects-cards-img/tracker.png";
import spotify from "../ProjectsCards/projects-cards-img/spotifylyrics.png";
import karen from "../ProjectsCards/projects-cards-img/karen.png";
import personalWebsite from "../ProjectsCards/projects-cards-img/personalWebsite.png";
import icons from "../ProjectsCards/programingIcons";
import insta from "../ProjectsCards/projects-cards-img/insta.png";
export default class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <div className="projects">
          <div className="projectsSectionTitle">
            <h1
              style={{
                fontFamily: "opensans-bold",
                fontSize: 50,
                color: "white",
              }}
            >
              <span>Some of My Solo Projects</span>
            </h1>
          </div>

          {/**************** ROW 1 ********************/}
          <div
            className="projectsRow1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Card
              imgsrc={tracker}
              projecturl="https://github.com/ItaIta123"
              title="Can't remember the last off-road trail you drove in/hiked at? Then Tracker is for you! Tracker is an App that records and presents information about your track. Whether you are running, hiking, or driving, Tracker will save your trail and show it on a map with valuable information such as maximum speed in M/S and K/H, and total distance traveled."
              icon1={icons["mongo"]}
              icon2={icons["express"]}
              icon3={icons["nodejs"]}
              icon4={icons["react"]}
              icon5={icons["amazon"]}
            />
            <Card
              imgsrc={spotify}
              projecturl="https://github.com/ItaIta123/Spotify-Lyrics"
              title="Had enough of googling 'X lyrics' every time you want to look for your current playing song's lyrics? Then check out Spotify-Lyrics! Spotify-Lyrics is a Python program I developed in order to supply adequate lyrics support to Spotify's app. Integrating Spotify's API with Web scrapping, I developed a program that enables the user to listen to his favorite playlists, songs, and artists all supported with lyrics!"
              icon2={icons["python"]}
              // icon2={icons["pycharm"]}
              icon3={icons["spotify"]}
            />
            <Card
              imgsrc={personalWebsite}
              projecturl="https://github.com/ItaIta123"
              title="In our web-oriented developing world having your own website is a must. This is why I created my own resume website using React framework. It was a challenging and very tedious process but I enjoyed every bit of it and learned a lot about the front-end world."
              icon1={icons["javascript"]}
              icon2={icons["html"]}
              icon3={icons["css"]}
              icon6={icons["react"]}
            />
          </div>
          {/* **************** ROW 2 ****************** */}
          <div
            className="projectsRow2"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Card
              imgsrc={insta}
              projecturl="https://github.com/ItaIta123/Instagram-bot-for-buisnesses"
              title="Marketing a business is hard, especially on social media platforms where there are tons of other businesses just like yours. InstaBot is a Python automation tool I developed using Selenium that makes your computer work for you. Using InstaBot your computer will press the like button of X number of photos you choose in any #Hash_Tag you choose and leave any comment you want it to leave. This way you will be able to increase your business page exposure by at least 30%."
              icon1={icons["python"]}
              icon2={icons["pycharm"]}
              icon3={icons["instagram"]}
            />

            <Card
              imgsrc={karen}
              projecturl="https://github.com/ItaIta123/PersonalAssistant"
              title="Created a Python program that uses voice queries, gesture-based control, and a natural-language user interface to provide information about the weather, Point(s) Of Interest, events in history, public figures and is able to calculate ETA, and send emails. Implemented Google’s different APIs such as Geocoding, Places, and Distance Matrix APIs."
              icon1={icons["python"]}
              icon2={icons["pycharm"]}
              icon3={icons["google"]}
            />
          </div>
        </div>
      </section>
    );
  }
}
