import AnchorIcon from "../components/AnchorIcon";

const sampleCertificates = [
  {
    id: 1,
    title: "🏆 State Level Project Competition",
    issuer: "Vidyalankar Institute of Technology",
    date: "April 2025",
    link: "https://drive.google.com/file/d/1v-mFH7qU-2ZBSCoFRtk_zG8aOXdGNgib/view?usp=sharing",
  },
  {
    id: 2,
    title: "🧠 SQL (Basic)",
    issuer: "HackerRank",
    date: "March 2025",
    link: "https://drive.google.com/file/d/1zJftOERM39YDYcDEpmrtqQTACWYRud0f/view?usp=sharing",
  },
  {
    id: 3,
    title: "🔗 Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "November 2024",
    link: "https://drive.google.com/file/d/14VH1dR0QzWm9eQAEuANp2UZtJ-S5k8lB/view?usp=sharing",
  },
  {
    id: 4,
    title: "🐍 Django",
    issuer: "GeeksforGeeks",
    date: "September 2024",
    link: "https://drive.google.com/file/d/11BvgW87zs6ix0ox21MJgKOpNhiAtcFwN/view?usp=sharing",
  },
];

export default function Certificate({ certificates = sampleCertificates, darkMode = false }) {
  const sortedCertificates = [...certificates].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section
      id="certificate"
      className={`transition-colors duration-300 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Certificates
        <AnchorIcon id="certificate" />
      </h1>

      <div className="flex flex-col items-center">
        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl ">
          {sortedCertificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className={`rounded-xl p-5 border transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105
                ${
                  darkMode
                    ? "bg-[#3B3E48] border-gray-700 hover:border-gray-400 hover:bg-[#4A4D57] hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                }`}
            >
              <div>
                <h3 className="text-lg font-medium leading-tight line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm opacity-80 mt-1">{cert.issuer}</p>
              </div>
              <p className="text-xs opacity-60 text-right mt-2">{cert.date}</p>
            </a>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-sm font-semibold opacity-70">
          ✨ Click on a certificate to view it in a new tab.
        </p>
      </div>
    </section>
  );
}
