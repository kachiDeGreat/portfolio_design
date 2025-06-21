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

function AppContent() {
  const location = useLocation();

  return (
    <div className="app-container">
      <TechBackground />
      <Navbar />
      <MouseMove />
      <div className="main-content-wrapper">
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
