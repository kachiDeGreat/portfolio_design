import React from "react";
import { useTheme } from "../components/theme/ThemeContext";
import "./Contact.css";
import { MotionDiv } from "../components/animations/pageTransitions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import SocialLinks from "../components/socialLinks/SocialLinks";

const WHATSAPP_NUMBER = "2348100790074";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const text = `Hello! I am ${firstName} ${lastName}.\nEmail: ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    if (!WHATSAPP_NUMBER) {
      toast.error("WhatsApp number is not configured yet.");
      return;
    }

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    form.reset();
  };

  return (
    <MotionDiv>
      <div className="main-content">
        <div className={`contact-container ${theme}`}>
          <div className="welcome-bg-text" aria-hidden="true">
            Contact Me
          </div>
          <header className="contact-header">
            <h1 className="contact-title">Contact</h1>
            <p className="contact-description">
              Get in touch or shoot me an email directly on
              <span style={{ fontWeight: "bolder" }}> mail.ricx@gmail.com</span>
            </p>
          </header>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    className="form-input"
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-input"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows={6}
                  className="form-textarea"
                  placeholder="Message"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
          <div className="link-container" style={{ marginTop: "-3rem" }}>
            <div>
              <Link to="/" className="link_dev">
                Back Home
                <span className="arrow">→</span>
              </Link>
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={3000}
        hideProgressBar
      />
    </MotionDiv>
  );
};

export default Contact;
