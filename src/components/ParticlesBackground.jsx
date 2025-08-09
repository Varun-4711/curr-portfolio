import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  // Initializing tsParticles engine
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Callback when particles are loaded (optional)
  const particlesLoaded = useCallback(async (container) => {
    // Can log or act on load
  }, []);

  const options = {
    fullScreen: { enable: true, zIndex: +1 },
    fpsLimit: 120,
    background: { color: "#161616" }, // matching theme
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" }
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#ffffff" }, // white bubbles
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, direction: "none", outModes: { default: "out" } },
      number: { value: 80, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesBackground;
