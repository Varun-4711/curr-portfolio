// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, type, technologies, image, description }) => (
  <div className="project-card-vertical">
    <div className="project-img-vertical-wrapper">
      <img src={image} alt={title} className="project-img-vertical" />
    </div>
    <div className="project-info-vertical">
      <h3 className="project-title-vertical">{title}</h3>
      <div className="project-badges-vertical">
        <span className="project-type-vertical">{type}</span>
        <span className="project-tech-vertical">{technologies}</span>
      </div>
      <ul className="project-desc-vertical">
        {description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectCard;
