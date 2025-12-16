import React, {useEffect, useState} from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutCard = ({ isDarkMode }) => {
  const bgClass = isDarkMode ? "bg-black text-white" : "bg-white text-gray-700";
  const accentColor = isDarkMode ? "text-blue-400" : "text-orange-500";
  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-500";


   const [age, setAge] = useState(18);
    useEffect(() => {
    const birthDate = new Date(2006, 8, 13);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  }, 1000);

  
  return (
    <div className={`rounded-3xl border p-6 shadow-sm ${bgClass} h-fit w-full`}>
      <p className="mb-4">
        Hi, Currently I'm a {age} years old and 
        <span className={`${accentColor} font-semibold`}>
          {" "}2nd year Student at GBPUAT in Computer Engg{" "}
        </span>
        . I'm a full-stack software engineer, AI enthusiast, Problem Solver. I
        build websites and applications
      </p>
      <p className="mb-4">
        I am pretty good at working on complex projects to build efficient
        solutions.
      </p>
      <p className="mb-4">
        Off the clock, I dive into{" "}
        <span className={`${accentColor} font-semibold`}>anime</span>, geek out
        on the latest{" "}
        <span className={`${accentColor} font-semibold`}>songs</span>, and play{" "}
        <span className={`${accentColor} font-semibold`}>games</span> like a
        12-year-old.
      </p>

      {/* Signature */}
<div className="flex items-center justify-between mt-4 sm:mt-6">
  <div className="mt-4 sm:mt-6 flex flex-col items-start">
    <p className="text-3xl sm:text-5xl font-signature">SURAJ</p>
  </div>

  <div className="mt-4 sm:mt-6 flex flex-col items-end">
    <p className="text-xs sm:text-sm font-semibold">FIND ME AT</p>
    <p className={`text-xs sm:text-sm ${mutedText}`}>
      surajsingch2055@gmail.com
    </p>
    <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-3 text-lg sm:text-xl text-gray-600">
      {[
        {
          icon: FaLinkedin,
          label: "LinkedIn",
          href: "https://linkedin.com/in/surajsc1",
        },
        {
          icon: FaGithub,
          label: "GitHub",
          href: "https://github.com/Suraj-1309",
        },
        {
          icon: FaEnvelope,
          label: "Email",
          href: "mailto:surajsinghch2055@gmail.com",
        },
      ].map(({ icon: Icon, label, href }, i) => (
        <a
          key={i}
          href={href}
          className="group h-8 w-8 sm:h-10 sm:w-10 rounded-3xl border border-gray-300 transition-colors duration-300 ease-in-out transform active:translate-y-0.5 hover:bg-gradient-to-b from-[#F7F7F7] to-white hover:shadow-[inset_0_5px_3px_0_#fefefe,inset_0px_-3.5px_3px_0px_#00000040,inset_0_-6px_8px_0_#00000015,inset_0_3px_6px_-2px_#00000030] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={label}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutCard;
