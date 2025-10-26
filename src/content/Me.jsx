import HoverLink from "../components/HoverLink";
import AnchorIcon from "../components/AnchorIcon";

export default function Me({ darkMode = false }) {
  return (
    <section
      id="me"
      className={`transition-colors duration-300 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10 flex items-center">
        Me :)
        <AnchorIcon
          id="me"
          className="inline ml-2 w-5 h-5 p-1 hover:text-red-500"
        />
      </h1>

      {/* Add your content here */}
      <p className="text-base sm:text-lg text-justify">
        Hi! I'm Sudhanshu, a Full-Stack Developer and Machine Learning
        enthusiast who loves Competitive Programming and building cool web
        projects.
      </p>
    </section>
  );
}
