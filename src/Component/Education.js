import React from "react";
import "../css/Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaGraduationCap } from "react-icons/fa6";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="pages">
      <div className="education">
        <VerticalTimeline lineColor="#fff">
          <VerticalTimelineElement
            className="education-timeline"
            iconStyle={{ color: "#b34ee2" }}
            icon={<FaGraduationCap />}
            date="2022-2024"
            style={{ color: "white" }}
          >
            <h3>Master Of Computer Applications</h3>
            <p>North Maharashtra University, Jalgaon.</p>
            <p>CGPA: 8.69</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="education-timeline"
            iconStyle={{ color: "#b34ee2" }}
            icon={<FaGraduationCap />}
            date="2019-2022"
            style={{ color: "white" }}
          >
            <h3> Bachelor  Computer Applications</h3>
            <p>North Maharashtra University, Jalgaon.</p>
            <p>CGPA:  9.93</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="education-timeline"
            iconStyle={{ color: "#b34ee2" }}
            icon={<FaGraduationCap />}
            date="2018-2019"
            style={{ color: "white" }}
          >
            <h3>Higher Secondary Certificate</h3>
            <p>Nashik Board.</p>
            <p>Science, Percentage: 54.00%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="education-timeline"
            iconStyle={{ color: "#b34ee2" }}
            icon={<FaGraduationCap />}
            date="2016-2017"
            style={{ color: "white" }}
          >
            <h3> Secondary School Certificate</h3>
            <p>Nashik Board.</p>
            <p>Percentage: 80.20%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
