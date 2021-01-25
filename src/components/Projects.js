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
import businessLocator from "../ProjectsCards/projects-cards-img/businessLocator.png";
import covid from "../ProjectsCards/projects-cards-img/covid19Ststs.png";

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
              <span className="projectPageTitle">Some of My Projects</span>
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
              projecturl="https://github.com/ItaIta123/TrackerApp"
              title="Can't remember the last off-road trail you drove in/hiked at? Then you must try out Tracker! Tracker is an App that records and presents information about your path. Whether you are running, hiking, or driving, Tracker will save your trail and show it on a map with valuable information such as maximum speed in M/S and K/H, and total distance traveled."
              sourceCode="https://github.com/ItaIta123/TrackerApp"
              icon1={icons["mongo"]}
              icon2={icons["express"]}
              icon3={icons["nodejs"]}
              icon4={icons["react"]}
              icon5={icons["amazon"]}
            />
            <Card
              imgsrc={spotify}
              projecturl="https://github.com/ItaIta123/Spotify-Lyrics"
              title="Tired of using Google to find songs lyrics? Then check out Spotify-Lyrics! Spotify-Lyrics is a Python program I developed in order to supply adequate lyric support to Spotify's app. Integrating Spotify's API with Web scraping, I developed a program that enables the user to listen to his/hers favorite playlists, songs, and artists all supported with lyrics!"
              sourceCode="https://github.com/ItaIta123/Spotify-Lyrics"
              icon2={icons["python"]}
              // icon2={icons["pycharm"]}
              icon3={icons["spotify"]}
            />
            <Card
              imgsrc={businessLocator}
              projecturl="https://github.com/ItaIta123/BusinessSearchApp"
              title="Looking for a restaurant that serves your favorite food? Need new shoes? What about purchasing a new laptop? Now with the Business Locator app, you can do all that and more! Business Locator app lets you search for any business you need and shows you the results already cataloged into three lists, from cheap to expensive. In addition, the app also provides valuable information such as the address, phone, and open-close hours of the business."
              sourceCode="https://github.com/ItaIta123/BusinessSearchApp"
              icon1={icons["javascript"]}
              icon2={icons["yelp"]}
              icon3={icons["react"]}
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
              imgsrc={covid}
              projecturl="https://github.com/ItaIta123/Instagram-bot-for-buisnesses"
              title="Interested in your country's Covid-19 statistical data? The number of confirmed cases? Recovered? Deaths? Check out Covid-19 Stats App! Covid-19 Stats App is an app I developed that lets you choose ANY country in the world and view its Covid-19 pandemic stats. From numbers to data visualization, all in a simple and convenient to use app."
              sourceCode="https://github.com/ItaIta123/Covid-19-Stats-App"
              icon1={icons["react"]}
              icon2={icons["javascript"]}
              icon3={icons["postman"]}
            />
            <Card
              imgsrc={personalWebsite}
              projecturl="https://github.com/ItaIta123/MyWebsite"
              title="In our web-oriented developing world having your own website is a must. This is why I created my own resume website using React framework. It was a challenging and very tedious process but I enjoyed every bit of it and learned a lot about the front-end world."
              sourceCode="https://github.com/ItaIta123/MyWebsite"
              icon1={icons["javascript"]}
              icon2={icons["html"]}
              icon3={icons["css"]}
              icon6={icons["react"]}
            />
            <Card
              imgsrc={karen}
              projecturl="https://github.com/ItaIta123/PersonalAssistant"
              title="Created a Python program that uses voice queries, gesture-based control, and a natural-language user interface to provide information about the weather, Point(s) Of Interest, events in history, public figures and is able to calculate ETA, and send emails. Implemented Google’s different APIs such as Geocoding, Places, and Distance Matrix APIs."
              sourceCode="https://github.com/ItaIta123/PersonalAssistant"
              icon1={icons["python"]}
              icon2={icons["pycharm"]}
              icon3={icons["google"]}
            />
          </div>
          {/* **************** ROW 3 ****************** */}
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
              sourceCode="https://github.com/ItaIta123/Instagram-bot-for-buisnesses"
              icon1={icons["python"]}
              icon2={icons["pycharm"]}
              icon3={icons["instagram"]}
            />
          </div>
        </div>
      </section>
    );
  }
}
