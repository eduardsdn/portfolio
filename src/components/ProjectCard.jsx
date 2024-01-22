import projectCardCSS from "../styles/projectcard.module.css";
import { useState } from "react";

export default function ProjectCard({ img, title, link, technologies }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className={projectCardCSS.card}>
      <div
        className={projectCardCSS.projectImgHolder}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {isHovering ? (
          <div className={projectCardCSS.links}>
            <a className={projectCardCSS.liveLink} href={link}>
              View Live Site
            </a>
            <a className={projectCardCSS.codeLink} href="/">
              View GitHub Code
            </a>
          </div>
        ) : null}
        {/* <img
          className={
            isHovering
              ? projectCardCSS.projectImgHover
              : projectCardCSS.projectImg
          }
          src={img}
          alt=""
        /> */}
        <img
          className={
            isHovering
              ? projectCardCSS.projectImgHover
              : projectCardCSS.projectImg
          }
          src={img}
          alt=""
        />
      </div>
      <section className={projectCardCSS.textContent}>
        <h1 className={projectCardCSS.title}>{title}</h1>
        {/* <p className={projectCardCSS.description}>{description}</p> */}
        <ul className={projectCardCSS.techList}>
          {technologies.map((tech) => {
            return <li className={projectCardCSS.techListItem}>{tech}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
