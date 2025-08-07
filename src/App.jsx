import React from "react";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return <div>
    <Navbar/>
    <LandingPage />
    <AboutMe/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>;
}

export default App;
