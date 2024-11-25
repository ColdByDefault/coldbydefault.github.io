import React, { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true); 
      setTimeout(() => {
        onComplete(); 
      }, 1000); 
    }, 1500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center 
      transition-opacity duration-1000 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
        <h1 className="text-main-Cyne mb-8 text-4xl">ColdByDefault</h1>
      <div className="flex items-center gap-2">
        <span className="loading-dot bg-main-Cyne w-4 h-4 rounded-full animate-bounce"></span>
        <span className="loading-dot bg-main-Cyne w-4 h-4 rounded-full animate-bounce delay-200"></span>
        <span className="loading-dot bg-main-Cyne w-4 h-4 rounded-full animate-bounce delay-400"></span>
      </div>
    </div>
  );
}

export default LoadingScreen;
