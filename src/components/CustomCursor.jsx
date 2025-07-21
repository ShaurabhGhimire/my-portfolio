import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        background: "linear-gradient(135deg, #00F5D4 0%, #9D4EDD 100%)",
        transition: "transform 40ms linear, background 0.5s ease",
      }}
    />
  );
}
