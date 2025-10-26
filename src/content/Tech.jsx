import AnchorIcon from "../components/AnchorIcon";

export default function Tech({ darkMode = false }) {
  return (
    <section
      id="tech"
      className={`transition-colors duration-300 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Tech
        <AnchorIcon id="tech" />
      </h1>

      <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base max-w-full sm:max-w-3xl leading-relaxed">
        <li>
          <span className="font-semibold">Languages:</span>{" "}
          TypeScript/JavaScript, Java, Python
        </li>
        <li>
          <span className="font-semibold">Backend:</span>{" "}
          Node.js, Express, Django
        </li>
        <li>
          <span className="font-semibold">UI:</span>{" "}
          React, Tailwind CSS
        </li>
        <li>
          <span className="font-semibold">Database:</span>{" "}
          PostgreSQL, Supabase, SQLite
        </li>
        <li>
          <span className="font-semibold">Tools & Platforms:</span>{" "}
          Git, GitHub, Postman, Vercel, VS Code
        </li>
      </ul>
    </section>
  );
}
