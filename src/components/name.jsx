import React, { useState, useEffect, useRef } from "react";

// Function to get the greeting message based on the current hour
const getGreetingMessage = () => {
  const hour = new Date().getHours();

  if (hour >= 0 && hour < 4) {
    return "It's too early for morning!";
  } else if (hour >= 4 && hour < 12) {
    return "Good Morning!";
  } else if (hour >= 12 && hour < 16) {
    return "Good afternoon!";
  } else if (hour >= 16 && hour < 20) {
    return "Good evening!";
  } else if (hour >= 20 && hour < 22) {
    return "It's Time to sleep";
  } else {
    return "It's too late, you should sleep!";
  }
};

// The AnimatedText component renders a word with each character as a separate <h1>
const AnimatedText = ({ text, isDarkMode }) => {
  const letters = text.split("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [greeting, setGreeting] = useState("");

  // Ref to the 'j' letter's h1 element (assuming 'j' is at index 4 for "suraj.")
  const jLetterRef = useRef(null);
  // Ref to the main container of AnimatedText for relative positioning
  const containerRef = useRef(null);
  // Ref to the greeting bubble itself to measure its width
  const greetingRef = useRef(null); // Added this ref

  const [greetingPosition, setGreetingPosition] = useState({});

  useEffect(() => {
    setGreeting(getGreetingMessage());
    const interval = setInterval(() => {
      setGreeting(getGreetingMessage());
    }, 60 * 1000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Effect to update greeting position
  useEffect(() => {
    const updateGreetingPosition = () => {
      if (jLetterRef.current && containerRef.current && greetingRef.current) {
        const jLetterRect = jLetterRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const greetingRect = greetingRef.current.getBoundingClientRect(); // Get greeting's dimensions

        // Calculate position relative to the parent container (containerRef)
        // Adjust for desired vertical offset from the top of 'j'
        // This will place the bubble's bottom edge a certain distance above the 'j'
        const verticalOffset = -greetingRect.height - 10; // Adjust -10 for desired space between bubble bottom and 'j' top
        
        // Calculate horizontal position to center the greeting bubble above 'j'
        // This centers the greeting bubble's *center* over 'j's *center*
        const horizontalOffset = (jLetterRect.left - containerRect.left) + (jLetterRect.width / 2) - (greetingRect.width / 2);


        setGreetingPosition({
          top: (jLetterRect.top - containerRect.top) + verticalOffset,
          left: horizontalOffset,
        });
      }
    };

    // Use a small timeout to ensure greetingRef has a width after initial render
    const timeoutId = setTimeout(updateGreetingPosition, 100);

    window.addEventListener("resize", updateGreetingPosition); // Update on resize
    // We also need to recalculate if the document's scroll position changes, as fixed positions are viewport relative.
    // However, for this specific use case (fixed position on a non-scrolling element like a name), resize is usually enough.
    // If your name moves on scroll, consider more complex scroll event listeners.
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateGreetingPosition);
    };
  }, [letters, greeting]); // Depend on 'greeting' too, as its text changes size

  // Tailwind CSS classes for each character.
  const letterClasses =
    "inline-block drop-shadow-sm text-nowrap align-baseline font-cabinet " +
    "text-[80px] leading-none tracking-tighter " + // Base/mobile font size
    "sm:text-[100px] " + // Slightly larger on small screens
    "md:text-9xl " + // Medium screens (128px)
    "lg:text-[180px] " + // Large screens (180px)
    "font-semibold " + // Consolidated font-weight - apply once
    "py-0.5 px-0.5 " + // Adjusted: Base/mobile padding (reduced px to px-0.5)
    "sm:py-0.5 sm:px-1 " + // Adjusted: Small screens padding
    "md:py-1 md:px-1.5 " + // Adjusted: Medium screens padding
    "lg:py-1.5 lg:px-2 " + // Adjusted: Large screens padding
    "cursor-pointer transition-colors duration-200 " +
    "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700";

  // Handle a click on a letter
  const handleLetterClick = (index, event) => {
    event.stopPropagation();
    setActiveIndex(index);
  };

  // Effect to handle clicks outside the letters
  useEffect(() => {
    const handleDocumentClick = () => {
      setActiveIndex(null);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative flex justify-start items-start" ref={containerRef}>
      {/* Animated text */}
      <div className="flex justify-start">
        {letters.map((letter, index) => (
          <h1
            key={index}
            className={`${letterClasses} ${
              activeIndex === index
                ? "bg-orange-500 text-white"
                : isDarkMode
                ? "text-white"
                : ""
            }`}
            onClick={(event) => handleLetterClick(index, event)}
            // Attach ref to the 'j' letter. For "suraj.", 'j' is at index 4 (0-indexed)
            ref={letter === 'j' && index === 4 ? jLetterRef : null}
          >
            {letter}
          </h1>
        ))}
      </div>

      {/* Greeting message container */}
      <div
        // Tailwind classes for the main bubble appearance
        className={`absolute py-2 px-2 font-semibold shadow-lg transition-opacity duration-500
                    rounded-[50px] /* Using arbitrary value for 50px border-radius */
                    ${
                      isDarkMode
                        ? "bg-blue-400 text-white"
                        : "bg-orange-500 text-white"
                    }
                    sm:text-lg 
                    speech-bubble-tail /* This class will handle the ::after pseudo-element */
                    `}
        style={{
          top: greetingPosition.top + 20,
          left: greetingPosition.left + 100,
          whiteSpace: "nowrap",
          zIndex: 20, // Ensure it's above other content and elements like the navbar
        }}
        ref={greetingRef} // Attach ref to the greeting bubble
      >
        {greeting}
      </div>
    </div>
  );
};

export default AnimatedText;