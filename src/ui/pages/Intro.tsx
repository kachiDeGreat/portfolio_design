import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
import { useTheme } from "../components/theme/ThemeContext";
import SocialLinks from "../components/socialLinks/SocialLinks";

const Intro: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className={`intro-section ${theme}`}>
      <div className="welcome-bg-text" aria-hidden="true">
        Kachi.dev
      </div>
      <h1 className="intro-heading" data-text="Hi, I'm KachiDeGreat">
        Hi, I'm KachiDeGreat
      </h1>
      <div className="intro-content">
        <p>
          I’m a <span style={{ fontWeight: "bold" }}>frontend developer</span>,
          i build responsive, user-focused experiences. I craft websites that
          look great, feel smooth, and work seamlessly across all devices. I'm
          also passionate about the{" "}
          <span style={{ fontWeight: "bold" }}>future of tech </span> especially
          where <span style={{ fontWeight: "bold" }}>AI</span> meets creativity,
          and I constantly explore ways to bring intelligent systems into the
          user experience.
        </p>

        <p>
          Beyond the browser,{" "}
          <span style={{ fontWeight: "bold" }}>
            I’m a live stream production expert
          </span>{" "}
          , setting up from multi-camera inputs to audio routing, streaming
          software and overlays evert. I help teams and organizations deliver
          smooth, high-quality livestreams that feel professional and polished.
          Whether it’s designing for the{" "}
          <span style={{ fontWeight: "bold" }}>web</span>, experimenting with
          <span style={{ fontWeight: "bold" }}>AI</span>, or running a full{" "}
          <span style={{ fontWeight: "bold" }}>live broadcast</span>, I thrive
          at the intersection of{" "}
          <span style={{ fontWeight: "bold" }}>creativity and technology.</span>
        </p>
      </div>
      <div className="link-container">
        <div>
          <Link to="/about" className="link_dev">
            About me <span className="arrow">→</span>
          </Link>
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Intro;
