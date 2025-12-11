import HoverLink from "../components/HoverLink";
import AnchorIcon from "../components/AnchorIcon";
import quixilinx from "../assets/quixilinx.png";

export default function Experience({ darkMode = false }) {
  return (
    <section
      id="experience"
      className={`transition-colors duration-300 ${darkMode ? "text-gray-100" : "text-gray-900"
        }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Professional Experience
        <AnchorIcon id="experience" />
      </h1>

      {/* Quixilinx block */}
      <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4 text-lg sm:text-xl">
        <img
          src={quixilinx}
          alt="Quixilinx Logo"
          className="w-6 h-6 object-contain flex-shrink-0"
        />
        <HoverLink href="https://quixilinx.com/" darkMode={darkMode}>
          QuixilinxLPP
        </HoverLink>
        <span className="text-base sm:text-lg flex-shrink-0">
          Software Engineer
        </span>
        <span className="text-sm sm:text-lg opacity-60 flex-shrink-0">
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
