import React from "react";
import { MotionDiv } from "../components/animations/pageTransitions";
import { useTheme } from "../components/theme/ThemeContext";
import "./About.css";
import { Link } from "react-router-dom";
import SocialLinks from "../components/socialLinks/SocialLinks";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <MotionDiv>
      <div className="main-content">
        <div className={`about-content ${theme}`}>
          <br />
          <div className="welcome-bg-text" aria-hidden="true">
            About Me.
          </div>
          <h1 className="about-heading">About Me.</h1>
          {/* <div className="about-div">
            <h2 className="about-div-header">Hello there!</h2>
            <p className="about-div-body">
              I'm Richard Godswill Onyekachi, a passionate frontend developer
              and tech innovator from Delta State, Nigeria. Currently pursuing
              my Computer Science degree at the University of Cross River State,
              I specialize in crafting intelligent, user-centric web experiences
              at the intersection of cutting-edge frontend technologies and AI.
            </p>
          </div> */}
          {/* ----------   */}
          <div className="about-div">
            <h2 className="about-div-header">My Expertise</h2>
            <p className="about-div-body">
              <span style={{ fontWeight: "bold" }}> Frontend Development</span>{" "}
              I specialize in building dynamic interfaces using modern
              technologies including React and Next.js for scalable
              applications, Tailwind CSS for efficient responsive designs,
              TypeScript for maintainable code architecture, and GSAP/Framer
              Motion for creating engaging interactive experiences.
            </p>
            <p className="about-div-body">
              <span style={{ fontWeight: "bold" }}>
                {" "}
                AI-Enhanced Development
              </span>{" "}
              I'm passionate about integrating AI into frontend workflows,
              exploring innovative applications like AI-powered code generation,
              intelligent UI personalization, automated testing solutions, and
              smart web assistants that transform user experiences.
            </p>
          </div>
          {/* ----------   */}
          <div className="about-div">
            <h2 className="about-div-header">Design & User Experience</h2>
            <p className="about-div-body">
              While I may not be a traditional designer, I have a sharp eye for
              aesthetics and usability. I thrive on turning complex ideas into
              intuitive interfaces, fine-tuning stylesheets, and ensuring every
              pixel serves a purpose.
            </p>
          </div>
          {/* ----------   */}
          <div className="about-div">
            <h2 className="about-div-header">Live Production Mastery</h2>
            <p className="about-div-body">
              Beyond the browser, I orchestrate professional livestreams with
              multi-camera setups, audio routing, and dynamic overlays. From
              software configuration to real-time troubleshooting, I ensure
              smooth, broadcast-quality streams that engage audiences.
            </p>
          </div>
          {/* ----------   */}
          <div className="about-div">
            <h2 className="about-div-header">Continuous Learning</h2>
            <p className="about-div-body">
              The tech landscape never stops evolving and neither do I. My
              current focus spans: Advanced React state management patterns,
              AI/ML integration in web development, Web performance optimization
              at scale, Next-gen streaming technologies
            </p>
          </div>
          {/* ----------   */}
          <div className="about-div">
            <h2 className="about-div-header">Let's Create The Future</h2>
            <p className="about-div-body">
              Whether it's building cutting-edge web applications, engineering
              seamless live broadcasts, or exploring AI frontiers, I thrive
              where technology meets creativity. Let's connect and make
              something remarkable!
            </p>
          </div>
          <div className="link-container">
            <div>
              <Link to="/projects" className="link_dev">
                Projects <span className="arrow">→</span>
              </Link>
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default About;
