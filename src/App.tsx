import "./App.css";
import Main from "./ui/pages/Main";
import MouseMove from "./ui/components/mouseMove/MouseMove";
import TechBackground from "./ui/components/techBg/TechBackground";

function App() {
  return (
    <div className="app-container">
      <TechBackground />
      <MouseMove />
      <Main />
    </div>
  );
}

export default App;
