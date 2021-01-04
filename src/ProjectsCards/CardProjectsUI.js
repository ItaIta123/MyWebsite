import React from "react";
/*********** Icons from https://devicon.dev/ ************/
const Card = (props) => {
  return (
    <div className="cardProject" style={{ textAlign: "center" }}>
      <div className="overflow">
        <a href={props.projecturl}>
          <img
            src={props.imgsrc}
            alt="HurdlesPhotos"
            className="cardProject-img-top"
          />
        </a>
      </div>
      <div className="cardProject-body text-light">
        {/* <h4
          className="cardProject-title"
          style={{
            fontFamily: "opensans-bold",
            color: "#C1BEBB",
            fontSize: 25,
          }}
        >
          {props.title}
        </h4> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <p>{props.icon1}</p>
          <p>{props.icon2}</p>
          <p>{props.icon3}</p>
          <p>{props.icon4}</p>
          <p>{props.icon5}</p>
          <p>
            <img src={props.codeimgsrc} alt="project" />
          </p>
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
