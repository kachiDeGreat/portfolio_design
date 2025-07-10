import type React from "react";
import { useEffect, useRef, useState } from "react";
import { MotionDiv } from "../components/animations/pageTransitions";
import { useTheme } from "../components/theme/ThemeContext";
import "./Projects.css";
import { Link } from "react-router-dom";
import SocialLinks from "../components/socialLinks/SocialLinks";

const projects = [
  {
    id: 1,
    title: "Knowledge City",
    video: "/videos/kc.mp4",
    poster: "/videos/posters/kc.png",
    description:
      "An e-learning platform built by D'roid Technologies Ltd. I contributed to key modules such as the Backpack section, Coins system, Diary feature, and courses section.",
    link: "https://kachidegreat.github.io/Goals-Afrika/",
    techStack: ["TypeScript", "React", "Next.js", "Vercel", "Firebase"],
  },
  {
    id: 2,
    title: "Nerves Website",
    video: "/videos/nerves.mp4",
    poster: "/videos/posters/nerves.png",
    description:
      "Online watch store built by D'roid Technologies Ltd. I contributed to the development of the website.",
    link: "https://www.droidtechhq.com/",
    techStack: [
      "TypeScript",
      "React",
      "Next",
      "Firebase",
      "Framer Motion",
      "Prisma",
    ],
  },
  {
    id: 3,
    title: "Nursing Quiz App (UNICAL)",
    video: "/videos/quiz-app.mp4",
    poster: "/videos/posters/quiz-app.png",
    description:
      "Secure quiz app for nursing students with question randomization and verification.",
    link: "https://quiz-app-ashen-eight-96.vercel.app/",
    techStack: ["TypeScript", "React", "Vercel", "Firebase", "Express"],
  },
  {
    id: 4,
    title: "Goals Afrika",
    video: "/videos/goals-afrika.mp4",
    poster: "/videos/posters/goals-afrika.png",
    description: "Platform promoting citizen diplomacy and SDGs across Africa.",
    link: "https://kachidegreat.github.io/Goals-Afrika/",
    techStack: [
      "JavaScript",
      "React",
      "Vercel",
      "Github Pages",
      "Bootstrap CSS",
    ],
  },
  {
    id: 5,
    title: "Diocese Of Calabar",
    video: "/videos/dio-cal.mp4",
    poster: "/videos/posters/dio-cal.png",
    description:
      "Official website of the Diocese of Calabar, Church of Nigeria (Anglican Communion)",
    link: "https://diocese-of-calabar-website.vercel.app/",
    techStack: ["TypeScript", "React", "Vercel", "Firebase", "Express"],
  },
  {
    id: 6,
    title: "D'roid Technologies Ltd",
    video: "/videos/droid.mp4",
    poster: "/videos/posters/droid.png",
    description:
      "Official website of D'roid Technologies Ltd, showcasing our services and projects.",
    link: "https://www.droidtechhq.com/",
    techStack: ["TypeScript", "React", "Vercel", "Firebase", "Express"],
  },
  {
    id: 7,
    title: "AYF Calabar",
    video: "/videos/ayf-cal.mp4",
    poster: "/videos/posters/ayf-cal.png",
    description:
      "Developed the official AYF Calabar website with conference registration, member management, and dynamic content updates.",
    link: "https://ayfcalabar.org.ng/",
    techStack: [
      "JavaScript",
      "Bootstrap CSS",
      "Animate.css",
      "Firebase",
      "Google Sheets App Script",
    ],
  },
];

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const hasStarted = useRef<boolean[]>([]);
  const [videoLoaded, setVideoLoaded] = useState<boolean[]>([]);
  const [posterLoaded, setPosterLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const video = videoRefs.current[index];
          if (!video || hasStarted.current[index]) return;

          if (entry.isIntersecting) {
            setTimeout(() => {
              video.play().catch((e) => console.log("Autoplay prevented:", e));
              hasStarted.current[index] = true;
            }, index * 2000);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, projects.length);
    hasStarted.current = new Array(projects.length).fill(false);
    setVideoLoaded(new Array(projects.length).fill(false));
    setPosterLoaded(new Array(projects.length).fill(false));
  }, []);

  return (
    <MotionDiv>
      <div className="main-content">
        <div className={`project-content ${theme}`}>
          <div className="welcome-bg-text" aria-hidden="true">
            Projects.
          </div>
          <h1 className="project-heading">Projects</h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-video-container">
                  {(!videoLoaded[index] || !posterLoaded[index]) && (
                    <div className="video-loading-spinner">
                      <div className="spinner"></div>
                    </div>
                  )}

                  {project.poster && !posterLoaded[index] && (
                    <img
                      src={project.poster}
                      alt=""
                      style={{ display: "none" }}
                      onLoad={() => {
                        setPosterLoaded((prev) => {
                          const updated = [...prev];
                          updated[index] = true;
                          return updated;
                        });
                      }}
                    />
                  )}

                  {posterLoaded[index] && !videoLoaded[index] && (
                    <div className="video-placeholder">
                      <img
                        src={project.poster}
                        alt={`${project.title} preview`}
                      />
                    </div>
                  )}

                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    src={project.video}
                    loop
                    muted
                    playsInline
                    poster={posterLoaded[index] ? project.poster : undefined}
                    className="project-video"
                    aria-label={`${project.title} demo`}
                    onCanPlay={() => {
                      setVideoLoaded((prev) => {
                        const updated = [...prev];
                        updated[index] = true;
                        return updated;
                      });
                    }}
                  />

                  <div className="project-details-overlay">
                    <div className="project-details-content">
                      <h2 className="project-card-header">{project.title}</h2>
                      <p className="project-card-body">{project.description}</p>
                      <div className="project-tech-tags">
                        {project.techStack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>

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
              </div>
            ))}
          </div>
          <br />
          <div className="link-container">
            <div>
              <Link to="/resume" className="link_dev">
                Lets Go To My Resume. <span className="arrow">→</span>
              </Link>
            </div>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <br />
    </MotionDiv>
  );
};

export default Projects;
