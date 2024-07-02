import React from "react";
import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import "../css/Skills.css";

const Skills = () => {
  return (
    <div className="pages">
      {/* <h1 className="myskill-heading">My Skills</h1> */}
      <div className="progress-bar">
        <FaHtml5 style={{ color: "red" }} />
        <span className="name">HTML</span>
        <progress value={0.8} style={{ width: "800px"}}  /><p className="tag">70%</p>

        <FaCss3 style={{ color: "yellow" }} />
        <span className="name">CSS</span>
        <progress value={0.9} style={{ width: "800px" }}/><p>70%</p>

        <FaNodeJs style={{ color: "pink" }} />
        <span className="name">Node Js</span>
        <progress value={0.6} style={{ width: "800px" }} /><p>50%</p>

        <RiReactjsFill style={{ color: "blue" }} />
        <span className="name">React Js</span>
        <progress value={0.8} style={{ width: "800px" }} /><p>70%</p>

        < DiJavascript  style={{ color: "white" }} />
        <span className="name">Javascript</span>
        <progress value={0.9} style={{ width: "800px" }} /><p>75%</p>

        <SiMongodb  style={{ color: "green" }} />
        <span className="name">Mongodb</span>
        <progress value={0.6} style={{ width: "800px" }} /><p>50%</p>
      </div>
    </div>
  );
};

export default Skills;
