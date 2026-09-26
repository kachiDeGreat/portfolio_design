import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./TopLineLoader.css";

export default function TopLineLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(true);
    setProgress(15);

    const timer1 = setTimeout(() => {
      setProgress(60);
    }, 200);

    const timer2 = setTimeout(() => {
      setProgress(100);
    }, 500);

    const timer3 = setTimeout(() => {
      setVisible(false);
    }, 700);

    const timer4 = setTimeout(() => {
      setProgress(0);
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [location.pathname]);

  return (
    <div className="top-line-loader-container">
      <div
        className="top-line-loader"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}
