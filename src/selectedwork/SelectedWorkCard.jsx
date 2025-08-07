import React, { useState } from "react";
import FakeSelected from "./FakeSelected";

const SelectedWorkCard = ({ work, isDarkMode }) => {
  const [open, setOpen] = useState(false);

  const handleOpenCase = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpenCase}>
        <div
          className={`rounded-[30px] p-3 w-full sm:w-[450px] border-8 border-double transition-transform duration-300 hover:scale-[1.03] ${
            isDarkMode
              ? "bg-gray-900 border-gray-700"
              : "bg-white border-gray-200"
          }`}
          style={{
            boxShadow: isDarkMode
              ? "0 0 0 1px rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.5)"
              : "0 0 0 1px rgba(0,0,0,0.02), 0 30px 60px rgba(0,0,0,0.08)",
          }}
        >
          {/* Image */}
          <div className="w-full h-[300px] sm:h-[320px] rounded-2xl overflow-hidden mb-4">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          {/* Text */}
          <div className="space-y-1 mb-4 text-left pl-2">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {work.heading}
            </h3>
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 italic ">
              Created for:{" "}
              <span className="font-bold text-base normal-case not-italic">
                {work.createdFor}
              </span>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {work.headingSub}
            </p>
          </div>

          {/* Button */}
          <div
            onClick={handleOpenCase}
            className="group/button space-x-2 inline-flex whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative text-base border border-gray-300 rounded-3xl origin-center transform active:translate-y-0.5 transition-all duration-100 ease-out hover:before:scale-x-100 hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:shadow-[rgba(255,255,255,0.8)_0px_6px_4px_0px_inset,rgba(255,243,230,0.2)_0px_-4px_2px_0px_inset,rgba(255,123,0,0.25)_0px_-8px_10px_0px_inset,rgba(255,200,163,0.4)_0px_-12px_20px_0px_inset,rgba(255,106,0,0.2)_0px_12px_24px_-2px,rgba(245,106,0,0.3)_0px_3px_8px_-2px] before:transition before:duration-300 before:ease-out before:origin-center before:opacity-0 w-full items-center justify-between !px-4 !py-3.5 !pr-5 before:scale-x-[5%]"
          >
            <div className="text-lg font-medium leading-none text-[#767676] transition-all group-hover/button:-translate-y-0.5 group-hover/button:text-[#2f2f2f]">
              Open Case
            </div>
            <div className="absolute right-[22.2px] top-[22px] z-[999999999] h-[2px] w-4 rounded-full bg-white group-hover/button:bg-[#ffc8a315]"></div>
            <svg
              viewBox="0 0 8 8"
              fill="currentColor"
              className="h-2.5 w-2.5 rotate-45 text-[#767676] transition-transform duration-300 ease-in-out group-hover/button:translate-x-2.5 group-hover/button:text-[#2f2f2f]"
            >
              <path
                d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <FakeSelected
          content={{
            heading: work.heading,
            images: work.gallery,
            subheadings: work.details,
            link: work.link,
          }}
          isDarkMode={isDarkMode}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default SelectedWorkCard;
