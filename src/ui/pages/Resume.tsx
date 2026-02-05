import type React from "react";
import { MotionDiv } from "../components/animations/pageTransitions";
import { useTheme } from "../components/theme/ThemeContext";
import "./Resume.css";
import { Link } from "react-router-dom";
import SocialLinks from "../components/socialLinks/SocialLinks";
// import SocialLinks from "../components/socialLinks/SocialLinks";
// import { title } from "process";

const Resume: React.FC = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "HEAD OF FRONTEND & MOBILE",
      company: "Ransact Technologies (Remote)",
      period: "2025 — 2026",
      responsibilities: [
        "Architected and deployed a production-ready mobile and web experience from scratch within 6 months, serving as the technical lead for the frontend stack.",
        "Reduced application bundle size by 40% through modular architecture and tree-shaking, ensuring sub-2 second load times on 3G networks.",
        "Engineered a proprietary library of 30+ reusable UI components, maintaining 100% visual consistency and reducing feature development time by 25%.",
        "Integrated secure, real-time FX transaction flows and payment gateways, maintaining 99.9% system uptime since launch.",
        "Collaborated with backend engineers to define API schemas for Node.js services, optimizing data transfer efficiency for cross-border payments.",
      ],
    },
    {
      title: "FRONTEND DEVELOPER",
      company: "Knowledge City (Fintech/EdTech)",
      period: "2025 — 2026",
      responsibilities: [
        "Built a core e-learning engine with complex 'Backpack' and course management features using Next.js, serving an active student base",
        "Developed a gamified 'Coin System' for reward management, processing real-time student transactions with 100% data integrity.",
        "Utilized Firestore for real-time data synchronization, providing immediate feedback for quizzes and learning diary updates.",
        "Partnered with product teams to refine UI/UX, achieving a measurable reduction in friction during the user onboarding process.",
      ],
    },
    {
      title: "Lead Developer",
      company: "Nigerian Nursing Success (Project-Based)",
      period: "2024 — 2026",
      responsibilities: [
        "Designed and launched an EdTech assessment platform used by 1,000+ nursing students to prepare for professional examinations.",
        "Engineered a rigorous automated scoring engine with randomized question banks, reducing manual grading efforts by 100%.",
        "Developed internal administrative dashboards to manage secure exam audit logs and track individual student performance analytics.",
        "Managed the full project lifecycle from requirement gathering to deployment on Vercel and Firebase.",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Droid Technologies (Remote)",
      period: "2024 — 2025",
      responsibilities: [
        "Built and maintained scalable web applications using React.js, TypeScript, and Pure CSS, improving load times by 30%.",
        "Developed reusable component systems, cutting development time by 25% and improving consistency across projects.",
        "Collaborated with backend and design teams to deliver high-performing user interfaces aligned with agile sprint goals.",
        "Implemented SEO and accessibility standards, achieving 95+ Lighthouse scores for performance and UX.",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Diocese of Calabar – Anglican Communion (Remote)",
      period: "2023 — 2024",
      responsibilities: [
        "Designed and developed the official institutional website using HTML, JavaScript, and SCSS with a fully responsive layout.",
        "Improved page load performance by 50% through code optimization and image compression.",
        "Collaborated with communications teams to ensure consistent branding and content structure.",
        "Integrated SEO enhancements to improve visibility and search ranking.",
      ],
    },
    {
      title: "Front-End Developer",
      company: "AYF Calabar (Remote)",
      period: "2023 — 2024",
      responsibilities: [
        "Built a real-time member registration and content portal using Firebase and JavaScript, serving 300+ active users.",
        "Implemented responsive layouts, SEO-friendly structures, and accessibility compliance.",
        "Managed deployment on Firebase Hosting, ensuring uptime and version tracking.",
      ],
    },
    {
      title: "Web Developer",
      company: "Goals Afrika",
      period: "2020 — 2022",
      responsibilities: [
        "Refactored legacy code into modular JavaScript and SCSS, reducing load times by 35%.",
        "Designed responsive layouts and modern UI patterns to enhance usability and design consistency.",
        "Implemented SEO best practices, increasing organic traffic by 28% within six months.",
      ],
    },
    {
      title: "ICT Assistant / Web Support",
      company: "Leadpac Foundation",
      period: "2019 — 2022",
      responsibilities: [
        "Provided routine updates and front-end maintenance for organizational websites, achieving 99% uptime.",
        "Assisted with domain management, hosting migration, and workflow documentation.",
        "Supported digital content updates and ensured UI consistency across departments.",
      ],
    },
  ];

  const technicalSkills = {
    Languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js (NestJS/Express)",
      "PHP",
      "HTML5",
      "CSS3/SCSS",
    ],
    "Frontend & Mobile": [
      "React.js",
      "React Native",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI (MUI)",
    ],

    "Backend & Cloud": [
      "Firebase (Firestore, Auth, Functions)",
      "RESTful APIs",
      "API Schema Design",
      "Azure DevOps",
      "PostgreSQL",
    ],

    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Netlify",
      "Vite",
      "Webpack",
      "Render",
    ],
    "Tools & Engineering": [
      "Git",
      "GitHub",
      "CI/CD Pipelines",
      "Figma",
      "Unit/E2E Testing (Jest)",
      "Component-Driven Design",
      "Performance Optimization",
    ],
    "Design & Workflow": [
      "Figma",
      "Jira",
      "Notion",
      "Trello",
      "Agile/Scrum Collaboration",
    ],
    "Best Practices": [
      "Responsive UI",
      "Accessibility (WCAG)",
      "Performance Optimization",
      "SEO",
      "Cross-Browser Compatibility",
    ],
  };

  // const softSkills = [
  //   "Problem-solving",
  //   "UI/UX Design",
  //   "Collaboration",
  //   "Clean Code",
  //   "Accessibility",
  //   "Performance",
  //   "Scalability",
  //   "Agile Development",
  //   "SEO Optimization",
  //   "Cross-functional Teamwork",
  // ];

  // const projects = [
  //   {
  //     name: "DropImg (React + Firebase + Tailwind CSS)",
  //     description:
  //       "Built a lightweight image hosting platform for anonymous uploads with auto-generated links. Improved image load times by 40% through optimized Firebase Storage queries.",
  //   },
  //   {
  //     name: "Knowledge City (React + Firebase + Paystack)",
  //     description:
  //       "Developed an e-learning web app featuring coin-based payments, course modules, and Firestore integration for real-time updates.",
  //   },
  //   {
  //     name: "AYF Calabar Web Portal (HTML + Firebase)",
  //     description:
  //       "Created a multi-step registration form and blog system, boosting member engagement by 3× through responsive design and real-time data handling.",
  //   },
  // ];

  return (
    <MotionDiv>
      <div className="main-content">
        <div className={`resume-content ${theme}`}>
          <h1 className="resume-heading">Resume</h1>
          {/* <p className="resume-subtitle">
            <a
              className="resume-link"
              href="./Onyekachi_Godswill_Richard_Frontend_Developer_CV.pdf"
            >
              View
            </a>{" "}
            or
            <a
              className="resume-link"
              rel="noopener noreferrer"
              href="./Onyekachi_Godswill_Richard_Frontend_Developer_CV.pdf"
              target="_blank"
            >
              download
            </a>{" "}
            the resume
          </p>
          <div className="welcome-bg-text" aria-hidden="true">
            Resume.
          </div> */}

          {/* Resume Content */}
          <div className="resume-container">
            {/* Header */}
            <header className="resume-header">
              <h1 className="resume-name">ONYEKACHI GOD'SWILL RICHARD</h1>
              <h2 className="resume-title">
                Senior Frontend Engineer | React, TypeScript & Design Systems
              </h2>
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
                  Abuja, Nigeria
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
                <div className="contact-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/richard-godswill"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="resume-section">
              <h3 className="section-title">Professional Summary</h3>
              <p className="about-text">
                Senior Software Engineer with over 5 years of experience
                delivering high-performance web and mobile architectures using
                React, React Native, and Node.js. Specialized in the end-to-end
                development of FinTech and EdTech platforms, from initial
                architectural design to API schema definition and CI/CD
                deployment. Expertise in building lightweight, data efficient
                systems for international markets, evidenced by leading
                technical delivery for Ransact and the Nigerian Nursing Success
                platform.
              </p>
            </section>

            {/* Experience */}
            <section className="resume-section">
              <h3 className="section-title">Professional Experience</h3>
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
                    <h4 className="education-degree">B.Sc. Computer Science</h4>
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
              {/* <div className="projects-list">
                {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-description">{project.description}</p>
                  </div>
                ))}
              </div> */}
              <p className="projects-text">
                See projects on my portfolio:{" "}
                <a
                  href="https://www.onyekachi.dev/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.onyekachi.dev/projects
                </a>
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

            {/* Open Source & Community */}
            <section className="resume-section">
              <h3 className="section-title">Open Source & Community</h3>
              <p className="about-text">
                Active contributor to React.js and TypeScript open-source
                projects on GitHub. Created reusable front-end components and
                accessibility-focused snippets.
              </p>
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
