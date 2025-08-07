import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import profilePic from "../assets/portrait_photo.png";
import "./LandingPage.css";

const LandingPage = () => (
  <div id="home" className="landing-container">
    <ParticlesBackground />
    <div className="landing-content">
      <img src={profilePic} alt="Varun Saxena" className="profile-pic" />
      <div className="intro">
        <h1>Varun Saxena</h1>
        <h2>Software Engineer</h2>
        <p className="location"> NTT-TX 🗼 Tokyo, Japan</p>
      </div>
    </div>
  </div>
);

export default LandingPage;
