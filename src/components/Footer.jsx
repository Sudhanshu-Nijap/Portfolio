import { Link } from "react-router-dom";

export default function Footer({ darkMode = false }) {
  return (
    <p
      className={`text-sm sm:text-base transition-colors duration-300 ${
        darkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      © {new Date().getFullYear()}{" "}
      <Link to="/">
        <span
          className={`font-bold transition-colors duration-300 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Sudhanshu Nijap
        </span>
      </Link>
      <span className="text-red-500 font-bold">.</span>{" "}
      All rights reserved.
    </p>
  );
}
