import React from "react";
import { useParams } from "react-router-dom";
import Projects from "../Projects/Projects.jsx";
import DynamicProject from "../Projects/DynamicProject.jsx";

export default function ProjectRoute({ isDarkMode }) {
  const { id } = useParams();

  if (id) {
    return <DynamicProject isDarkMode={isDarkMode} id={id} />;
  }

  return <Projects isDarkMode={isDarkMode} />;
}
