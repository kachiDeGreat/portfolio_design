import React, { useState } from "react";
import { useTheme } from "../components/theme/ThemeContext";
import "./Contact.css";
import { MotionDiv } from "../components/animations/pageTransitions";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import SocialLinks from "../components/socialLinks/SocialLinks";

const SERVICE_ID = "service_1yu2r8q";
const TEMPLATE_ID = "template_xduy5jc";
const PUBLIC_KEY = "g6Eg11iIMomLSZjZ2";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.currentTarget;

    const fullName = `${
      (form.elements.namedItem("firstName") as HTMLInputElement).value
    } ${(form.elements.namedItem("lastName") as HTMLInputElement).value}`;
    const currentTime = new Date().toLocaleString();

    (form.elements.namedItem("name") as HTMLInputElement).value = fullName;
    (form.elements.namedItem("time") as HTMLInputElement).value = currentTime;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false);
    }
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

              {/* Hidden fields for full name and time */}
              <input type="hidden" name="name" />
              <input type="hidden" name="time" />

              <button
                type="submit"
                className="submit-button"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
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
