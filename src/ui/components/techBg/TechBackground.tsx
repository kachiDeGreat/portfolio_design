import { useEffect, useRef } from "react";
import "./TechBackground.css";
import { useTheme } from "../theme/ThemeContext";

const TechBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Theme-based colors
      const bgColor = theme === "dark" ? "#020a13" : "#f8fafc";
      const gridColor =
        theme === "dark"
          ? "rgba(230, 229, 229, 0.05)"
          : "rgba(30, 41, 59, 0.05)";
      const gradientStart =
        theme === "dark"
          ? "rgba(100, 150, 255, 0.15)"
          : "rgba(200, 220, 255, 0.3)";
      const gradientEnd =
        theme === "dark" ? "rgba(2, 10, 19, 0)" : "rgba(248, 250, 252, 0)";

      // Draw background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradient
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.max(canvas.width, canvas.height) * 0.4
      );
      gradient.addColorStop(0, gradientStart);
      gradient.addColorStop(1, gradientEnd);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      const gridSize = 90   ;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = gridColor;
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = gridColor;
        ctx.stroke();
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [theme]);

  return <canvas ref={canvasRef} className="tech-background" />;
};

export default TechBackground;
