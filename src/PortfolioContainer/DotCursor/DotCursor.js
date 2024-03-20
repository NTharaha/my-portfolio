import React, { useState, useEffect } from "react";
import "./DotCursor.css"; // CSS file for styling the dot cursor

const DotCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => document.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div
      className="dot-cursor"
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default DotCursor;
