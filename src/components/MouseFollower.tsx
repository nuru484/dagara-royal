// components/MouseFollower.js
"use client";
import { useMousePosition } from "../hooks/useMousePosition";
import { useState, useEffect } from "react";

const MouseFollower = () => {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="mouse-follower"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default MouseFollower;
