import React, { useState, useEffect, useRef } from "react";
import "./MouseMove.css";

const MouseMove: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      // Calculate new trail position with smooth following
      setTrailPosition((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.1, // Adjust this value for trail speed
        y: prev.y + (cursorPosition.y - prev.y) * 0.1,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cursorPosition]);

  return (
    <>
      <div
        className="mouse-trail"
        style={{
          transform: `translate(${trailPosition.x - 37.5}px, ${
            trailPosition.y - 37.5
          }px)`,
        }}
      />

      <div
        className="mouse-cursor"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
    </>
  );
};

export default MouseMove;
