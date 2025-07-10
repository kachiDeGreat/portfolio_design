import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsMicrosoftTeams } from "react-icons/bs";
import "./SocialLinks.css";
import { useTheme } from "../theme/ThemeContext";

const SocialLinks: React.FC = () => {
  const { theme } = useTheme();
  const Github = IoLogoGithub as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const Linkedin = TiSocialLinkedin as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const Msteams = BsMicrosoftTeams as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className={`social-links ${theme}`}>
      <button onClick={() => openLink("https://github.com/kachiDeGreat")}>
        <Github />
      </button>
      <button
        onClick={() =>
          openLink("https://www.linkedin.com/in/richard-godswill/")
        }
      >
        <Linkedin />
      </button>
      <button onClick={() => openLink("https://github.com/kachiDeGreat")}>
        <Msteams />
      </button>
    </div>
  );
};

export default SocialLinks;
