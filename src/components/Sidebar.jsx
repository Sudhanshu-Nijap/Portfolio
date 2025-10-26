import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Code, BookOpen, Award, Star, Mail } from "lucide-react";

const Sidebar = ({ darkMode, menuOpen, setMenuOpen }) => {
  const [open, setOpen] = useState(false);

  // Sync local state with parent state
  useEffect(() => {
    setOpen(menuOpen);
  }, [menuOpen]);

  // Update parent state when local state changes
  useEffect(() => {
    setMenuOpen(open);
  }, [open, setMenuOpen]);

  const links = [
    { name: "About Me", icon: User, href: "#resume" },
    { name: "Experience", icon: BookOpen, href: "#experience" },
    { name: "Tech", icon: Code, href: "#tech" },
    { name: "Education", icon: BookOpen, href: "#education" },
    { name: "Projects", icon: Code, href: "#project" },
    { name: "Achievements", icon: Award, href: "#achievement" },
    { name: "Certificates", icon: Star, href: "#certificate" },
    { name: "Competitive Programming", icon: Home, href: "#competitive" }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`fixed top-5 left-4 z-50 p-2 shadow-lg rounded-md transition-colors duration-200 ${
          darkMode 
            ? 'bg-[#3B3E48] hover:bg-[#4A4D58] text-white' 
            : 'bg-white hover:bg-gray-300 text-gray-800'
        }`}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 p-6 flex flex-col gap-4 transform transition-all duration-300 z-50 ${
          darkMode 
            ? 'bg-[#3B3E48] text-white' 
            : 'bg-gray-100 text-gray-800'
        } ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header: Menu text + Close button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Menu</h2>
          <button
            className={`p-1 rounded transition-colors duration-200 ${
              darkMode 
                ? 'text-white hover:bg-gray-500' 
                : 'text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Links */}
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3 p-2 rounded transition-colors duration-200 ${
              darkMode 
                ? 'hover:bg-gray-500' 
                : 'hover:bg-gray-200'
            }`}
            onClick={() => setOpen(false)}
          >
            <link.icon size={20} />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
