// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";  // GitHub, Gmail icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-links">
        <a
          href="mailto:varunsaxena@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Varun-4711"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/varun-saxena-cl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Varun Saxena. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
