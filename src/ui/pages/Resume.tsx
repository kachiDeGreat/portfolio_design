import type React from "react";
import { MotionDiv } from "../components/animations/pageTransitions";
import { useTheme } from "../components/theme/ThemeContext";
import "./Resume.css";
import { Link } from "react-router-dom";
import SocialLinks from "../components/socialLinks/SocialLinks";

const Resume: React.FC = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "Front-End Developer",
      company: "Droid Technologies",
      period: "2024 — Present",
      responsibilities: [
        "Contributed to the front-end development of all company projects, including Knowledge City, the Droid Technologies website, and Tourism for Food.",
        "Built reusable and maintainable components using React, TypeScript, and Tailwind CSS.",
        "Ensured cross-device responsiveness, performance optimization, and modern UI standards.",
        "Collaborated with design and backend teams to deliver seamless web experiences.",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Diocese of Calabar – Anglican Communion",
      period: "2023 — 2024",
      responsibilities: [
        "Built and maintained the Diocese's official website.",
        "Managed and updated digital content including announcements, events, and multimedia.",
        "Ensured web interfaces aligned with the Diocese's communication objectives.",
        "Monitored performance, resolved bugs, and implemented UI enhancements.",
      ],
    },
    {
      title: "Front-End Developer",
      company: "AYF Calabar (Anglican Youth Fellowship)",
      period: "2023 — 2024",
      responsibilities: [
        "Designed and deployed a dynamic youth-focused website for the AYF Diocese.",
        "Developed a real-time registration system and blog module using Firebase.",
        "Collaborated closely with stakeholders to ensure the platform reflected the brand's mission and goals.",
      ],
    },
    {
      title: "Web Developer",
      company: "Goals Afrika",
      period: "2020 — 2022",
      responsibilities: [
        "Developed and maintained the organization's public website.",
        "Refactored legacy layouts to improve SEO, responsiveness, and user flow.",
        "Implemented front-end enhancements that improved user interaction.",
      ],
    },
    {
      title: "ICT Assistant",
      company: "Leadpac Foundation",
      period: "2019 — 2022",
      responsibilities: [
        "Managed routine updates and design changes on the organization's website.",
        "Assisted in technical decision-making and provided advisory on digital upgrades.",
      ],
    },
  ];

  const technicalSkills = {
    Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SASS", "LESS"],
    "Frameworks & Libraries": [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
    ],
    "Backend & Tools": ["Firebase", "Node.js", "Express.js", "GraphQL"],
    "Development Tools": ["Git", "GitHub", "Bitbucket", "Vite", "NPM", "Yarn"],
    "Productivity & Design": [
      "Slack",
      "Notion",
      "Trello",
      "ClickUp",
      "Asana",
      "Jira",
      "Figma",
      "Visual Studio Code",
    ],
  };

  const softSkills = [
    "Collaboration",
    "Leadership",
    "UI/UX Thinking",
    "Communication",
    "Critical Thinking",
    "Adaptability",
    "Accountability",
    "Empathy",
    "Problem Solving",
    "Open-mindedness",
  ];

  return (
    <MotionDiv>
      <div className="main-content">
        <div className={`resume-content ${theme}`}>
          <h1 className="resume-heading">Resume</h1>
          <p className="resume-subtitle">
            <a className="resume-link" href="">
              View
            </a>{" "}
            or{" "}
            <a
              className="resume-link"
              rel="noopener noreferrer"
              href="./cv.pdf"
              target="_blank"
            >
              download
            </a>{" "}
            the resume
          </p>
          <div className="welcome-bg-text" aria-hidden="true">
            Resume.
          </div>

          {/* Header Actions */}
          {/* <div className="resume-actions">
            <a
              href="/files/Kachi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn download-btn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <button className="resume-btn view-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Resume
            </button>
          </div> */}

          {/* Resume Content */}
          <div className="resume-container">
            {/* Header */}
            <header className="resume-header">
              <h1 className="resume-name">ONYEKACHI, GOD'SWILL RICHARD</h1>
              <h2 className="resume-title">Front-End Developer</h2>
              <div className="resume-contact">
                <div className="contact-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Calabar, Nigeria
                </div>
                <div className="contact-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  mail.ricx@gmail.com
                </div>
                <div className="contact-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +234 810 079 0074
                </div>
                <div className="contact-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <a
                    href="https://www.onyekachi.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                </div>
                <div className="contact-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <a
                    href="http://github.com/kachiDeGreat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </header>

            {/* About Me */}
            <section className="resume-section">
              <h3 className="section-title">About Me</h3>
              <p className="about-text">
                Experienced and passionate Front-End Developer with over four
                years of demonstrated ability in designing and developing
                responsive, user-friendly web interfaces. Skilled in crafting
                scalable front-end architectures using modern frameworks like
                React and Next.js, with a strong focus on performance,
                accessibility, and maintainability. Highly collaborative and
                committed to delivering intuitive digital experiences that meet
                user and business goals.
              </p>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h3 className="section-title">Experience</h3>
              <div className="experience-list">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div>
                        <h4 className="experience-title">{exp.title}</h4>
                        <p className="experience-company">{exp.company}</p>
                      </div>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <ul className="experience-responsibilities">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h3 className="section-title">Education</h3>
              <div className="education-item">
                <div className="education-header">
                  <div>
                    <h4 className="education-degree">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="education-school">
                      University of Cross River State (UNICROSS)
                    </p>
                  </div>
                  <span className="education-period">2020 – 2025</span>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="resume-section">
              <h3 className="section-title">Projects</h3>
              <p className="projects-text">
                Links to some of my work can be found on{" "}
                <a
                  href="https://www.onyekachi.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.onyekachi.dev/
                </a>
                . Additional information and code walk-throughs are available
                upon request via a scheduled demo call.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="resume-section">
              <h3 className="section-title">Technical Skills</h3>
              <div className="skills-grid">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="skill-category">
                    <h4 className="skill-category-title">{category}</h4>
                    <div className="skill-tags">
                      {skills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Soft Skills */}
            <section className="resume-section">
              <h3 className="section-title">Soft Skills</h3>
              <div className="soft-skills">
                {softSkills.map((skill) => (
                  <span key={skill} className="soft-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
          <div className="link-container">
            <div>
              <Link to="/contact" className="link_dev">
                Contact me
                <span className="arrow">→</span>
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

export default Resume;
