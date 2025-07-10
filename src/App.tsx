"use client";

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Main from "./ui/pages/Main";
import About from "./ui/pages/About";
import Projects from "./ui/pages/Projects";
import Contact from "./ui/pages/Contact";
import MouseMove from "./ui/components/mouseMove/MouseMove";
import TechBackground from "./ui/components/techBg/TechBackground";
import { ThemeProvider } from "./ui/components/theme/ThemeContext";
import Navbar from "./ui/components/navbar/Navbar";
import ScrollToTop from "./ui/components/scrollToTop/ScrollToTop";
import LoadingScreen from "./ui/components/loadingScreen/LoadingScreen";
import Resume from "./ui/pages/Resume";

function AppContent() {
  const location = useLocation();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Handle initial app load only
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2500); // Show loading for 2.5 seconds on initial load only

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <LoadingScreen isLoading={isInitialLoad} isInitialLoad={isInitialLoad} />
      <TechBackground />
      <Navbar />
      <MouseMove />
      <ScrollToTop />
      <div className="main-content-wrapper">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
