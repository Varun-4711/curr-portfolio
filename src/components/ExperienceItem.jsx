import React from "react";

const ExperienceItem = ({
  company,
  logo,
  position,
  location,
  dates,
  description,
  isLast, // for connecting line styling
}) => (
  <div className="exp-item">
    <div className="exp-timeline">
      <div className="exp-dot" />
      {!isLast && <div className="exp-line" />} {/* show line except for last item */}
    </div>
    <div className="exp-content">
      <img src={logo} alt={`${company} logo`} className="exp-logo" />
      <div>
        <h3 className="exp-position">{position}</h3>
        <div className="exp-company-loc">
          <span className="exp-company">{company}</span>
          <span className="exp-sep">|</span>
          <span className="exp-location">{location}</span>
        </div>
        <div className="exp-dates">{dates}</div>
        <ul className="exp-desc">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceItem;
