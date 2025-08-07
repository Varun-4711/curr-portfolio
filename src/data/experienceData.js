// src/data/experienceData.js
import ntt from "../assets/logos/NTT-TX-logo.png";
import jio from "../assets/logos/jio_logo.jpg";
import spirit from "../assets/logos/spirit_logo.png";

const experienceData = [
  {
    company: "NTT Technocross",
    logo: ntt, // place your logos in /assets/logos/
    location: "Tokyo, Japan",
    position: "Software Engineering Intern",
    dates: "May 2024 – July 2024",
    description: [
      "Developed and deployed a clientless secure remote access solution using Apache Guacamole and custom APIs, enabling seamless and protected connectivity.",
      "Led the full-stack implementation on Red Hat Linux, working with HTML5, Java, and JavaScript, and ensured robust token-based authentication.",
      "Recognized for outstanding performance and impactful contributions, earning a Pre-Placement Offer (PPO)."
    ]
  },
  {
    company: "Jio Platforms Ltd.",
    logo: jio,
    location: "Remote",
    position: "Software Engineering Intern",
    dates: "May 2023 – July 2023",
    description: [
      "Developed microservices using Spring, Spring Boot, and Spring Cloud.",
      "Integrated Hystrix for monitoring and fault tolerance, ensuring reliable microservices performance.",
      "Gained exposure to deploying microservices using Docker and Kubernetes."
    ]
  },
  {
    company: "Spirit 2023",
    logo: spirit,
    location: "IIT Guwahati, India",
    position: "Web Operations Head",
    dates: "June 2023 – July 2023",
    description: [
      "Led a 15+ member team to orchestrate the development of a dynamic full-stack website using Node.js, HTML, CSS, and JavaScript, supporting over 4,000 participants and driving engagement for an event with 50,000+ footfall.",
      "Implemented advanced features including secure authentication, real-time metrics, interactive scoreboards, live leaderboards, user registration, and automated participation certificate issuance.",
      "Integrated Google Maps, live YouTube feeds, real-time sports updates, and smart APIs for university name suggestions; deployed on Railway Hosting with Cloudflare to ensure robust security and performance."
    ]
  }
];

export default experienceData;
