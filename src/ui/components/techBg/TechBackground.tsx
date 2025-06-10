import { useEffect, useRef } from "react";
import "./TechBackground.css";

const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBackground();
    };

    // Draw static background
    const drawBackground = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Main dark background
      ctx.fillStyle = "#020a13";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create center gradient
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

      gradient.addColorStop(0, "rgba(100, 150, 255, 0.15)");
      gradient.addColorStop(1, "rgba(2, 10, 19, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle grid
      drawGrid();
    };

    // Draw grid only (no active nodes)
    const drawGrid = () => {
      const gridSize = 75;
      const lineColor = "rgba(230, 229, 229, 0.05)";

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = lineColor;
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        
        ctx.strokeStyle = lineColor; 
        ctx.stroke();
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="tech-background" />;
};

export default TechBackground;
