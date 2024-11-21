import React, { useEffect } from "react";

function GradientBackground() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradient = document.getElementById("gradient-bg");
      const { clientX, clientY } = e;
      gradient.style.background = `radial-gradient(circle 1800px at 
        ${clientX}px ${clientY}px, 
        #020915 10%, 
        #031424 40%, 
        #021b27 60%, 
        #022430 80%, 
        #032535 100%)`;
    };    

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="gradient-bg"
      className="absolute inset-0 -z-10"></div>
  );
}

export default GradientBackground;