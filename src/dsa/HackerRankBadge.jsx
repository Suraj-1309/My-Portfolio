import React from "react";

export default function HackerrankBadge() {
  const badgeImages = [
    "/badges/problem-solving.png",
    "/badges/cpp.png",
    "/badges/java.png",
    "/badges/python.png",
    "/badges/python.png",
    "/badges/python.png",
    // Add more image paths here...
  ];

  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {badgeImages.map((src, i) => (
        <div
          key={i}
          className="hexagon-badge flex items-center justify-center
          w-24 h-28 sm:w-28 sm:h-32 md:w-32 md:h-36"
        >
          <img
            src={src}
            alt={`Badge ${i + 1}`}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
