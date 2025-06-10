import React from "react";
import { useState, useEffect } from "react";
import "./MouseMove.css";

const MouseMove: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

  // Mouse movement tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Smooth trailing effect
    const interval = setInterval(() => {
      setTrailingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    }, 16);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [position]);
  return (
    <div>
      <div
        className="mouse-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Optional trailing circle (remove if not needed) */}
      <div
        className="mouse-trail"
        style={{
          left: `${trailingPosition.x}px`,
          top: `${trailingPosition.y}px`,
        }}
      />
    </div>
  );
};

export default MouseMove;
