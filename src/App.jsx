import React from "react";

import AppCSS from "./styles/app.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

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
      title: "BMI Calculator",
      link: "https://eduardsdn.github.io/bmi_calculator/",
      description:
        "This single page React application assess Body Mass Index by calculating it in real time based on your height and weight and presents a health category. Application supports Metric and Imperial measurement systems.",
      img: projectBmiCalcImg,
      technologies: ["JavaScript", "React", "HTML", "CSS"],
    },
    {
      title: "Lobsters landing page",
      link: "https://lobsters.pro/",
      description:
        "Developed a responsive and interactive landing page in collaboration with a team with of  UX/UI designer, project manager and a senior developer.",
      img: projectLobstersImg,
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Audiophile",
      link: "https://eduardsdn.github.io/audiophile-ecommerce/",
      description:
        "An e-commerce website built utilizing React, React Router for navigation, and Redux for state management. UI is fully responsive supporting popular Desktop, tablet and phone screen sizes.",
      img: projectAudiophileImg,
      technologies: ["JavaScript", "React", "Redux", "HTML", "CSS"],
    },
    {
      title: "Weather App",
      img: projectWeatherAppImg,
      technologies: ["JavaScript", "REST API", "HTML", "CSS"],
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
                link={project.link}
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
