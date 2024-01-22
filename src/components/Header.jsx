import HeaderCSS from "../styles/header.module.css";
import linkedInIcon from "../assets/images/linkedin-icon.png";
import gitHubIcon from "../assets/images/github-icon.png";
import mailIcon from "../assets/images/mail-icon.png";

export default function Header(props) {
  return (
    <header className={HeaderCSS.header}>
      <nav className={HeaderCSS.navigation}>
        <ul className={HeaderCSS.navigationLinks}>
          <li className={HeaderCSS.navigationLinkHolder}>
            <p
              onClick={props.handleClick}
              className={HeaderCSS.navigationLink}
              // href="mailto:eduard.sdn@gmail.com"
            >
              <img src={mailIcon} alt="" />
              E-mail
            </p>
          </li>
          <li className={HeaderCSS.navigationLinkHolder}>
            <a
              className={HeaderCSS.navigationLink}
              href="https://github.com/eduardsdn"
            >
              <img src={gitHubIcon} />
              GitHub
            </a>
          </li>
          <li className={HeaderCSS.navigationLinkHolder}>
            <a
              className={HeaderCSS.navigationLink}
              href="https://www.linkedin.com/in/eduard-saadyan-b67a05299/"
            >
              <img src={linkedInIcon} />
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
