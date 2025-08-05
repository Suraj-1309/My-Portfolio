import React, { useEffect, useState } from "react";

const mottos = [
  "Solving Tomorrow's Problems Today.",
  "Building a Smarter Future.",
  "Innovation Through Code.",
  "Empowering Ideas with Technology.",
];

const MotoStrip = ({ isDarkMode }) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % mottos.length);
      setIsAnimating(true);

      setTimeout(() => {
        setIsAnimating(false);
        setPrevIndex(null);
      }, 250); // animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      className={`relative w-screen h-20 overflow-hidden text-white ${
        isDarkMode ? "bg-blue-400" : "bg-orange-500"
      }`}
    >
      {/* Previous Motto */}
      {prevIndex !== null && (
        <p
          key={`prev-${prevIndex}`}
          className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl italic font-bold transition-all duration-500 ease-in-out"
          style={{
            transform: isAnimating ? "translateY(-100%)" : "translateY(0%)",
            opacity: isAnimating ? 0 : 1,
          }}
        >
          "{mottos[prevIndex]}"
        </p>
      )}

      {/* Current Motto */}
      <p
        key={`curr-${index}`}
        className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl italic font-bold transition-all duration-500 ease-in-out"
        style={{
          transform: isAnimating ? "translateY(100%)" : "translateY(0%)",
          opacity: isAnimating ? 0 : 1,
        }}
      >
        "{mottos[index]}"
      </p>
    </div>
  );
};

export default MotoStrip;
