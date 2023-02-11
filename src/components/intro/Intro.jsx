import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["(Developer)","(Engineer)","(Tech Enthusiast)"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="https://raw.githubusercontent.com/vivekverma-create/images/main/scmohan.jpg" alt="Advocate S C Mohan_image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* <h2>Hi There, I'm</h2> */}
          <h1>Advocate </h1>
          <h1>Sumer Chand Mohan</h1>
          <h4>S.C. Mohan is the best lawyer in Karnal, Haryana with 30+ years of experience. 
          His expertise is in Civil cases, Criminal cases and Family law. Please feel free to reach out to him on &nbsp;
          <a href="tel:+919416032149">
               +91-9416032149</a>
          </h4>
          {/* <h3>
            <span ref={textRef}></span>
          </h3> */}
        </div>
        {/* <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a> */}
      </div>
    </div>
  );
}
