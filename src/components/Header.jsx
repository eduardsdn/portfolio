import HeaderCSS from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={HeaderCSS.header}>
      <nav className={HeaderCSS.navigation}>
        <ul className={HeaderCSS.navigationLinks}>
          <li className={HeaderCSS.navigationLink}>Projects</li>
          <li className={HeaderCSS.navigationLink}>Contact</li>
          <li className={HeaderCSS.navigationLink}>Whatever</li>
        </ul>
      </nav>
    </header>
  );
}
