import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
import { useTheme } from "../components/theme/ThemeContext";
import SocialLinks from "../components/socialLinks/SocialLinks";
import { MotionDiv } from "../components/animations/pageTransitions";

const Intro: React.FC = () => {
  const { theme } = useTheme();
  return (
    <MotionDiv>
      <div className="main-content">
        <section className={`intro-section ${theme}`}>
          <div className="welcome-bg-text" aria-hidden="true">
            Onyekachi.dev
          </div>
          <h1
            className="intro-heading"
            data-text="Onyekachi, God'swill Richard"
          >
            Onyekachi, God'swill Richard
          </h1>
          <div className="intro-content">
            <p>
              Hello! I'm a <span style={{ fontWeight: "bold" }}>frontend developer</span> specializing in creating responsive, user-centric experiences. I
              design websites that not only look great but also function
              smoothly across all devices. Additionally, I have a strong passion
              for the  <span style={{ fontWeight: "bold" }}>future of technology </span>,
              particularly at the intersection of <span style={{ fontWeight: "bold" }}>AI</span> and creativity. I
              continuously explore innovative ways to integrate intelligent
              systems into user experience
            </p>

            <p>
              Beyond the browser,{" "}
              <span style={{ fontWeight: "bold" }}>
                I’m a live stream production expert
              </span>
              , setting up from multi-camera inputs to audio routing, streaming
              software and overlays evert. I help teams and organizations
              deliver smooth, high-quality livestreams that feel professional
              and polished. Whether it’s designing for the{" "}
              <span style={{ fontWeight: "bold" }}>web</span>, experimenting
              with
              <span style={{ fontWeight: "bold" }}> AI</span>, or running a full{" "}
              <span style={{ fontWeight: "bold" }}>live broadcast</span>, I
              thrive at the intersection of{" "}
              <span style={{ fontWeight: "bold" }}>
                creativity and technology.
              </span>
            </p>
          </div>
          <div className="link-container">
            <div>
              <Link to="/about" className="link_dev">
                See More About Me <span className="arrow">→</span>
              </Link>
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>
        </section>
      </div>
    </MotionDiv>
  );
};

export default Intro;
