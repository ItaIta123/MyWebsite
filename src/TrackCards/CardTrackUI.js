import React from "react";
const Card = (props) => {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div className="overflow">
        <img src={props.imgsrc} alt="HurdlesPhotos" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4
          className="card-title"
          style={{
            fontFamily: "librebaskerville-italic",
            color: "#C1BEBB",
            fontSize: 25,
          }}
        >
          {props.title}
        </h4>
        <p
          className="card-text text-secondary"
          style={{ fontFamily: "sans-serif", color: "#C1BEBB", fontSize: 18 }}
        >
          {props.text}
        </p>
        {/* <a href="#" className="btn btn-outline-succsess">
          {" "}
          Go Anywhere
        </a> */}
      </div>
    </div>
  );
};

export default Card;
