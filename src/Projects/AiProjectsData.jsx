// ProjectsData.jsx
import { MdScreenshotMonitor } from "react-icons/md";
import TicTacToeHome from "./assets/tic_tac_toe2.png";
import TicTacToe1 from "./assets/tic_tac_toe.png";
import TicTacToe2 from "./assets/tic_tac_toe1.png";

const AiProjectsData = [
  {
    id: "1",
    svg: <MdScreenshotMonitor size={40} />,
    mainPhoto: TicTacToeHome,
    heading: "Seven Tic-Tac-Toe",
    headingText:
      "Seven Tic-Tac-Toe is a AI based game where you can play with but never beat it either it will win or draw the game.",
    technologyUsed: ["JavaScript", "React", "Flask", "Python", ],
    keyFeatures: [
     "Full-stack Tic Tac Toe game (Frontend + Backend)",
    "Human vs AI gameplay with unbeatable AI",
    "AI uses Minimax algorithm with Alpha-Beta pruning",
    "Responsive UI built with React + TailwindCSS",
    "Backend API using Flask for AI move computation",
    "Fast performance with optimized decision-making",
    "Modular structure (Board, Square components)",
    "Real-time interaction between frontend and backend"
    ],
    challenges: [
      "Implementing Minimax with recursion and game tree logic",
      "Optimizing performance using alpha-beta pruning",
      "Managing complex state in React (board, turns, winner, score)",
      "Handling frontend-backend communication (API calls)",
      "Fixing slow AI response in naive implementation",
      "Debugging issues like UI updates and logic errors"
    ],
    achievements: [
      "Built an AI that never loses (optimal gameplay)",
      "Successfully implemented Minimax + Alpha-Beta pruning",
      "Developed a complete full-stack application",
      "Improved skills in React, Flask, and API design",
      "Gained strong understanding of algorithms, recursion, and optimization",
      "Created a clean UI/UX with animations and responsiveness",
      "Applied theoretical concepts to a real-world project",
    ],
    images: [TicTacToeHome, TicTacToe2, TicTacToe1],
    sourceCodeLink:
      "https://github.com/Suraj-1309/Tic-Tac-Toe-Seven",
    projectViewLink:
      "https://7-tic-tac-toe.vercel.app/",
  },
];

export default AiProjectsData;
