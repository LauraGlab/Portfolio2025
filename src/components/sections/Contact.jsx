import React, { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import emailjs from "emailjs-com";
import RetroWindow from "./../common/RetroWindow.jsx";
import "../../css/sections/Contact.css";

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwum3pq",
        "template_wwlr8mk",
        formRef.current,
        "7qkJteyD1v-6jOfq4"
      )
      .then(
        () => {
          setStatus("✅ Message sent!");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <div className="contact">
      <RetroWindow title={t("contact.title")} className="contact-window">
        <form ref={formRef} onSubmit={sendEmail} className="contact__form">
          <label>
            {t("contact.nameTitle")}
            <input
              type="text"
              name="from_name"
              placeholder={t("contact.name")}
              required
            />
          </label>
          <label>
            {t("contact.emailTitle")}
            <input
              type="email"
              name="reply_to"
              placeholder={t("contact.email")}
              required
            />
          </label>
          <label>
            {t("contact.messageTitle")}
            <textarea
              name="message"
              placeholder={t("contact.message")}
              required
            />
          </label>
          <button className="button" type="submit">{t("contact.btn")}</button>
        </form>
        {status && <p className="contact__status">{status}</p>}
      </RetroWindow>

      <div className="contact__sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
    </div>
  );
}