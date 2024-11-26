import React, { useEffect, useState } from "react";

const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?";

const TextEncrypted = ({ text, interval = 50 }) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }

  return (
    <span className="text-white">
      {outputText}
      {remainder}
    </span>
  );
};

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
        <h1 className="text-gray-500 mb-8 text-4xl font-bold 
        drop-shadow-black
        animate-pulse">
        <TextEncrypted text="ColdByDefault" interval={75} />
      </h1>
      <div className="flex items-center gap-2">
        <span className="loading-dot bg-gray-600 w-4 h-4 rounded-full animate-bounce"></span>
        <span className="loading-dot bg-gray-600 w-4 h-4 rounded-full animate-bounce delay-200"></span>
        <span className="loading-dot bg-gray-600 w-4 h-4 rounded-full animate-bounce delay-400"></span>
      </div>
    </div>
  );
}

export default LoadingScreen;
