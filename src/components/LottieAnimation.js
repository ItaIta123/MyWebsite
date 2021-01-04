// import React, { Component } from "react";
// import lottie from "lottie-web";
// import bigArrow from "../Lottie annimations/bigArrow.json";

// let animObj = null;

// class Animation extends React.Component {
//   componentDidMount() {
//     console.log("componentDidMount");

//     //call the loadAnimation to start the animation
//     animObj = lottie.loadAnimation({
//       container: this.animBox, // the dom element that will contain the animation
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: bigArrow, // the path to the animation json
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         {/* <h2>This is my Lottie Web animation</h2> */}
//         {/* This is you wrapper where animation will load */}
//         <div
//           style={{ width: 200, height: 200, alignSelf: "center" }}
//           ref={(ref) => (this.animBox = ref)}
//         ></div>
//       </div>
//     );
//   }
// }

// export default Animation;
