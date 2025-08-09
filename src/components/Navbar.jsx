import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./css/Navbar.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about_me", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact Me" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section and close menu on small screens
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className="navbar-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setMenuOpen((prev) => !prev);
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
            {sections.map(({ id, label }) => (
              <li key={id} className="navbar-item">
                <a
                  href={`#${id}`}
                  className="navbar-link"
                  onClick={(e) => handleClick(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay behind menu on small screens */}
      {menuOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
