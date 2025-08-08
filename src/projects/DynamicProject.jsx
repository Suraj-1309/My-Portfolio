import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DynamicProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        No project data found. Please navigate from the Projects page.
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

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12">{svg}</div>
        <div>
          <h1 className="text-2xl font-bold">{heading}</h1>
          <p className="text-gray-600 dark:text-gray-300">{headingText}</p>
        </div>
      </div>

      {/* Main Image */}
      <img
        src={mainPhoto}
        alt="main"
        className="w-full rounded-xl object-cover mb-8"
      />

      {/* Tech Used */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {technologyUsed.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      {keyFeatures.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenges */}
      {challenges.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Challenges</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Achievements</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Gallery Images */}
      {images.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`screenshot-${i}`}
                className="w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
        >
          View Source Code
        </a>
        <a
          href={projectViewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Visit Live Project
        </a>
      </div>
    </div>
  );
};

export default DynamicProject;
