import React from "react";
import "../css/Experience.css";
import { Card } from "react-bootstrap";

const Experience = () => {
  return (
    <div className="pages">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p>Technoweit, Jalgaon</p>
          </div>
          <div class="flip-card-back">
            <p>Working at Technoweit as a MERN stack developer has been an enriching experience 
              where I've had the opportunity to work on diverse projects and enhance my skills in web development.
              I've significantly strengthened my proficiency in MongoDB, Express.js, React.js, and Node.js (MERN stack), 
              which are crucial technologies in modern web development.I've been involved in several projects where I've 
              contributed to both frontend and backend development. This has given me a holistic understanding of web 
              application development and the challenges involved in creating scalable and responsive applications.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
