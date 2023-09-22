import React from "react";
import "./Footer.scss";

import logo from "../../assets/header-logo.png";
import instagram from "../../assets/instagram.svg";
import vectorX from "../../assets/vectorX.svg";
import fb from "../../assets/fb.svg";
import linkedIn from "../../assets/linkedin.svg";
import call from "../../assets/footer_call.svg";
import location from "../../assets/footer_location.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex">
        <div className="left">
          <img src={logo} alt="logo" />
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <ul>
            <li>Terms of Use</li>
            <li className="p-clr">|</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="right">
          <div className="box">
            <h4 className="p-clr">Useful Links</h4>

            <ul>
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>
              <li>Register</li>
            </ul>

            <div className="social">
              <p className="p-clr">Follow us</p>
              <ul>
                <li>
                  <img src={instagram} alt="instagram" />
                </li>
                <li>
                  <img src={vectorX} alt="vectorX" />
                </li>
                <li>
                  <img src={fb} alt="fb" />
                </li>
                <li>
                  <img src={linkedIn} alt="linkedIn" />
                </li>
              </ul>
            </div>
          </div>

          <div className="box">
            <h4 className="p-clr">Contact Us</h4>

            <ul>
              <li>
                <img src={call} alt="call" />
                <span>+234 6707653444</span>
              </li>

              <li>
                <img src={location} alt="location" />
                <span>
                  27,Alara Street
                  <br />
                  Yaba 100012
                  <br />
                  Lagos State
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tagline">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
