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
    title: "Drop Img",
    video:
      "https://res.cloudinary.com/dilzshtrf/video/upload/v1753750817/Untitled_video_-_Made_with_Clipchamp_kvwmbi.mp4",
    poster: "https://dropimg.onyekachi.dev/zjrzgtgi4fiq0bwu1iep",
    description:
      "Fast, anonymous image hosting for developers. Upload and share instantly with direct embed links.",
    link: "https://dropimg.onyekachi.dev/",
    techStack: ["TypeScript", "React", "Cloudinary", "Vercel"],
  },
  {
    id: 2,
    title: "CGPA Calculator",
    video:
      "https://res.cloudinary.com/dilzshtrf/video/upload/CGPA_Calculator_-_Onyekachi.dev_-_Google_Chrome_2025-08-11_22-15-52_ko1njc.mp4",
    poster: "https://dropimg.onyekachi.dev/w0sdoqv7rvo9thsrtazq",
    description:
      "A web app to help students calculate GPA per semester and CGPA across multiple years. Features real-time calculations, offline saving, and mobile-friendly design.",
    link: "https://cgpa-calculator.onyekachi.dev/",
    techStack: ["TypeScript", "React", "Vercel"],
  },
  {
    id: 3,
    title: "Knowledge City",
    video: "/videos/kc.mp4",
    poster: "/videos/posters/kc.png",
    description:
      "An e-learning platform with Backpack, Coins system, Diary, and Courses sections — built in collaboration with D'roid Technologies Ltd.",
    link: "https://kachidegreat.github.io/Goals-Afrika/",
    techStack: ["TypeScript", "React", "Next.js", "Vercel", "Firebase"],
  },
  {
    id: 4,
    title: "Nerves Website",
    video:
      "https://res.cloudinary.com/dilzshtrf/video/upload/Nerve_Systems_Network___E-Commerce_Transport_Solutions_-_Google_Chrome_2025-09-24_22-19-07_online-video-cutter.com_bewfhd.mp4",
    poster: "https://dropimg.onyekachi.dev/zfolpzg55hwtletysyaz",
    description:
      "E-commerce website for an online watch store, developed with modern UI and smooth shopping experience.",
    link: "https://nerves-f3753.web.app",
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
    id: 5,
    title: "Nursing Quiz App (UNICAL)",
    video:
      "https://res.cloudinary.com/dilzshtrf/video/upload/Nerve_Systems_Network___E-Commerce_Transport_Solutions_-_Google_Chrome_2025-09-24_22-19-07_online-video-cutter.com_1_gipvfl.mp4",
    poster: "https://dropimg.onyekachi.dev/myvhfhezvsfqldph1gvc",
    description:
      "Secure quiz app for nursing students with randomized questions, verification, and real-time scoring.",
    link: "https://quiz-app-ashen-eight-96.vercel.app/",
    techStack: ["TypeScript", "React", "Vercel", "Firebase", "Express"],
  },
  {
    id: 6,
    title: "Goals Afrika",
    video: "/videos/goals-afrika.mp4",
    poster: "/videos/posters/goals-afrika.png",
    description:
      "Platform promoting citizen diplomacy and SDGs across Africa through content, projects, and campaigns.",
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
    id: 7,
    title: "Diocese Of Calabar",
    video: "/videos/dio-cal.mp4",
    poster: "/videos/posters/dio-cal.png",
    description:
      "Official website of the Diocese of Calabar, Church of Nigeria (Anglican Communion), featuring events, news, and resources.",
    link: "https://diocese-of-calabar-website.vercel.app/",
    techStack: ["TypeScript", "React", "Vercel", "Firebase", "Express"],
  },
  {
    id: 8,
    title: "D'roid Technologies Ltd",
    video: "/videos/droid.mp4",
    poster: "/videos/posters/droid.png",
    description:
      "Official website of D'roid Technologies Ltd, showcasing services, projects, and company profile.",
    link: "https://www.droidtechhq.com/",
    techStack: ["TypeScript", "React", "Vercel", "Firebase", "Express"],
  },
  {
    id: 9,
    title: "AYF Calabar",
    video: "/videos/ayf-cal.mp4",
    poster: "/videos/posters/ayf-cal.png",
    description:
      "Official AYF Calabar website with conference registration, member management, and dynamic content updates.",
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
    id: 10,
    title: "TASKFLOW",
    video:
      "https://res.cloudinary.com/dilzshtrf/video/upload/Nerve_Systems_Network___E-Commerce_Transport_Solutions_-_Google_Chrome_2025-09-24_22-19-07_online-video-cutter.com_2_jztgol.mp4",
    poster: "https://dropimg.onyekachi.dev/fecf0066n574v6qo7nxq",
    description:
      "TaskFlow is an intelligent task management app that uses custom rules to automatically prioritize your to-do list based on your unique workflow and preferences.",
    link: "https://taskflowapp.onyekachi.dev/",
    techStack: ["TypeScript", "React", "Vite", "Firebase Firestore", "Vercel"],
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
                Lets Go To My Resume <span className="arrow">→</span>
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
