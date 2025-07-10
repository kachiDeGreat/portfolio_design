import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
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
        <div>
          <Link className="navbar__logo" to="/" onClick={closeMenu}>
            <ConnectIcon />
          </Link>
        </div>

        {/* Desktop Links */}
        <div>
          <div className="navbar__links">
            <RouterNavLink to="/about" onClick={closeMenu}>
              About
            </RouterNavLink>
            <RouterNavLink to="/projects" onClick={closeMenu}>
              Projects
            </RouterNavLink>
            <RouterNavLink to="/contact" onClick={closeMenu}>
              Contact
            </RouterNavLink>
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
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? <MoonIcon /> : <MoonIcon />}
          </button>
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
        <RouterNavLink to="/about" onClick={closeMenu}>
          About
        </RouterNavLink>
        <RouterNavLink to="/projects" onClick={closeMenu}>
          Projects
        </RouterNavLink>
        <RouterNavLink to="/contact" onClick={closeMenu}>
          Contact
        </RouterNavLink>
      </div>
    </nav>
  );
};

const RouterNavLink = ({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: string;
}) => (
  <Link to={to} onClick={onClick} className="navbar__link">
    {children}
  </Link>
);

export default Navbar;
