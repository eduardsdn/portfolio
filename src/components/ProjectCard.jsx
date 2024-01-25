import projectCardCSS from "../styles/projectcard.module.css";
import { useState } from "react";

export default function ProjectCard({
  img,
  title,
  liveLink,
  codeLink,
  hasCodeLink,
  description,
  technologies,
}) {
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
            <a
              target="_blank"
              className={projectCardCSS.liveLink}
              href={liveLink}
            >
              View Live Site
            </a>
            {hasCodeLink ? (
              <a
                target="_blank"
                className={projectCardCSS.codeLink}
                href={codeLink}
              >
                View GitHub Code
              </a>
            ) : null}
          </div>
        ) : null}
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
        <p className={projectCardCSS.description}>{description}</p>
        <ul className={projectCardCSS.techList}>
          {technologies.map((tech) => {
            return <li className={projectCardCSS.techListItem}>{tech}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
