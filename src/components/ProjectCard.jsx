import projectCardCSS from "../styles/projectcard.module.css";

export default function ProjectCard({ img, title, link, description }) {
  return (
    <div className={projectCardCSS.card}>
      <img className={projectCardCSS.projectImg} src={img} alt="" />
      <section className={projectCardCSS.textContent}>
        <h1 className={projectCardCSS.title}>{title}</h1>
        <p className={projectCardCSS.description}>{description}</p>
        {/* <a className={projectCardCSS.liveLink} href={link}>
          View Live
        </a> */}
      </section>
    </div>
  );
}
