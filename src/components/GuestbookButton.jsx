import React from "react";
import { FaBookOpen } from "react-icons/fa";

const GuestbookButton = ({ darkMode }) => {
  return (
    <a
      href="/guestbook"
      className={`relative group p-2 rounded-md shadow-lg transition-colors duration-200 ${
        darkMode 
          ? 'bg-[#3B3E48] text-white hover:bg-[#4A4D58]' 
          : 'bg-[#FEE8A3] text-gray-800 hover:bg-[#FEF3C7]'
      }`}
      aria-label="Go to Guestbook"
    >
      <FaBookOpen size={24} />

      {/* Tooltip below */}
      <span
        className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        Guestbook
      </span>
    </a>
  );
};

export default GuestbookButton;
