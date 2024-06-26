import React from "react";
import "../css/Projects.css";
import fimg from "../images/image2.png";
import lImg from "../images/image.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pages">
      <div className="Project">
        <div className="card">
          <div className="imgbx">
            <img className="fimg" src={fimg} />
          </div>

          <div className="content">
            <h3 className="project-heading">Food Court</h3>
            <p>
              The online ordering system gives restaurants the ability to
              increase Sales and expand their business by giving customer the
              facility to order food online. With an online restaurant menu
              ordering system, customer can place orders online 24*7.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="imgbx">
            <img className="fimg" src={lImg} />
          </div>

          <div className="content">
            <h3 className="project-heading1">
              Employee Leave Management System
            </h3>
            <p>
              The Leave Management System is designed to handle various aspects
              of leave management.
              Employees can log in to the system to
              apply for leave, and check the status of their applications.
              Managers, on the other hand, can easily review and approve or
              reject leave requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
