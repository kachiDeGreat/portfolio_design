import React, { useState } from "react";
import "./Navbar.css";
import { smoothScroll } from "../../../utils/smoothScroll";
import { useTheme } from "../theme/ThemeContext";
import { FaConnectdevelop } from "react-icons/fa6";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ConnectIcon = FaConnectdevelop as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const MoonIcon = WiMoonAltThirdQuarter as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <ConnectIcon />
        </div>

        {/* Desktop Links */}
        <div>
          <div className="navbar__links">
            <NavLink href="#about" onClick={closeMenu}>
              About
            </NavLink>
            <NavLink href="#projects" onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink href="#contact" onClick={closeMenu}>
              Contact
            </NavLink>
            <button
              onClick={toggleTheme}
              style={{ marginTop: "-0.9rem", fontSize: "1.8rem" }}
              className="theme-toggle"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? <MoonIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>

        <div className="navbar__right">
          <button
            className={`navbar__hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <NavLink href="#about" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink href="#projects" onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink href="#contact" onClick={closeMenu}>
          Contact
        </NavLink>
        <button
          onClick={toggleTheme}
          style={{ marginTop: "-0.9rem", fontSize: "1.8rem" }}
          className="theme-toggle"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <MoonIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: string;
}) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      smoothScroll(href.substring(1));
      onClick();
    }}
    className="navbar__link"
  >
    {children}
  </a>
);

export default Navbar;
