import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProjectsData from "./ProjectsData";

const DynamicProject = ({ id: propId }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: routeId } = useParams();
  const effectiveId = propId ?? routeId;
  const data =
    location.state ??
    (effectiveId
      ? ProjectsData.find((p) => String(p.id) === String(effectiveId))
      : undefined);

  if (!data) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        No project data found. Try opening from Projects list or ensure the URL
        includes a valid id.
      </div>
    );
  }

  const {
    svg,
    mainPhoto,
    heading,
    headingText,
    technologyUsed,
    keyFeatures,
    challenges,
    achievements,
    images,
    sourceCodeLink,
    projectViewLink,
  } = data;
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const closeTimerRef = useRef(null);
  const isImageViewerOpen = activeImageIndex !== null;

  const openImageViewer = (index) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsImageViewerVisible(false);
    setActiveImageIndex(index);
  };

  const closeImageViewer = () => {
    setIsImageViewerVisible(false);

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = window.setTimeout(() => {
      setActiveImageIndex(null);
      closeTimerRef.current = null;
    }, 260);
  };

  const showPreviousImage = (event) => {
    event?.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length,
    );
  };

  const showNextImage = (event) => {
    event?.stopPropagation();
    setActiveImageIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length,
    );
  };

  const handleImageKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImageViewer(index);
    }
  };

  useEffect(() => {
    if (!isImageViewerOpen) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setIsImageViewerVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [isImageViewerOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isImageViewerOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeImageViewer();
      }
      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }
      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isImageViewerOpen, images.length]);

  const FancyButton = ({ text, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group/button space-x-2 inline-flex whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative text-base border border-gray-300 rounded-3xl origin-center transform active:translate-y-0.5 transition-all duration-100 ease-out hover:before:scale-x-100 hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:shadow-[rgba(255,255,255,0.8)_0px_6px_4px_0px_inset,rgba(255,243,230,0.2)_0px_-4px_2px_0px_inset,rgba(255,123,0,0.25)_0px_-8px_10px_0px_inset,rgba(255,200,163,0.4)_0px_-12px_20px_0px_inset,rgba(255,106,0,0.2)_0px_12px_24px_-2px,rgba(245,106,0,0.3)_0px_3px_8px_-2px] before:transition before:duration-300 before:ease-out before:origin-center before:opacity-0 w-full items-center justify-between px-6 py-3.5 pr-8 before:scale-x-[5%]"
    >
      <div className="text-lg font-medium leading-none text-[#767676] transition-all group-hover/button:-translate-y-0.5 group-hover/button:text-[#2f2f2f]">
        {text}
      </div>
      <div className="absolute right-[22.2px] top-[22px] z-10 h-[2px] w-4 rounded-full bg-white group-hover/button:bg-[#ffc8a315]"></div>
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
    </a>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Back Button */}
      <div className="sticky top-10 z-50 mx-auto flex w-full max-w-[calc(1090px)] items-center justify-start">
        <button
          onClick={() => navigate(-1)}
          className="group/button relative space-x-2 inline-flex whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-base border border-gray-300 rounded-3xl origin-center transform active:translate-y-0.5 transition-all duration-100 ease-out hover:before:scale-x-100 hover:before:opacity-100 before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:shadow-[rgba(255,255,255,0.8)_0px_6px_4px_0px_inset,rgba(255,243,230,0.2)_0px_-4px_2px_0px_inset,rgba(255,123,0,0.25)_0px_-8px_10px_0px_inset,rgba(255,200,163,0.4)_0px_-12px_20px_0px_inset,rgba(255,106,0,0.2)_0px_12px_24px_-2px,rgba(245,106,0,0.3)_0px_3px_8px_-2px] before:transition before:duration-300 before:ease-out before:origin-center before:opacity-0 px-5 py-3.5 pr-6 before:scale-x-[5%] bg-white dark:bg-gray-800 text-[#767676] hover:text-[#2f2f2f]"
        >
          <div className="text-lg font-medium leading-none transition-all group-hover/button:-translate-y-0.5">
            ← Back
          </div>
        </button>
      </div>

      {/* Main Image */}
      <img
        src={mainPhoto}
        alt="main"
        className="w-full rounded-2xl object-cover max-h-[400px] shadow-md"
      />

      {/* Heading + Subheading */}
      <div className="px-4 sm:px-6 space-y-3">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold">
          {heading}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 pt-2 max-w-md sm:max-w-2xl mx-auto">
          {headingText}
        </p>
      </div>

      {/* Action Buttons */}
      <div className=" w-fit flex justify-center gap-3 mt-4 flex-nowrap overflow-x-auto">
        <FancyButton
          text="View Source Code"
          link={sourceCodeLink}
          className="w-auto whitespace-nowrap px-3 py-1 text-xs"
        />
        <FancyButton
          text="Visit Live Project"
          link={projectViewLink}
          className="w-auto whitespace-nowrap px-3 py-1 text-xs"
        />
      </div>

      {/* Tech + Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologyUsed.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-normal  text-gray-800 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Key Features
          </h2>
          <ul className="list-disc pl-5 text-sm sm:text-base text-gray-700 dark:text-gray-300 space-y-2">
            {keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Challenges + Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Challenges</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            {challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
            {achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full h-48 md:h-44 lg:h-48 xl:h-52 overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-600 cursor-zoom-in"
            onClick={() => openImageViewer(i)}
            onKeyDown={(event) => handleImageKeyDown(event, i)}
            role="button"
            tabIndex={0}
            aria-label={`Open screenshot ${i + 1}`}
          >
            <img
              src={img}
              alt={`screenshot-${i}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {isImageViewerOpen && (
        <div
          className="fixed inset-0 z-[200] w-screen min-h-screen overflow-hidden"
          style={{ height: "100dvh" }}
        >
          <div
            className={`absolute inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity duration-300 ${
              isImageViewerVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeImageViewer}
          />

          <button
            onClick={(event) => {
              event.stopPropagation();
              closeImageViewer();
            }}
            className={`absolute top-3 right-3 sm:top-5 sm:right-5 z-30 text-white text-2xl sm:text-3xl bg-black/50 hover:bg-black/70 border border-white/30 rounded-full w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-xl transition-all duration-300 ${
              isImageViewerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
            aria-label="Close image viewer"
          >
            ×
          </button>

          <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-6 md:px-10 py-6 sm:py-8 pointer-events-none">
            <button
              onClick={showPreviousImage}
              className={`pointer-events-auto absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 text-white text-2xl sm:text-3xl bg-black/55 hover:bg-black/75 border border-white/30 rounded-full w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-300 ${
                isImageViewerVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
              aria-label="Show previous image"
            >
              ‹
            </button>

            <div
              className={`pointer-events-auto relative w-full max-w-[1200px] transition-all duration-300 ${
                isImageViewerVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-2"
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={images[activeImageIndex]}
                alt={`fullscreen-screenshot-${activeImageIndex}`}
                className="mx-auto max-h-[76dvh] sm:max-h-[82dvh] w-auto max-w-full rounded-2xl object-contain shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
              />
              <p className="mt-3 text-center text-sm sm:text-base font-medium tracking-wide text-white/90">
                {activeImageIndex + 1} / {images.length}
              </p>
            </div>

            <button
              onClick={showNextImage}
              className={`pointer-events-auto absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 text-white text-2xl sm:text-3xl bg-black/55 hover:bg-black/75 border border-white/30 rounded-full w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-300 ${
                isImageViewerVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              }`}
              aria-label="Show next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicProject;
