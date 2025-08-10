import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ToggleBgButton from "./ToggleBgButton";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function WebTerminal({ onClose }) {
  // CLI output history

  const availableCommands = [
    "about",
    "skills",
    "projects",
    "contact",
    "gui",
    "help",
    "clear",
    "ls",
    "pwd",
    "whoami",
    "date",
    "exit",
    "cat",
    "echo",
    "neofetch",
    "matrix",
    "hack",
  ];

  const [history, setHistory] = useState([
    "Welcome to the Suraj's Protfolio interactive CLI.",
    "Software & AI/ML Developer | Age : 18 | Convert ideas to reality",
    "Type 'help' for a list of available commands.",
    "Type 'gui' to close the Terminal",
  ]);

  // Current input text
  const [input, setInput] = useState("");

  // UI refs
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  // Fullscreen toggle
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Command history for arrow navigation
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Auto-focus input and scroll terminal to bottom
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, input]);

  // Command submission
  const handleCommand = (e) => {
    e.preventDefault();
    const command = input.trim();
    if (!command) return;

    // Add to CLI output
    setHistory((prev) => [...prev, `$ ${command}`]);

    // Add to command history (for arrow navigation)
    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    // Process and output result
    const response = processCommand(command);
    if (response) setHistory((prev) => [...prev, response, ""]);

    // Clear input
    setInput("");
  };

  // Handle arrow keys for history navigation
  const handleKeyDown = (e) => {
    // Arrow Up
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIndex = prev < commandHistory.length - 1 ? prev + 1 : prev;
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
        return newIndex;
      });
    }
    // Arrow Down
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIndex = prev > 0 ? prev - 1 : -1;
        setInput(
          newIndex >= 0
            ? commandHistory[commandHistory.length - 1 - newIndex]
            : ""
        );
        return newIndex;
      });
    }
    // Tab autocompletion
    else if (e.key === "Tab") {
      e.preventDefault();
      if (!input) return;

      const matches = availableCommands.filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );

      if (matches.length === 1) {
        // Only one match — autocomplete
        setInput(matches[0]);
      } else if (matches.length > 1) {
        // Multiple matches — show them in terminal output
        setHistory((prev) => [...prev, matches.join("  ")]);
      }
    }
  };

  // At the top of your component (outside processCommand)
  const sessionStartRef = React.useRef(Date.now());

  // Command processing
  const processCommand = (command) => {
    switch (command.toLowerCase()) {
      case "help":
        return `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Navigation:
  about      - View about section
  skills     - View skills and expertise
  projects   - View project portfolio
  contact    - View contact information
  gui        - Switch to GUI mode

System:
  help       - Show this help message
  clear      - Clear the terminal
  ls         - List available sections
  pwd        - Print current working directory
  whoami     - Display user information
  uptime     - Show how long the website has been open in the user’s browser.
  ping       - Respond with a simple latency check (simulate with random ms).
  exit       - Exit CLI mode

Time:
  date       - Show current date
  time       - Show current time 
  now        - Show both date and time in one line 

Utilities:
  cat        - Display file contents

Fun:
  joke       - Tell a random programming joke.
  quote      - Show a random inspirational quote.
  coffee     - Display “☕ Here’s your coffee” animation.
  tea        - Display "🍵 Here's your tea" animation.
  game       - To play some games.

Use Tab for command completion
Use ↑/↓ arrows for command history
        `;

      case "game":
          return "No Entry!. this section is under developer."

      case "coffee":
        const coffeeFrames = [
          "                            ",
          "      ( (",
          "       ) )",
          "    ........",
          "   |        |]",
          "   \\        /",
          "    `------'",
          "   ☕ Brewing your coffee...",
          "   ☕ Almost ready...",
          "   ☕ Here’s your coffee! Enjoy!",
          "                            ",
        ];

        let i = 0;
        const interval = setInterval(() => {
          setHistory((prev) => [...prev, coffeeFrames[i]]);
          i++;
          if (i >= coffeeFrames.length) {
            clearInterval(interval);
          }
        }, 500);

        return "";

      case "tea":
        const teaArtFrames = [
          "                            ",
          "     (  (",
          "      )  )",
          "    .~~~~~.",
          "   /       \\",
          "  |  (\\_/)  |",
          "  |   / \\   |",
          "   \\       /",
          "    `~~~~~'",
          "   🍵 Brewing your tea...",
          "   🍵 Almost ready...",
          "   🍵 Here’s your tea! Enjoy!",
          "                            ",
        ];

        let frameIndex = 0;
        const frameInterval = setInterval(() => {
          setHistory((prev) => [...prev, teaArtFrames[frameIndex]]);
          frameIndex++;
          if (frameIndex >= teaArtFrames.length) {
            clearInterval(frameInterval);
          }
        }, 500);

        return "";

      

      case "quote":
        const quotes = [
          "The best way to get started is to quit talking and begin doing. – Walt Disney",
          "Don’t let yesterday take up too much of today. – Will Rogers",
          "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
          "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
          "Success is not in what you have, but who you are. – Bo Bennett",
          "Opportunities don't happen, you create them. – Chris Grosser",
          "The harder you work for something, the greater you’ll feel when you achieve it.",
          "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
          "Great things never come from comfort zones.",
          "Push yourself, because no one else is going to do it for you.",
          "Dream it. Wish it. Do it.",
          "Success doesn’t just find you. You have to go out and get it.",
          "The key to success is to focus on goals, not obstacles.",
          "Don’t stop when you’re tired. Stop when you’re done.",
          "Doubt kills more dreams than failure ever will. – Suzy Kassem",
          "Do something today that your future self will thank you for.",
          "Little things make big days.",
          "It always seems impossible until it’s done. – Nelson Mandela",
          "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
          "The future depends on what you do today. – Mahatma Gandhi",
          "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
          "Your limitation—it’s only your imagination.",
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];

      case "joke":
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs!",
          "I told my computer I needed a break… and it froze.",
          "Why do Java developers wear glasses? Because they can’t C#!",
          "What’s a programmer’s favorite hangout place? The Foo Bar.",
          "There are 10 kinds of people in this world: those who understand binary and those who don’t.",
          "Why did the programmer quit his job? Because he didn’t get arrays.",
          "How do you comfort a JavaScript bug? You console it.",
          "Why was the computer cold? It left its Windows open.",
          "Why did the PowerPoint presentation cross the road? To get to the other slide.",
          "Why do Python programmers have low self-esteem? They’re constantly comparing their self to others.",
          "Why was the cell phone wearing glasses? Because it lost its contacts.",
          "Why did the developer go broke? Because he used up all his cache.",
          "Why did the function return early? Because it had a date.",
          "Why was the web developer always so calm? Because he knew how to handle async problems.",
          "Why did the computer keep sneezing? It had a virus.",
          "Why did the programmer bring a ladder to work? Because he heard the project was high level.",
          "Why was the JavaScript developer sad? Because he didn’t know how to null his feelings.",
          "Why do programmers hate nature? Too many bugs.",
          "Why did the coder get kicked out of school? He kept breaking the class.",
          "Why was the database administrator lonely? Because she had too many NULL relationships.",
          "What’s the best way to learn about computers? Bit by bit.",
          "Why was the laptop so tired? It had a hard drive.",
          "What do you call 8 hobbits? A hobbyte.",
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];

      case "uptime":
        const now = Date.now();
        const diff = now - sessionStartRef.current;

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `up ${hours}h ${minutes}m ${seconds}s`;

      case "ping":
        async function simulatePing(url = "https://www.google.com") {
          const pings = [];
          const count = 4; // number of packets

          for (let i = 0; i < count; i++) {
            const start = performance.now();
            try {
              await fetch(url, { mode: "no-cors" }); // we just measure time
              const latency = (performance.now() - start).toFixed(2);
              pings.push(`Reply from ${url}: time=${latency}ms`);
            } catch {
              pings.push(`Request to ${url} failed`);
            }
          }

          return [
            `Pinging ${url} with 32 bytes of data:`,
            ...pings,
            `Ping statistics for ${url}:`,
            `    Packets: Sent = ${count}, Received = ${
              pings.filter((p) => !p.includes("failed")).length
            }, Lost = ${pings.filter((p) => p.includes("failed")).length} (${(
              (pings.filter((p) => p.includes("failed")).length / count) *
              100
            ).toFixed(0)}% loss)`,
          ].join("\n");
        }

        return simulatePing();

      case "whoami":
        return `
███████   ██    ██   ██████    ███████   ███████ 
██        ██    ██   ██   ██   ██   ██       ██
███████   ██    ██   ██████    ███████       ██
     ██   ██    ██   ██   ██   ██   ██   ██  ██
███████   ████████   ██   ██   ██   ██   ██████

   Software & AI/ML Developer | DSA Enthusiast
`;

      case "clear":
        setHistory([]);
        return "Terminal is clear.";
      case "exit":
        onClose();
        return "";
      case "gui":
        setHistory((prev) => [...prev, "Switching to GUI..."]);
        setTimeout(() => onClose(), 500);
        return "";

      case "about":
        return `
┌─ ABOUT ─────────────────────────────────────────────────────┐
│                                                             │
│  Hi, I'm an 18-year-old 2nd year Computer Engineering       │
│  student at GBPUAT. I'm a full-stack software engineer,     │
│  AI enthusiast, and problem solver. I build websites and    │
│  applications with a passion for tackling challenging       │
│  projects and creating efficient solutions.                 │
│                                                             │
│  Off the clock, I dive into anime, geek out on the latest   │
│  songs, and game like a 12-year-old.                        │
│                                                             │
│  Focus Areas:                                               │
│  • AI & Machine Learning                                    │
│  • Full Stack Web Development                               │
│  • Android App Development                                  │
│  • Solving DSA problems & designing real-world solutions    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
  `;

      case "skills":
        return `
┌─ SKILLS ────────────────────────────────────────────────────┐
│                                                             │
│  💻 Languages:                                              
│  █████████████████████ C                  [90%]             │
│  ██████████████████████ C++                [95%]            │
│  ████████████████      Java                [70%]            │
│  ███████████████████   Python              [80%]            │
│  █████████████████████ JavaScript          [85%]            │
│  █████████████████████ PHP                 [90%]            │
│                                                             │
│  🎨 Frontend:                                               
│  █████████████████████████ HTML             [100%]          │
│  █████████████████████████ CSS              [100%]          │
│                                                             │
│  ⚛️ Frontend Frameworks:                                    
│  █████████████████████ React               [90%]            │
│  ██████████████████████ Tailwind CSS        [95%]           │
│                                                             │
│  🗄️ Databases:                                              
│  ███████████████████   MySQL               [80%]            │
│  ███████████████████   MongoDB             [80%]            │
│                                                             │
│  🧠 Domains:                                               
│  ███                   AI                  [20%]            │
│  ███████████████████   Web Development     [80%]            │
│  ██████                Android Development [40%]            │
│  ███████████████████   DSA                 [80%]            │
│                                                             │
│  🛠️ Tools & Platforms:                                      
│  █████████████████████ Git                 [90%]            │
│  ██████████████████████ VS Code            [95%]            │
│  ███████████████       Linux               [70%]            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
  `;

      case "projects":
        return `
┌─ PROJECTS ──────────────────────────────────────────────────┐
│                                                             │
│  [1] GPIMS - Inventory System                [Completed]    │
│      Role-based inventory management system built for       │
│      Government Polytechnic Dehradun to modernize           │
│      resource management for technical institutes.          │
│      Technologies: PHP, MySQL, Git, XAMPP, JavaScript,      │
│      JQuery, CSS, HTML, Bootstrap                           │
│      GitHub: https://github.com/Suraj-1309/GPIMS            │
│      Live: Visit Projects page                              │
│_____________________________________________________________│
│  [2] Pick Manga                               [Completed]   │
│      Dynamic and responsive website with animations         │
│      that suggest the best one-shot manga.                  │
│      Technologies: JavaScript, CSS, HTML, Git               │
│      GitHub: https://github.com/Suraj-1309/                 |
|                My-web-dev-pages/tree/main/manga_review      │
│      Live: Visit Project Page                               │
│_____________________________________________________________│
│  [3] One Piece Doc                           [Completed]    │
│      Web project dedicated to 'One Piece' with interactive  │
│      character cards, music, and animations.                │
│      Technologies: JavaScript, CSS, HTML, Bootstrap         │
│      GitHub: https://github.com/Suraj-1309/one-piece-doc    │
│      Live: Visit Project Page                               │
│_____________________________________________________________│
│  Type 'cat project-<number>' for detailed information       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
  `;

      case "cat project-1":
        return `
┌─ PROJECT 1 DETAILS ─────────────────────────────────────────┐
│                                                             │
│  GPIMS - Inventory System                                   │
│                                                             │
│  A role-based inventory management system built for         │
│  Government Polytechnic Dehradun. An initiative to          │
│  modernize and optimize resource management of              │
│  technical educational institutes.                          │
│                                                             │
│  Technologies:                                              │
│  PHP, MySQL, Git, XAMPP, JavaScript, JQuery, CSS, HTML,     │
│  Bootstrap                                                  │
│                                                             │
│  Key Features:                                              │
│  • Centralized item and inventory tracking                  │
│  • Role-based login and authorization                       │
│  • Department-wise stock management                         │
│  • Report generation and analytics                          │
│  • Real-time updates and usage logs                         │
│  • Request, approval, and transfer system                   │
│  • Responsive Bootstrap UI                                  │
│  • Secure authentication & session management               │
│                                                             │
│  Challenges:                                                │
│  • Managing dynamic data for each user                      │
│  • Real-time update syncing                                 │
│  • Maintaining consistent, lightweight performance          │
│                                                             │
│  Achievements:                                              │
│  • Created as major project for my College                  │
│  • Used by Best Polytechnic of Uttarakhand, India           │
│  • Led a development team                                   │
│  • Received highest marks in major project                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
  `;

      case "cat project-2":
        return `
┌─ PROJECT 2 DETAILS ─────────────────────────────────────────┐
│                                                             │
│  Pick Manga                                                 │
│                                                             │
│  A dynamic, responsive site with smooth animations to       │
│  suggest the best one-shot manga.                           │
│                                                             │
│  Technologies:                                              │
│  JavaScript, CSS, HTML, Git                                 │
│                                                             │
│  Key Features:                                              │
│  • Suggests top-rated one-shot manga                        │
│  • Built entirely with core frontend tech                   │
│                                                             │
│  Challenges:                                                │
│  • Maintaining animations on mobile and desktop             │
│  • Using only pure CSS for animations                       │
│                                                             │
│  Achievements:                                              │
│  • Extended CSS animation skills                            │
│  • Gained deep knowledge of CSS animations                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
  `;

      case "cat project-3":
        return `
┌─ PROJECT 3 DETAILS ─────────────────────────────────────────┐
│                                                             │
│  One Piece Doc                                              │
│                                                             │
│  An immersive web project dedicated to 'One Piece',         │
│  featuring character profiles, music, and animations.       │
│                                                             │
│  Technologies:                                              │
│  JavaScript, CSS, HTML, Bootstrap                           │
│                                                             │
│  Key Features:                                              │
│  • Interactive character cards                              │
│  • Background music                                         │
│  • Responsive design                                        │
│  • Hover and blood-splash animations                        │
│  • Custom 'Japan Wave' font                                 │
│                                                             │
│  Challenges:                                                │
│  • First deployed website                                   │
│  • First HTML/CSS project                                   │
│                                                             │
│  Achievements:                                              │
│  • Learned HTML & CSS basics                                │
│  • Built and deployed first website                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
  `;

      case "contact":
        return `
┌─ CONTACT ────────────────────────────────────────────────────┐
│                                                              │
│  📧 Email:     surajsinghch2055@gmail.com                    │
│  💼 LinkedIn:  linkedin.com/in/surajsc1                      │
│  🐙 GitHub:    github.com/Suraj-1309                         │
│                                                              │
│  Ready to collaborate on your cutting-edge project and       │
│  ideas to become real. Let's work together to build          │
│  something unique.                                           │
│                                                              │
│  Available for:                                              │
│  • AI & Machine Learning Development                         │
│  • Full Stack Web Development                                │
│  • Designing solutions for software                          │
│  • Android Web Development                                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
  `;

      case "ls":
        return `
┌─ AVAILABLE SECTIONS ─────────────────────────────────────────┐
│                                                              │
│  • Home                                                      │
│  • Skills                                                    │
│  • Projects                                                  │
│  • Education                                                 │
│  • Experience                                                │
│  • DSA                                                       │
│  • Achievements                                              │
│  • Contact                                                   │
│  • Resume                                                    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
  `;

      case "date":
        const date = new Date();
        return date.toDateString(); // e.g., "Sun Aug 10 2025"

      case "time": {
        const now = new Date();
        return now.toLocaleTimeString(); // e.g., "14:37:52"
      }

      case "now": {
        return new Date().toString();
      }

      case "sysinfo": {
        return `
System Information:
-------------------
Browser : ${navigator.userAgent.split(") ")[0]})
OS      : ${navigator.platform}
Screen  : ${window.screen.width}x${window.screen.height}
Language: ${navigator.language}
Status  : ${navigator.onLine ? "Online" : "Offline"}
`;
      }

      default:
        return `Command not found: ${command}`;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className={`relative w-full rounded-xl shadow-2xl overflow-hidden bg-gray-900 border border-gray-700 flex flex-col transition-all duration-300 ease-in-out
          ${isFullScreen ? "max-w-full h-full" : "max-w-2xl h-3/4"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex justify-between items-center bg-gray-800 p-2 border-b border-gray-700">
          <div className="flex space-x-2">
            <button
              className="w-4 h-4 bg-red-500 rounded-full"
              onClick={onClose}
            ></button>
            <button
              className="w-4 h-4 bg-yellow-400 rounded-full"
              onClick={() => setIsFullScreen(false)}
            ></button>
            <button
              className="w-4 h-4 bg-green-500 rounded-full"
              onClick={() => setIsFullScreen(true)}
            ></button>
          </div>
          <span className="text-sm font-mono text-gray-400">suraj-cli:$</span>
        </div>

        {/* Output */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto p-4 text-sm font-mono text-white whitespace-pre-wrap"
        >
          {history.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={handleCommand}
          className="flex p-4 border-t border-gray-700"
        >
          <span className="text-green-400 font-bold font-mono mr-2">
            suraj-cli:$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white focus:outline-none font-mono"
          />
        </form>
      </div>
    </div>
  );
}
