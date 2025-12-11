import HoverLink from "../components/HoverLink";
import AnchorIcon from "../components/AnchorIcon";
import errorHunt from "../assets/error_hunt.jpg";
import codeCraft from "../assets/codecraft.jpeg";
import sprintNova from "../assets/sprint_nova.jpg";

export default function Achievement({ darkMode = false }) {
  return (
    <section
      id="achievement"
      className={`transition-colors duration-300 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Achievements
        <AnchorIcon id="achievement" />
      </h1>

      {/* Error Hunt Debug Duel */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          <span>1. Error Hunt Debug Duel</span>
          <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
            30th January ’25
          </span>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={errorHunt}
            alt="Error Hunt Debug Duel"
            className="w-full max-w-[600px] rounded-lg shadow-md"
          />
        </div>

        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify">
          <li>
            Participated in a Circuit Debugging Competition, working to identify
            and correct errors in both wiring and code of a pre-built circuit.
          </li>
          <li>
            Achieved <strong>3rd Place</strong> for accurately debugging and
            demonstrating a fully functional circuit under time constraints.
          </li>
        </ul>
      </div>

      {/* CodeCraft */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          <span>2. CodeCraft</span>
          <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
            28th February ’25
          </span>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={codeCraft}
            alt="CodeCraft"
            className="w-full max-w-[450px] rounded-lg shadow-md"
          />
        </div>

        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify">
          <li>
            Competed in a DSA (Data Structures & Algorithms) contest testing
            coding efficiency, logic, and problem-solving under pressure.
          </li>
          <li>
            Secured <strong>3rd Place</strong> after winning a tiebreaker round
            in the finals.
          </li>
        </ul>
      </div>

      {/* Sprint Nova */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          <span>3. Sprint Nova</span>
          <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
            28th February ’25
          </span>
        </div>

        <div className="flex justify-center mb-6">
          <img
            src={sprintNova}
            alt="Sprint Nova"
            className="w-full max-w-[450px] rounded-lg shadow-md"
          />
        </div>

        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify">
          <li>
            Participated in an inter-college 6-hour Mini Hackathon as part of a
            3-person team, building a complete Student Council Portal.
          </li>
          <li>
            Earned <strong>3rd Place</strong> for delivering a fully functional
            and polished solution within the tight deadline.
          </li>
        </ul>
      </div>
    </section>
  );
}
