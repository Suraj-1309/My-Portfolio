import React, { useState, useEffect, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Function to update cursor position
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add and remove event listeners for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Add event listeners for hover state
    const handleMouseOver = (e) => {
      // Check if the element being hovered over is interactive
      const isInteractive = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName);
      if (isInteractive || e.target.closest('[data-interactive]')) {
        setIsHovering(true);
      }
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOut);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'custom-cursor-grow' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {/* This is the inner dot */}
      <div className="custom-cursor-dot" />
    </div>
  );
}