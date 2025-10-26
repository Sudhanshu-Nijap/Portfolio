import React from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className={`p-2 rounded-md shadow-lg transition-colors duration-200 ${
        darkMode 
          ? 'bg-[#3B3E48] text-white' 
          : 'bg-white text-gray-800'
      }`}
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
