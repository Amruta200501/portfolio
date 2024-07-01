import React from "react";
import resumedow from "../images/Amruta Resume.pdf";
import "../css/Resume.css";

const Resume = () => {
  return (
    <div className="pages">
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <h1>Resume</h1> */}

        <div className="resume">
          <h3>Download My Resume to Explore My Projects and Skills..!</h3>
        </div>
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
  );
};

export default Resume;
