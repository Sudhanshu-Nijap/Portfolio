import HoverLink from "../components/HoverLink";
import AnchorIcon from "../components/AnchorIcon";

export default function Education({ darkMode = false }) {
  return (
    <section
      id="education"
      className={`transition-colors duration-300 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Education
        <AnchorIcon id="education" />
      </h1>

      {/* Xavier */}
      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 text-lg sm:text-xl flex-wrap">
        <HoverLink href="https://www.xavier.ac.in/" darkMode={darkMode}>
          Xavier Institute of Engineering
        </HoverLink>
        <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
          2024 – Present
        </span>
      </div>
      <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-3xl text-justify">
        <li className="font-semibold">
          Bachelor of Engineering (BE), Computer Engineering
        </li>
      </ul>

      {/* Vidyalankar */}
      <div className="flex flex-col sm:flex-row sm:items-center mt-5 sm:mt-6 mb-3 sm:mb-4 text-lg sm:text-xl flex-wrap">
        <HoverLink href="https://vpt.edu.in/" darkMode={darkMode}>
          Vidyalankar Polytechnic
        </HoverLink>
        <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
          2021 – 2024
        </span>
      </div>
      <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-3xl">
        <li className="font-semibold">Diploma, Computer Engineering</li>
      </ul>
    </section>
  );
}
