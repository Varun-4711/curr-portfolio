// src/components/Experience/Experience.jsx
import React from "react";
import experienceData from "../data/experienceData";
import ExperienceItem from "./ExperienceItem";
import "./Experience.css"; // Timeline styling will go here later

const Experience = () => (
  <section id="experience" className="experience-section">
    <h2>Experience</h2>
    <div className="exp-timeline-list">
      {experienceData.map((exp, idx) => (
        <ExperienceItem
          {...exp}
          key={exp.company + exp.dates}
          isLast={idx === experienceData.length - 1}
        />
      ))}
    </div>
  </section>
);

export default Experience;
