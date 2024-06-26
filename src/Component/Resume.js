import React from "react";
import resumedow from "../images/Amu.pdf";
import "../css/Resume.css";

const Resume = () => {
  return (
    <div className="pages">
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <h1>Resume</h1> */}

        <div className="resume">
          <h3>For More Information Download My CV</h3>
        </div>

        <a
          href={resumedow}
          download="Amruta Kulkarni"
          target="_blank"
          rel="noreferrer"
        >
          <button className="downloadButton">📜 Download</button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
