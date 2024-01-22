import ContactCSS from "../styles/contact.module.css";
import { forwardRef } from "react";

function Contact(props) {
  return (
    <section className={ContactCSS.contact} ref={props.contactRef}>
      <h2 className={ContactCSS.title}>Contact me!</h2>
      <a className={ContactCSS.email} href="mailto:eduard.sdn@gmail.com">
        eduard.sdn@gmail.com
      </a>
    </section>
  );
}

export default Contact;
