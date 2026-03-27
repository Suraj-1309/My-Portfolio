// ProjectsData.jsx
import { MdScreenshotMonitor } from "react-icons/md";
import TicTacToeHome from "./assets/tic_tac_toe2.png";
import TicTacToe1 from "./assets/tic_tac_toe.png";
import TicTacToe2 from "./assets/tic_tac_toe1.png";
import FlappyBird1 from "./assets/flappy_bird1.png";
import FlappyBird2 from "./assets/flappy_bird2.png";
import FlappyBird3 from "./assets/flappy_bird3.png";
import FlappyBridDesign from "./assets/flappy_bird_design.png";

const AiProjectsData = [
  {
    id: "2",
    svg: <MdScreenshotMonitor size={40} />,
    mainPhoto: FlappyBird1,
    heading: "AI Flappy Bird",
    headingText:
      "AI Flappy Bird is a Neural Network based game where bird learns to fly through pipes using a simple feedforward neural network and Neat-Python algorithm for training.",
    technologyUsed: ["Python", "Neural Networks", "Neat-Python" ],
    keyFeatures: [
      "AI Flappy Bird game using Neural Networks",
      "Bird learns to fly through pipes using a simple feedforward neural network",
      "Implemented using Pygame for game development",
      "Trained using Neat-Python algorithm for evolving neural networks",
      
    ],
    challenges: [
      "Designing the neural network architecture for the bird's decision-making",
      "Implementing the game mechanics and physics using Pygame",
      "Integrating the neural network with the game to control the bird's actions",
      "Training the AI using Neat-Python and tuning hyperparameters for better performance",
      "Debugging issues related to game logic, neural network training, and performance optimization"
    ],
    achievements: [
      "Successfully implemented an AI that learns to play Flappy Bird",
      "Gained hands-on experience with neural networks and evolutionary algorithms",
      "Developed a complete game using Pygame",
      "Improved skills in Python programming and AI development",
      "Created a visually appealing and functional game with AI integration",
    ],
    images: [FlappyBird1, FlappyBird2, FlappyBird3, FlappyBridDesign],
    sourceCodeLink:
      "https://github.com/Suraj-1309/AI-Flappy-Bird",
    projectViewLink:
      "https://github.com/Suraj-1309/AI-Flappy-Bird",
  },
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
