import HeroCSS from "../styles/hero.module.css";
import profilePhoto from "../assets/images/Ellipse 1.png";
import profilePhotoDecor from "../assets/images/Ellipse 2.svg";

export default function Hero() {
  return (
    <section className={HeroCSS.hero}>
      <section className={HeroCSS.content}>
        <h1 className={HeroCSS.title}>
          Hi, I am Eduard Saadyan, Frontend Developer
        </h1>
        <p className={HeroCSS.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus iste
          aliquid accusamus omnis. Quam distinctio facilis, explicabo et
          reiciendis adipisci eveniet similique{" "}
        </p>
        <button className={HeroCSS.resumeBtn}>Download resume</button>
      </section>
      <div className={HeroCSS.photoHolder}>
        <img className={HeroCSS.profilePhoto} src={profilePhoto} alt="" />
        <img className={HeroCSS.profilePhotoDecor} src={profilePhotoDecor} />
      </div>
    </section>
  );
}
