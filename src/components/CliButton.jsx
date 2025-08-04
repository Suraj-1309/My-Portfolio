import React from "react";

export default function CliButton({ toggleCli }) {
  return (
    <button
      className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 bg-gray-700 hover:bg-gray-800"
      onClick={toggleCli}
    >
      Activate CLI
    </button>
  );
}
