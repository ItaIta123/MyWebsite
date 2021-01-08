import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Helps Deal witht he changed scales when opening the website with an iphone: */}
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"
        ></meta>

        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Projects />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
