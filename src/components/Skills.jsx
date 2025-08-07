// src/components/Skills/Skills.jsx
import React from "react";
import skillsData from "../data/skillsData";
import SkillBlock from "./SkillBlock";
import "./Skills.css";

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skillsData.map((skill, idx) => (
        <SkillBlock skill={skill} key={idx} />
      ))}
    </div>
  </section>
);

export default Skills;
