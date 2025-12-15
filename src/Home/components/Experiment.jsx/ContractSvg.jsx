import React from "react";

const ContractSVG = () => (
  <svg
    viewBox="0 0 120 80"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Page Border */}
    <rect
      x="5"
      y="5"
      width="110"
      height="70"
      rx="6"
      fill="#f9f9f9"
      stroke="#ccc"
      strokeWidth="2"
    />

    {/* Page Title Line */}
    <rect x="20" y="15" width="70" height="6" rx="2" fill="#ccc" />

    {/* Bullet List */}
    <circle cx="20" cy="30" r="3" fill="#aaa" />
    <rect x="28" y="27" width="60" height="5" rx="2" fill="#ddd" />

    <circle cx="20" cy="42" r="3" fill="#aaa" />
    <rect x="28" y="39" width="55" height="5" rx="2" fill="#ddd" />

    <circle cx="20" cy="54" r="3" fill="#aaa" />
    <rect x="28" y="51" width="50" height="5" rx="2" fill="#ddd" />

    {/* Signature Circle or Stamp */}
    <circle cx="100" cy="65" r="6" fill="#FFA500" />
  </svg>
);

export default ContractSVG;
