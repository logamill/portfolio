import React from "react";

import samplePDF from "../assets/resume.pdf";

export default function NewResume() {
  return (
    <>
      <div className="lm_about">
        <div className="lm_title">
          <div className="left">
            <span>Resume</span>
            <h3 className="name">Resume</h3>
          </div>
        </div>
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <embed
            src={samplePDF}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            width="500"
            height="500"
          ></embed>
        </div>
      </div>
    </>
  );
}
