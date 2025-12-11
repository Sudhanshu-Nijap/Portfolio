import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function HomeButton({ darkMode = false }) {
  return (
    <Link
      to="/whoami"
      className={`relative group p-2 shadow-lg rounded-md transition-colors duration-200 ${
        darkMode
          ? "bg-[#3B3E48] hover:bg-[#4A4D58] text-white"
          : "bg-[#FEE8A3] hover:bg-[#FEF3C7] text-gray-800"
      }`}
    >
      <Home size={24} />
      <span
        className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
      >
        Home
      </span>
    </Link>
  );
}
