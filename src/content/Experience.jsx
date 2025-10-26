import HoverLink from "../components/HoverLink";
import AnchorIcon from "../components/AnchorIcon";

export default function Experience({ darkMode = false }) {
  return (
    <section
      id="experience"
      className={`transition-colors duration-300 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Professional Experience
        <AnchorIcon id="experience" />
      </h1>

      {/* Quixilinx block */}
      <div className="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4 text-lg sm:text-xl flex-wrap">
        <HoverLink href="https://quixilinx.com/" darkMode={darkMode}>
          QuixilinxLPP
        </HoverLink>
        <span className="sm:ml-2 mt-1 sm:mt-0 text-base sm:text-lg">
          | Software Engineer
        </span>
        <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
          June '25 – Sept '25
        </span>
      </div>

      <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base max-w-full sm:max-w-3xl leading-relaxed text-justify">
        <li>
          Developed a full-featured job portal by contributing to both frontend
          and backend development, ensuring a seamless and user-friendly
          experience.
        </li>
        <li>
          Collaborated with teammates to troubleshoot issues, implement new
          features, and continuously improve platform performance.
        </li>
        <li>
          Documented code and development processes to support team maintenance
          and scalability of the project.
        </li>
      </ul>
    </section>
  );
}
