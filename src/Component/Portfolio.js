import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import icon from "../images/woman logo.jpg";

const Portfolio = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        fixed="top"
        className="portfolio-navbar"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand className="nav-brand"> <img src={icon} className="img" /><div
              style={{
                color: " #b34ee2",
                marginTop: "5px",
                marginLeft: "20px",
              }}
            > My Portfolio
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} style={{
                backgroundColor: " #b34ee2"}}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="home"
                  className="nav-link1"
                  onClick={() => setExpanded(!expanded)}
                >
                  HOME
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="experience"
                  className="nav-link1"
                  onClick={() => setExpanded(!expanded)}
                >
                  EXPERIENCE
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="education"
                  className="nav-link1"
                  onClick={() => setExpanded(!expanded)}
                >
                  EDUCATION
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="skills"
                  className="nav-link1"
                  onClick={() => setExpanded(!expanded)}
                >
                  SKILLS
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="projects"
                  className="nav-link1"
                  onClick={() => setExpanded(!expanded)}
                >
                  PROJECTS
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="resume"
                  className="nav-link1"
                  onClick={() => setExpanded(!expanded)}
                >
                  RESUME
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="contact"
                  className="nav-link1"
                  onClick={() => setExpanded(!expanded)}
                >
                  CONTACT
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Portfolio;
