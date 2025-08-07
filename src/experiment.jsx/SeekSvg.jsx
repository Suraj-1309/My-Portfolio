import React from "react";

const SeekSVG = () => (
  <svg
    viewBox="0 0 120 80"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Page Background */}
    <rect
      x="5"
      y="5"
      width="110"
      height="70"
      rx="8"
      fill="#f9f9f9"
      stroke="#ccc"
      strokeWidth="2"
    />

    {/* Row 1 */}
    <rect x="20" y="18" width="6" height="6" fill="#aaa" rx="1" />
    <text x="32" y="23" fontSize="10" fill="#666" fontFamily="Arial">X - Closed</text>

    {/* Row 2 */}
    <rect x="20" y="36" width="6" height="6" fill="#aaa" rx="1" />
    <text x="32" y="41" fontSize="10" fill="#666" fontFamily="Arial">? - Pending</text>

    {/* Row 3 */}
    <rect x="20" y="54" width="6" height="6" fill="#aaa" rx="1" />
    <text x="32" y="59" fontSize="10" fill="#666" fontFamily="Arial">✔ - Approved</text>
  </svg>
);

export default SeekSVG;
