import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-content-left-items">
            <img className="footer-logo" src={assets.Logo} alt="logo" />
            <p>
              Our restaurant is dedicated to providing delicious, nutritious
              meals crafted with the freshest ingredients. We prioritize health
              without compromising on taste, offering a diverse menufor you to
              enjoy.
            </p>
          </div>
          <div className="social-icons">
            <img src={assets.Facebook} alt="facebook" />
            <img src={assets.Twitter} alt="twitter" />
            <img src={assets.Instagram} alt="instagram" />
            <img src={assets.LinkedIn} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>123 Health Street, Wellness City, WH 45678</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@cookinghealthyfood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © cooking.com - All Rights Reserved{" "}
      </p>
    </div>
  );
}

export default Footer;
