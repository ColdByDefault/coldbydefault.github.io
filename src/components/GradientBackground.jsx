import React, { useEffect } from "react";

function GradientBackground() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradient = document.getElementById("gradient-bg");
      const { clientX, clientY } = e;
      gradient.style.background = `radial-gradient(circle 2000px at 
      ${clientX}px ${clientY}px, #000203, #021b27, #032535)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="gradient-bg"
      className="absolute inset-0 -z-10"
      style={{
        background: "radial-gradient(circle at center, #000203, #021b27, #032535)",
        transition: "background 0.1s ease",
      }}
    ></div>
  );
}

export default GradientBackground;
