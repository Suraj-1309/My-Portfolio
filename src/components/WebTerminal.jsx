import React, { useState, useEffect, useRef } from "react";

export default function WebTerminal({ onClose }) {
  // State for the command history and current input
  const [history, setHistory] = useState([
    "Welcome to the interactive CLI.",
    "Type 'help' for a list of available commands.",
    "",
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  // NEW: State to manage the terminal's size
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Effect to automatically focus the input field when the terminal opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Scroll to the bottom of the terminal on new output
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, input]);

  // Handle command submission
  const handleCommand = (e) => {
    e.preventDefault();
    const command = input.trim();
    if (!command) return;

    // Add the user's command to the history
    setHistory(prev => [...prev, `$ ${command}`]);
    
    // Simulate a command response
    const response = processCommand(command);
    setHistory(prev => [...prev, response, ""]); // Add response and a new line
    
    // Clear the input
    setInput("");
  };

  // Simple command processing function (for demonstration)
  const processCommand = (command) => {
    switch (command.toLowerCase()) {
      case 'help':
        return "Available commands: 'help', 'clear', 'exit'";
      case 'clear':
        setHistory([]);
        return "Terminal cleared.";
      case 'exit':
        onClose();
        return ""; // Don't show a message if closing
      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    // Outer container for the terminal, acting as a backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose} // Close terminal when clicking outside
    >
      {/* Terminal window container */}
      <div
        // NEW: Conditionally apply sizing classes based on the isFullScreen state
        className={`relative w-full rounded-xl shadow-2xl overflow-hidden bg-gray-900 border border-gray-700 flex flex-col transition-all duration-300 ease-in-out
          ${isFullScreen ? 'max-w-full h-full' : 'max-w-2xl h-3/4'}`}
        onClick={(e) => e.stopPropagation()} // Prevent the click from bubbling up and closing the terminal
      >
        {/* Title bar */}
        <div className="flex justify-between items-center bg-gray-800 p-2 border-b border-gray-700">
          <div className="flex space-x-2">
            {/* Close button */}
            <button className="w-4 h-4 bg-red-500 rounded-full" onClick={onClose}></button>
            {/* NEW: Yellow button to restore size */}
            <button className="w-4 h-4 bg-yellow-400 rounded-full" onClick={() => setIsFullScreen(false)}></button>
            {/* NEW: Green button to toggle full screen */}
            <button className="w-4 h-4 bg-green-500 rounded-full" onClick={() => setIsFullScreen(true)}></button>
          </div>
          <span className="text-sm font-mono text-gray-400">suraj-cli:$</span>
        </div>

        {/* Terminal output area */}
        <div 
          ref={terminalRef} 
          className="flex-1 overflow-y-auto p-4 text-sm font-mono text-white whitespace-pre-wrap"
        >
          {history.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Input area */}
        <form onSubmit={handleCommand} className="flex p-4 border-t border-gray-700">
          <span className="text-green-400 font-bold font-mono mr-2">
            suraj-cli:$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white focus:outline-none font-mono"
          />
        </form>
      </div>
    </div>
  );
}
