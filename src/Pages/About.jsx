import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import DarkModeToggle from "../components/DarkModeToggle";
import Footer from "../components/Footer";
import HoverLink from "../components/HoverLink";

import Me from "../content/Me";
import Experience from "../content/Experience";
import Tech from "../content/Tech";
import Education from "../content/Education";
import Project from "../content/Project";
import Achievement from "../content/Achievement";
import Certificate from "../content/Certificate";
import Competitive from "../content/Competitive";

export default function About() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark mode on <html>
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`relative flex min-h-screen font-sans transition-colors duration-300 ${
        darkMode ? "bg-[#1E1E1E] text-gray-200" : "bg-[#D4D4D4] text-gray-800"
      }`}
    >
      {/* Sidebar */}
      <Sidebar darkMode={darkMode} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Dark Mode Toggle */}
      <div
        className={`fixed top-5 z-50 transition-all duration-300 ${
          menuOpen ? "left-64 sm:left-72" : "left-4 sm:left-16"
        }`}
      >
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Main Content */}
      <main
        className={`flex-1 min-h-screen w-full transition-all duration-300 ${
          menuOpen ? "sm:pl-64" : "pl-6 pr-6"
        }`}
      >
        <section
          id="resume"
          className="max-w-3xl mx-auto mt-20 sm:mt-24 px-4 sm:px-6"
        >
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Resume<span className="text-red-500">.</span>
          </h1>

          <p className="text-base sm:text-lg mb-6 leading-relaxed">
            To get in touch, drop a mail to{" "}
            <HoverLink
              href="mailto:sudhanshun10b3720@gmail.com"
              darkMode={darkMode}
            >
              sudhanshu nijap
            </HoverLink>
          </p>

          {/* Sections */}
          <Me darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Tech darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Project darkMode={darkMode} />
          <Achievement darkMode={darkMode} />
          <Certificate darkMode={darkMode} />
          <Competitive darkMode={darkMode} />
        </section>

        {/* Footer */}
        <footer className="text-center py-5 border-t dark:border-gray-700 border-gray-300 mt-10">
          <Footer darkMode={darkMode}/>
        </footer>
      </main>
    </div>
  );
}
