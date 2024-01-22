import React from "react";
import ContactFormCSS from "../styles/contactform.module.css";

export default function ContactForm() {
  return (
    <section className={ContactFormCSS.contact}>
      <h2 className={ContactFormCSS.contactTitle}>Get in touch</h2>
      <form className={ContactFormCSS.contactForm} action="post">
        <input type="text" id="name" placeholder="Name" />
        <input type="text" id="name" placeholder="Email" />
        <input type="text" id="subject" placeholder="Subject" />
        <textarea id="message" placeholder="Please enter your message.." />
      </form>
    </section>
  );
}
