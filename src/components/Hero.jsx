import HeroCSS from "../styles/hero.module.css";
// import profilePhoto from "../assets/images/Ellipse 1.png";
import profilePhotoDecor from "../assets/images/Ellipse 2.svg";
import profilePhoto from "../assets/images/portfolio_photo1.jpg";

import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section className={HeroCSS.hero}>
      <section className={HeroCSS.content}>
        <h1 className={HeroCSS.title}>
          Hi, I am Eduard Saadyan, Frontend Developer
        </h1>
        <p className={HeroCSS.description}>
          Frontend developer with a passion for building modern and creative
          user interfaces. I’m eager to contribute to awesome projects and solve
          challenging problems, learn new technologies and master the craft.
        </p>

        <a
          href={resume}
          download="Eduard Saadyan resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={HeroCSS.resumeBtn}>Download resume</button>
        </a>
      </section>
      <div className={HeroCSS.photoHolder}>
        <img className={HeroCSS.profilePhoto} src={profilePhoto} alt="" />
        <img className={HeroCSS.profilePhotoDecor} src={profilePhotoDecor} />
      </div>
    </section>
  );
}
