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
          <div className="welcome-bg-text" aria-hidden="true">
            About Me.
          </div>
          <h1 className="about-heading">About Me.</h1>
          <div className="about-div">
            <h2 className="about-div-header">Hello there!</h2>
            <p className="about-div-body">
              I'm Richard Godswill Onyekachi, a passionate frontend developer
              and tech innovator from Delta State, Nigeria. Currently pursuing
              my Computer Science degree at the University of Cross River State,
              I specialize in crafting intelligent, user-centric web experiences
              at the intersection of cutting-edge frontend technologies and AI.
            </p>
          </div>
          {/* ----------   */}
          <div className="about-div">
            <h2 className="about-div-header">My Expertise</h2>
            <p className="about-div-body">
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Frontend Development [View GitHub]
              </span>{" "}
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
                Lets Continue To Projects <span className="arrow">→</span>
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

// Hello there!

// I’m Richard Godswill Onyekachi, a passionate Nigerian from Delta State, currently pursuing a degree in Computer Science at the University of Cross River State.

// By day, I’m a freelance web designer & frontend developer; by night, I’m an avid coder, tech enthusiast, and problem solver who believes in the power of 1’s and 0’s to build the future. When I’m not crafting sleek, functional websites, you’ll find me immersed in movies, gaming, or diving into the latest tech trends—always seeking ways to innovate and elevate the tech community.

// What I Bring to the Table
// Development [View GitHub]
// I don’t just write code—I architect digital experiences. Every line I craft is a building block for seamless, visually appealing, and high-performing websites. My approach blends clean design with efficient functionality, ensuring users get the best interaction possible.

// Design & User Experience
// While I may not be a traditional designer, I have a sharp eye for aesthetics and usability. I thrive on turning complex ideas into intuitive interfaces, fine-tuning stylesheets, and ensuring every pixel serves a purpose.

// Continuous Learning
// The tech world evolves rapidly, and so do I. Whether it’s mastering data structures & algorithms, exploring human-centered design, or sharpening my leadership skills, I’m always expanding my knowledge to stay ahead.

// My Learning Journey
// Human-Centered Design 101 (Acumen, 2017-2018) – Mastering empathy-driven problem-solving.

// Data Structures & Algorithms (Udemy, 2019) – Strengthening my technical foundation.

// Adaptive Leadership (edX, 2019) – Leading through challenges with agility.

// Efficient Learning Techniques (Udemy, 2020) – Optimizing how I absorb and apply knowledge.

// Always Learning Something New – Because growth never stops.

// My Playlists (For Focus & Inspiration) 🎧
// CodeWonders (Spotify) – High-energy tracks to fuel my coding sessions.

// Chill Lofi Study Beats (Spotify) – Smooth, focus-friendly rhythms.

// Mellow Drive (Spotify) – Laid-back tunes for relaxed moments.

// Rap UK (Spotify) – Sharp lyrics, bold beats.

// Mood Booster (Spotify) – A dose of positivity.

// Let’s Build Something Amazing
// I’m always open to collaborations, new projects, and tech discussions. Check out my work, and let’s connect!

// [View My Projects] | [GitHub] | [Let’s Talk]
