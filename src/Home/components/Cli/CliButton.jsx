import React, { useState, useEffect } from "react";

export default function CliButton({ toggleCli, isDarkMode }) {
  // Define the text to be typed and animated
  const fullText = "Activate CLI Mode";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  // Effect to handle the typing and backspace animation
  useEffect(() => {
    let timer;
    const typingSpeed = 100; // Speed of typing characters
    const deletingSpeed = 50; // Speed of backspacing characters
    const pauseTime = 1500; // Pause after typing is complete

    if (isDeleting) {
      // Deleting characters
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // Start typing again after a short pause
        setIsDeleting(false);
        setIndex(0);
      }
    } else {
      // Typing characters
      if (index < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.substring(0, index + 1));
          setIndex(index + 1);
        }, typingSpeed);
      } else {
        // Pause and then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, index, isDeleting, fullText]);

  // CSS for the blinking cursor
  const cursorStyle = `
    @keyframes blink {
      50% { opacity: 0; }
    }
    .blinking-cursor {
      font-weight: 100;
      opacity: 1;
      animation: blink 1s step-end infinite;
    }
  `;

  return (
    // The main card container acts as the button.
    // It's a div to allow for more complex child elements.
    <div
      onClick={toggleCli}
      className={`w-full h-24 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] border border-black rounded-lg `}
    >
      {/* Inject custom styles for the blinking cursor */}
      <style>{cursorStyle}</style>

      {/* Terminal window controls (red, yellow, green circles) */}
      <div className={`flex items-center space-x-2 px-4 py-2 rounded-t-xl
                     ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>

      {/* Terminal command line prompt and text */}
      <div className={`p-4 rounded-b-xl h-full flex flex-col justify-center border border-black 
                     ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="flex flex-wrap items-center">
          <span className={`font-mono text-sm sm:text-base mr-2 ${isDarkMode ? "text-green-400" : "text-gray-600"}`}>
            <span className={isDarkMode ? "text-pink-400" : "text-blue-500"}>suraj-cli:$</span>
            :<span className={isDarkMode ? "text-blue-400" : "text-gray-700"}>~</span>$
          </span>
          {/* The animated text with a blinking cursor */}
          <span className={`font-mono text-xl font-bold whitespace-nowrap
                           ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            {displayedText}
            <span className="blinking-cursor">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}
