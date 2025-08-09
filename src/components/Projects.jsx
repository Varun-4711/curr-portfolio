import React from "react";
import projectsData from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import "./css/Projects.css";

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-vertical-list">
      {projectsData.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  </section>
);

export default Projects;
