import "./App.css";
import Main from "./ui/pages/Main";
import MouseMove from "./ui/components/mouseMove/MouseMove";
import TechBackground from "./ui/components/techBg/TechBackground";
import { ThemeProvider } from "./ui/components/theme/ThemeContext";
import ThemeToggle from "./ui/components/theme/ThemeToggle";
import Navbar from "./ui/components/navbar/Navbar";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <TechBackground />
        <Navbar />
        <MouseMove />
        <div className="main-content-wrapper">
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
