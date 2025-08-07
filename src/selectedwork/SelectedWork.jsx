import React from "react";
import SelectedWorkCard from "./SelectedWorkCard";
import profileImage from "../pics/img.jpeg";
import { FaDesktop } from "react-icons/fa";
// Example data (replace with real data)
const selectedWorks = [
  {
    image: profileImage,
    heading: "Creative Agency Website",
    headingSub: "Modern landing page for a creative agency.",
    createdFor: "TechVision Studios", // ✅ Added
    gallery: ["img.jpeg", "/images/project1b.jpg"],
    details: [
      {
        title: "Overview",
        text: "A full-stack agency site with animations and responsive design.",
      },
      {
        title: "Tech Stack",
        text: "React, Tailwind CSS, Framer Motion, Node.js, MongoDB",
      },
    ],
    link: "https://agency.example.com",
  },
  {
    image: "/images/project2.jpg",
    heading: "E-Commerce Platform",
    headingSub: "A complete shopping experience with cart and payment.",
    createdFor: "QuickCart Inc.", // ✅ Added
    gallery: ["/images/project2.jpg", "/images/project2b.jpg"],
    details: [
      {
        title: "Features",
        text: "Product browsing, user auth, cart, payments.",
      },
      {
        title: "Stack",
        text: "Next.js, Tailwind CSS, Stripe, Firebase",
      },
    ],
    link: "https://shop.example.com",
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
        <div className="grid gap-4 grid-cols-1  md:grid-cols-3 place-items-center">
          {selectedWorks.map((work, index) => (
            <SelectedWorkCard key={index} work={work} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SelectedWork;
