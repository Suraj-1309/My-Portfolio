import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaBook } from 'react-icons/fa';

const FooterEnd = ({ isDarkMode }) => {
  const baseIconStyle = 'text-2xl transition-colors duration-200 cursor-pointer';

  const hoverColor = isDarkMode
    ? 'text-white hover:text-blue-400'
    : 'text-black hover:text-orange-500';

  return (
    <footer className="pt-8 text-center">
      <div className="flex justify-center gap-6">
        <a href="https://github.com/Suraj-1309" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`${baseIconStyle} ${hoverColor}`} />
        </a>
        <a href="https://linkedin.com/in/surajsc1" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={`${baseIconStyle} ${hoverColor}`} />
        </a>
        <a href="/dsa" target="_blank" rel="noopener noreferrer">
          <FaCode className={`${baseIconStyle} ${hoverColor}`} />
        </a>
      </div>
      <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        © 2025 CodeVamp Innovations. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterEnd;
