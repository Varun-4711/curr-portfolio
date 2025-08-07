// src/data/projectsData.js
import project1 from "../assets/projects/hjahah.webp";
import project2 from "../assets/projects/saccc.png";

const projectsData = [
  {
    title: "Will update soon",
    type: "Self Project",
    technologies: "React, Node.js, MongoDB",
    image: project1,
    description: [
      "Will update soon",
      "Will update soon",
      "Will update soon"
    ]
  },
  {
    title: "Real Time Chat Application",
    type: "Self Project",
    technologies: "Node.js, Express, MongoDB",
    image: project2,
    description: [
      "Developed a real-time chat application using Node.js as the back-end and HTML/CSS/JavaScript as the front-end and implemented the 'Persons online' feature, allowing users to see who is currently active.",
      "Utilized Socket.IO, event-driven library, to establish a real-time bi-directional communication channel between clients and the server and to handle events like user connection, disconnection and message sending.",
    ]
  }
];

export default projectsData;
