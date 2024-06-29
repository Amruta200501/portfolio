import React from "react";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { SiIndeed } from "react-icons/si";
import "../css/Contact.css";
import { Card, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="pages">
      <div className="heading">
        <h3>Let's Work Together...!</h3>
      </div>

      <div className="contact">
        <div className="textcontainer">
          <div className="item">
            <MdEmail className="icon" />
            <h3>Mail</h3>
            <span>kulkarniamruta026@gmail.com</span>
          </div>

          <div className="item">
            <FaLocationDot className="icon" />
            <h3>Address</h3>
            <span>Prem nager,Jalgaon</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8788.24832214547!2d75.54017099808402!3d21.011222857012786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fc15c2764d9%3A0x7022037c028c739c!2sPrem%20Nagar%2C%20Muktainagar%2C%20Jalgaon%2C%20Maharashtra%20425001!5e0!3m2!1sen!2sin!4v1719394834074!5m2!1sen!2sin"
              width="300"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="item">
            <IoCall className="icon" />
            <h3>Phone</h3>
            <span>8857837529</span>
          </div>
        </div>

        <div className="formcontainer">
          <Form>
            <div className="input-box">
              <input type="text" required="required" />
              <span>Your Name</span>
            </div>

            <div className="input-box">
              <input type="text" required="required" />
              <span>Your Email</span>
            </div>

            <div className="input-box">
              <textarea />
              <span>Type Your Message...</span>
            </div>
            <button className="submit-btn">Submit</button>
            <div className="icon-div">
              <a
                href="https://www.linkedin.com/in/amruta-kulkarni-5651a128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="items"
              >
                <FaLinkedin className="icon1" />
              </a>
              <a
                href="https://github.com/Amruta200501"
                target="_blank"
                className="items"
              >
                <FaGithub className="icon1" />
              </a>
            </div>
          </Form>
        </div>
        {/* <Card className="contact-card">
          <a
            href="https://www.linkedin.com/in/amruta-kulkarni-5651a128a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icon" />
          </a>
       
          <a
            href="mailto:kulkarniamruta026@gmail.com"
            target="_blank"
            className="items"
          >
            <MdEmail className="icon" />
          </a>
       

        <a
          href="https://github.com/Amruta200501"
          target="_blank"
          className="items"
        >
          <FaGithub className="icon" />
        </a>

        <div className="items">
          <IoCall className="icon" />
        </div>

        <div className="items">
          <SiIndeed className="icon" />
        </div>
        </Card> */}
      </div>
    </div>
  );
};

export default Contact;
