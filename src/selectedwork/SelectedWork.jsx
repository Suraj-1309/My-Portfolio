import React from "react";
import SelectedWorkCard from "./SelectedWorkCard";
import { FaDesktop } from "react-icons/fa";

import GpimsHomePage from "./selected_pic/gpims_homepage.webp";
import GpimsDiagram from "./selected_pic/gpims_diagram.webp";
import Gpims1 from "./selected_pic/gpims1.webp";
import Gpims2 from "./selected_pic/gpims2.webp";

import OneHome from "./selected_pic/one_piece_homepage.webp";
import One1 from "./selected_pic/one_piece1.webp";
import One2 from "./selected_pic/one_piece2.webp";

import PickHome from "./selected_pic/pick_manga_homepage.webp";
import Pick1 from "./selected_pic/pick_manga1.webp";
import Pick2 from "./selected_pic/pick_manga2.webp";
import Pick3 from "./selected_pic/pick_manga3.webp";

// Example data (replace with real data)
const selectedWorks = [
  // GPIMS 
  {
    image: GpimsHomePage,
    heading: "GPIMS",
    headingSub:
      "An inventory management system to make the inventory work digital",
    createdFor: "Government Polytechnic Dehradun", // ✅ Added
    gallery: [GpimsHomePage, GpimsDiagram, Gpims1, Gpims2],
    details: [
      {
        title: "Overview",
        text: "GPIMS (Government Polytechnic Inventory Management System) is a comprehensive, web-based inventory management platform developed for Government Polytechnic Dehradun. It is designed to streamline how the institute tracks, manages, and regulates its wide range of assets including equipment, consumables, and lab resources across different departments and branches.",
      },
      {
        title: "Tech Stack",
        text: ` - Server-side: PHP (via XAMPP)
- Database: MySQL
- Front-end: HTML5, CSS3, Bootstrap 4, JavaScript (ES6)
- Development Environment: XAMPP (Apache + PHP + MySQL)
- Version Control: Git & GitHub
`,
      },
      {
        title: "Project Overview",
        text: `GPIMS replaces traditional paper-based workflows with a centralized digital system, offering enhanced transparency, accountability, and efficiency in inventory management. It supports real-time data updates, structured reporting, and seamless coordination between different institutional roles and responsibilities.`,
      },
      {
        title: "Role-Based Access Control",
        text: `The system is built with a four-tier role hierarchy to ensure structured operations and secure access to data and functionality:

1. Inventory Manager
- Manages the overall inventory system.
- Handles item entries and updates.
- Coordinates transfers between departments.
- Ensures accuracy and integrity of stock records.

2. Inventory Officer
- Verifies requests and stock updates.
- Generates and reviews inventory reports.
- Monitors daily inventory operations.

3. Admin (Principal)
- Holds the highest level of authorization.
- Approves critical reports and update requests.
- Oversees departmental inventory data and compliance.

4. Lab Incharge (Branch Level)
- Manages department-specific inventory.
- Requests new items and consumables.
- Tracks usage, availability, and condition of assets.`,
      },
      {
        title: "Features",
        text: `- Centralized item and inventory tracking
- Role-based login and authorization
- Department-wise stock management
- Report generation and analytics
- Real-time updates and usage logs
- Request, approval, and transfer system
- Easy-to-use and responsive interface
- Real‑time stock updates
- Audit trail of all inventory transactions
- Responsive UI built with Bootstrap
- Secure authentication and session management`,
      },
    ],
    link: "https://gpmis.infy.uk/",
  },

  // pick Manga 
  {
    image: PickHome,
    heading: "Pick Manga",
    headingSub: "An website to suggest some most popular One Short Manga",
    createdFor: "Manga Suggestion",
    gallery: [PickHome, Pick1, Pick2, Pick3],
    details: [
  {
    title: "Overview",
    text: "Pick Manga is a website Using code programming tachnology for frontend , it a engaging and highly animated website it is manly based on giving suggestion for one short mangas which are most popular among the community."
  },
  {
    title: "Tech Stack",
    text: `- HTML
    - Pure CSS
    - Javascript`,
  },
  {
    title: "Features: ",
    text: `- 10 Webpages which change on swipping and buttons
    - animation on each component from different sides 
    - dynamic and responsive for various device screens`,
  },
],
    link: "https://suraj-1309.github.io/My-web-dev-pages/manga_review/index.html",
  },

  // one home 
  {
    image: OneHome,
    heading: "One Piece Doc",
    headingSub: "A very animated website dedicated to one piece anime",
    createdFor: "for Fun", // ✅ Added
    gallery: [OneHome, One1, One2],
    details: [
      {
        title: "One Piece Interactive Documentation",
        text: `Welcome to the One Piece Interactive Documentation project! This is an engaging and visually captivating web-based project dedicated to the beloved characters of the anime "One Piece." Dive into the world of pirates, explore character profiles, and enjoy an immersive experience with background music and interactive elements..`,
      },
      {
        title: "Skills I used",
        text: `Here I used HTML, CSS and Javascript to code it.I make it completely using only these things without any package or framework.`,
      },
      {
        title: "Features",
        text: `- Interactive Character Card: Explore detailed profiles of your favorite One Piece characters, including Monkey D. Luffy, Roronoa Zoro, and more.
      - Background Music: Enjoy the ambiance with a looping background track that sets the mood for your adventure.
      - Responsive Design: The site is fully responsive and looks great on any device, from desktops to mobile phones.
      - Animated Effects: Experience a dynamic and engaging interface with animations like hover effects and a blood-splat animation.
      - Custom Fonts: The site uses a special "Japan Wave" font to enhance the overall theme and feel.`,
      },
    ],
    link: "https://suraj-1309.github.io/one-piece-doc/",
  },
];

const SelectedWork = ({ isDarkMode }) => {
  return (
    <>
      <div className="flex items-center gap-6 text-orange-500 font-bold text-lg sm:text-xl tracking-wide mt-8">
        {/* Bookmark SVG icon */}
        <FaDesktop />
        {/* Text */}
        <span>SELECTED WORK TILL JULY 2025</span>
      </div>
      <section className="py-4">
        <div className="grid gap-4 grid-cols-1  md:grid-cols-3 place-items-center whitespace-pre-line">
          {selectedWorks.map((work, index) => (
            <SelectedWorkCard key={index} work={work} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SelectedWork;
