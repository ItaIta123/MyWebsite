import React from "react";
/*********** Icons from https://devicon.dev/ ************/
const Card = (props) => {
  return (
    <div className="cardProject" style={{ textAlign: "center" }}>
      <div className="overflow">
        <a href={props.projecturl}>
          <img
            className="cardProject-img-top"
            src={props.imgsrc}
            alt="ProjectPhoto"
          />
        </a>
      </div>
      <div className="bottomBorderLineWrapper">
        <p className="bottomBorderLine"></p>
      </div>
      <div className="cardProject-body text-light">
        <h4
          className="cardProject-title"
          style={{
            fontFamily: "opensans-bold",
            color: "black",
            fontSize: 14,
            padding: 8,
          }}
        >
          {props.title}
          <a href={props.sourceCode}>
            <p className="sourceCode" style={{ color: "blue" }}>
              Source Code & Video
            </p>
          </a>
        </h4>
        <div className="bottomBorderLineWrapper">
          <p className="bottomBorderLine"></p>
        </div>
        <div>
          <div
            className="iconsRow1"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <p>{props.icon1}</p>
            <p>{props.icon2}</p>
            <p>{props.icon3}</p>
          </div>
          <div
            className="iconsRow2"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p>{props.icon4}</p>
            <p>{props.icon5}</p>
          </div>
          <div
            className="iconsRow2"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{props.icon6}</p>
          </div>

          {/* <p>
            <img src={props.codeimgsrc} alt="project" />
          </p> */}
        </div>
        {/* <p
          className="cardProject-text text-secondary"
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "sans-serif",
            color: "#C1BEBB",
            fontSize: 18,
          }}
        >
          {props.text}
        </p>
        <a href="#" className="btn btn-outline-succsess">
          {"View Source Code"}
        </a> */}
      </div>
    </div>
  );
};

export default Card;
