import React from "react";
import { X } from "lucide-react";

export default function FakeSelected({ content, isDarkMode, onClose }) {
  const containerStyle = isDarkMode
    ? "bg-[#111111] text-gray-300"
    : "bg-white text-gray-800";

  const { heading, images = [], subheadings = [], link } = content || {};

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center overflow-y-auto ${containerStyle} transition-all duration-500 ease-in-out w-full scrollbar-hide`}
    >
      {/* Navbar (UNCHANGED) */}
      <div className="sticky bg-white dark:bg-black top-10 z-50 mx-auto flex w-full max-w-[calc(1090px)] items-center justify-between rounded-full border border-gray-300  p-2 transition-all ease-in-out duration-700 animate-in fade-in-0 slide-in-from-top-[100%] ">
        <button
          onClick={onClose}
          type="button"
          className="group/x h-10 w-10 !outline-none ring-0 duration-300 ease-in-out focus:!ring-transparent inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-base border border-gray-300 rounded-3xl origin-[50%_50%_0px] hover:bg-gradient-to-b from-[#F7F7F7] to-white hover:shadow-[inset_0_5px_3px_0_#fefefe,inset_0px_-3.5px_3px_0px_#00000040,inset_0_-6px_8px_0_#00000015,inset_0_3px_6px_-2px_#00000030] transform active:translate-y-0.5 !p-0"
        >
          <X className="h-6 w-6 group-hover/x:-translate-y-0.5 transition-transform" />
          <span className="sr-only">Close</span>
        </button>

        <a
          href={link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-white hover:bg-blue-500/90 h-10 px-4 py-2 items-center group/button transition-all"
        >
          <span className="inline-block -translate-y-0.5 text-lg font-medium leading-none group-hover/button:translate-y-0 transition-transform">
            Check It Out
          </span>
        </a>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl w-full px-6 py-20">
        {/* Heading */}
        {heading && <h1 className="text-3xl font-bold mb-6">{heading}</h1>}

        {/* Images Scrollable Row */}
        {images.length > 0 && (
          <div className="flex overflow-x-auto gap-4 mb-10 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400">
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`article-image-${idx}`}
                className="rounded-xl h-60 w-auto object-cover flex-shrink-0"
              />
            ))}
          </div>
        )}

        {/* Subheadings */}
        {subheadings.map((section, idx) => (
          <div key={idx} className="mb-8">
            {section.title && (
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            )}
            {section.text && <p className="text-base mb-2">{section.text}</p>}
            <hr className="border-gray-400 my-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
