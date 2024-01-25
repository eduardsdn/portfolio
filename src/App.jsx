import React from "react";
import AppCSS from "./styles/app.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import projectAudiophileImg from "./assets/images/audiophile.png";
import projectBmiCalcImg from "./assets/images/bmicalc.png";
import projectLobstersImg from "./assets/images/lobsters.png";
import projectWeatherAppImg from "./assets/images/weatherapp.png";

function App() {
  const contactRef = React.useRef(null);

  function handleClick() {
    console.log(contactRef);
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const projects = [
    {
      title: "Lobsters landing page",
      liveLink: "https://lobsters.pro/",
      hasCodeLink: false,
      description: "Marketing agency website",
      img: projectLobstersImg,
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Audiophile",
      link: "https://eduardsdn.github.io/audiophile-ecommerce/",
      codeLink: "https://github.com/eduardsdn/audiophile-ecommerce",
      hasCodeLink: true,
      description: "E-commerce website",
      img: projectAudiophileImg,
      technologies: ["JavaScript", "React", "Redux", "HTML", "CSS"],
    },
    {
      title: "BMI Calculator",
      liveLink: "https://eduardsdn.github.io/bmi_calculator/",
      codeLink: "https://github.com/eduardsdn/bmi_calculator",
      hasCodeLink: true,
      description: "BMI Calculator with health advise",
      img: projectBmiCalcImg,
      technologies: ["JavaScript", "React", "HTML", "CSS"],
    },
    {
      title: "Weather widget",
      liveLink: "https://eduardsdn.github.io/weather_app/",
      codeLink: "https://github.com/eduardsdn/weather_app",
      hasCodeLink: true,
      description: "Get current weather by location",
      img: projectWeatherAppImg,
      technologies: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <div className={AppCSS.app}>
      <div className={AppCSS.container}>
        <Header handleClick={handleClick} />
        <Hero></Hero>
        <h2 className={AppCSS.projectsTitle}>Projects</h2>
        <section className={AppCSS.projects}>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                img={project.img}
                title={project.title}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
                hasCodeLink={project.hasCodeLink}
                description={project.description}
                technologies={project.technologies}
              />
            );
          })}
        </section>
        <Contact contactRef={contactRef} />
        {/* <div className={AppCSS.container}></div> */}
      </div>
    </div>
  );
}

export default App;
