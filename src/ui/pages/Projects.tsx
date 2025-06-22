import React from "react";
import { MotionDiv } from "../components/animations/pageTransitions";
import { useTheme } from "../components/theme/ThemeContext";
import ayfCalabar from "../../img/ayf-cal.png";
import quizApp from "../../img/quiz-app.png";
import "./Projects.css";

// Project data array
const projects = [
  {
    id: 1,
    title: "AYF Calabar",
    image: ayfCalabar,
    description:
      "Developed the official AYF Calabar website with conference registration capabilities, member management system, and dynamic content updates. Implemented secure payment processing and mobile-responsive design that increased member engagement by 40%.",
    link: "https://ayfcalabar.org.ng/",
    techStack: [
      "JavaScript",
      "Bootstrap CSS",
      "Animate.css",
      "Firebase",
      "Google Sheets App Script",
    ],
  },
  {
    id: 2,
    title: "Nursing Quiz App (UNICAL)",
    image: quizApp,
    description:
      "Built a secure quiz application for nursing students featuring question randomization, timers, and student verification. Implemented Firebase authentication to prevent multiple submissions after initial challenges with Google Sheets. Test with registration numbers: 22/12345678, 11/22222222, or 11/11111111TR",
    link: "https://quiz-app-ashen-eight-96.vercel.app/", // Add your actual link
    techStack: ["TypeScript", "React", "Vercel", "Firebase", "Express"],
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const { theme } = useTheme();

  return (
    <MotionDiv>
      <div className="main-content">
        <div className={`project-content ${theme}`}>
          <div className="welcome-bg-text" aria-hidden="true">
            Projects.
          </div>
          <h1 className="project-heading">Projects</h1>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <h2 className="project-card-header">{project.title}</h2>
                <p className="project-card-body">{project.description}</p>
                <div className="project-tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Projects;
