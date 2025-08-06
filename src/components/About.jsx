import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutCard = ({ isDarkMode }) => {
  const bgClass = isDarkMode ? "bg-black text-white" : "bg-white text-gray-700";
  const accentColor = isDarkMode ? "text-blue-400" : "text-orange-500";
  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`rounded-3xl border p-6 shadow-sm ${bgClass} h-full w-full`}>
      <p className="mb-4">
        Hi, Currently I'm a 18 years old
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
      <div className="flex items-center justify-between mt-6">
        <div className="mt-6 flex flex-col items-start">
          <p className="text-5xl font-signature">SURAJ</p>
        </div>

        <div className="mt-6 flex flex-col items-end">
          <p className="text-sm font-semibold">FIND ME AT</p>
          <p className={`text-sm ${mutedText}`}>surajsingch2055@gmail.com</p>
          <div className="flex gap-4 mt-3 text-xl text-gray-600">
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
                className="group h-10 w-10 p-0 rounded-3xl border border-gray-300 transition-colors duration-300 ease-in-out transform active:translate-y-0.5 hover:bg-gradient-to-b from-[#F7F7F7] to-white hover:shadow-[inset_0_5px_3px_0_#fefefe,inset_0px_-3.5px_3px_0px_#00000040,inset_0_-6px_8px_0_#00000015,inset_0_3px_6px_-2px_#00000030] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={label}
              >
                <Icon className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
