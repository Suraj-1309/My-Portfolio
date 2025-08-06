import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const SkillsHeaderCard = ({ isDarkMode }) => {
  const iconList = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <SiJavascript />,
    <FaReact />,
    <SiTailwindcss />,
    <FaNodeJs />,
    <SiMongodb />,
    <FaPython />,
    <FaGitAlt />,
    <SiC />,
    <SiCplusplus />,
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-between px-6 py-4 sm:py-8 sm:px-16">
      {/* Left Section */}
      <div className="w-full md:basis-3/5 flex flex-col  md:text-start items-left text-left gap-4">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-wide mb-2">
          Skills
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
          Skills On Which I Work In My Journey So Far
        </h2>
      </div>

      {/* Right Section: 3 Vertical Rivers */}
      <div className="w-full h-48 hidden md:flex md:basis-2/5 justify-end items-start gap-6 overflow-hidden relative mr-20">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="h-full w-20 overflow-hidden relative">
            <div
              className={`flex flex-col items-center gap-6 text-6xl ${
                colIndex === 1
                  ? "animate-vertical-reverse"
                  : "animate-vertical-loop"
              }`}
            >
              {iconList.map((icon, idx) => (
                <div
                  key={`${colIndex}-${idx}`}
                  className="text-orange-500 dark:text-blue-400"
                >
                  {icon}
                </div>
              ))}

              {iconList.map((icon, idx) => (
                <div
                  key={`copy-${colIndex}-${idx}`}
                  className="text-orange-500 dark:text-blue-400"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsHeaderCard;
