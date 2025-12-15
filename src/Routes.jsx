import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AchievementsRoute from "./routes/AchievementsRoute.jsx";
import ContactRoute from "./routes/ContactRoute.jsx"; // Route
import DSARoute from "./routes/DSARoute.jsx";
import EducationRoute from "./routes/EducationRoute.jsx";
import ExperienceRoute from "./routes/ExperienceRoute.jsx";
import HomeRoute from "./Home/Home.jsx";
import ProjectRoute from "./routes/ProjectRoute.jsx";
import ResumeRoute from "./routes/ResumeRoute.jsx";
import SkillsRoute from "./routes/SkillsRoute.jsx";

export default function AppRoutes({ isDarkMode }) {
  return (
    <Routes>

      <Route path="/" element={<HomeRoute isDarkMode={isDarkMode} />} />
      <Route path="/skills" element={<SkillsRoute isDarkMode={isDarkMode} />} />
      <Route path="/projects" element={<ProjectRoute isDarkMode={isDarkMode} />}/>
      <Route path="/projects/:id" element={<ProjectRoute isDarkMode={isDarkMode} />} />
      <Route path="/education" element={<EducationRoute isDarkMode={isDarkMode} />} />
      <Route path="/experience" element={<ExperienceRoute isDarkMode={isDarkMode} />} />
      <Route path="/dsa" element={<DSARoute isDarkMode={isDarkMode} />} />
      <Route path="/achievements" element={<AchievementsRoute isDarkMode={isDarkMode} />} />
      <Route path="/contact" element={<ContactRoute />} />
      <Route path="/resume" element={<ResumeRoute isDarkMode={isDarkMode} />} />
    </Routes>
  );
}
