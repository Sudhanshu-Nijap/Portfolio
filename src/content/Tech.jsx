import AnchorIcon from "../components/AnchorIcon";

export default function Tech({ darkMode = false }) {
  const item = "flex items-center gap-2";
  const img = "w-5 h-5 object-contain";

  // All CDN Icons
  const icons = {
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tailwind: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    supabase: "https://supabase.com/dashboard/img/supabase-logo.svg",
    sqlite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
    // github: "https://img.icons8.com/material-rounded/96/github.png",
    postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    vercel: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  };

  return (
    <section
      id="tech"
      className={`transition-colors duration-300 ${darkMode ? "text-gray-100" : "text-gray-900"
        }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Tech
        <AnchorIcon id="tech" />
      </h1>

      <div className="space-y-5 sm:space-y-6 text-sm sm:text-base max-w-full sm:max-w-3xl leading-relaxed">

        {/* Languages */}
        <div>
          {/* <p className="font-semibold mb-2">Languages:</p> */}
          <div className="flex flex-wrap gap-4">
            <p className="font-semibold">Languages:</p>
            <span className={item}><img src={icons.python} className={img} /> Python</span>
            <span className={item}><img src={icons.javascript} className={img} /> JavaScript</span>
            <span className={item}><img src={icons.typescript} className={img} /> TypeScript</span>
          </div>
        </div>

        {/* Backend */}
        <div>
          {/* <p className="font-semibold mb-2">Backend:</p> */}
          <div className="flex flex-wrap gap-4">
            <p className="font-semibold">Backend:</p>
            <span className={item}><img src={icons.node} className={img} /> Node.js</span>
            <span className={item}><img src={icons.express} className={img} /> Express</span>
            <span className={item}><img src={icons.django} className={img} /> Django</span>
          </div>
        </div>

        {/* UI */}
        <div>
          {/* <p className="font-semibold mb-2">UI:</p> */}
          <div className="flex flex-wrap gap-4">
            <p className="font-semibold">UI:</p>
            <span className={item}><img src={icons.react} className={img} /> React</span>
            <span className={item}><img src={icons.tailwind} className={img} /> Tailwind CSS</span>
          </div>
        </div>

        {/* Database */}
        <div>
          {/* <p className="font-semibold mb-2">Database:</p> */}
          <div className="flex flex-wrap gap-4">
            <p className="font-semibold">Database:</p>
            <span className={item}><img src={icons.postgres} className={img} /> PostgreSQL</span>
            <span className={item}><img src={icons.supabase} className={img} /> Supabase</span>
            <span className={item}><img src={icons.sqlite} className={img} /> SQLite</span>
          </div>
        </div>

        {/* Tools */}
        <div>
          {/* <p className="font-semibold mb-2">Tools & Platforms:</p> */}
          <div className="flex flex-wrap gap-4">
            <p className="font-semibold">Tools & Platforms:</p>
            <span className={item}><img src={icons.git} className={img} /> Git</span>
            <span className={item}><img src={icons.github} className={img} /> GitHub</span>
            <span className={item}><img src={icons.postman} className={img} /> Postman</span>
            <span className={item}><img src={icons.vercel} className={img} /> Vercel</span>
            <span className={item}><img src={icons.vscode} className={img} /> VS Code</span>
          </div>
        </div>

      </div>
    </section>
  );
}
