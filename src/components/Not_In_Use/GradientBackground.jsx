// Not in use, but keeping it for future reference
// This component creates a gradient background that changes based on the mouse position
import React, { useEffect } from "react";

function GradientBackground() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradient = document.getElementById("gradient-bg");
      const { clientX, clientY } = e;

      if (window.innerWidth > 768) {
        gradient.style.background = `radial-gradient(circle 1800px at 
          ${clientX}px ${clientY}px, 
          #020915 10%, 
          #031424 40%, 
          #021b27 60%,
          #021f2b 80%,
          #021a26 100%)`;
      } else {
        gradient.style.background = `radial-gradient(circle, 
          #020915 10%, 
          #031424 40%, 
          #021b27 60%,
          #021f2b 80%, 
          #021a26 100%)`
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="gradient-bg"
      className="absolute inset-0 -z-10"
      style={{
        background: `radial-gradient(circle, 
          #020915 10%, 
          #031424 40%, 
          #021b27 60%,
          #021f2b 80%, 
          #021a26 100%)`
      }}></div>
  );
}

export default GradientBackground;
