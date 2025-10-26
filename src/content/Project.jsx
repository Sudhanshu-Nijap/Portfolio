import AnchorIcon from "../components/AnchorIcon";

export default function Project({ darkMode = false }) {
  return (
    <section
      id="project"
      className={`transition-colors duration-300 ${
        darkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="group relative text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 scroll-mt-32 mt-8 sm:mt-10">
        Projects
        <AnchorIcon id="project" />
      </h1>

      {/* Amaze Project */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center text-lg sm:text-xl mb-3 sm:mb-4">
          <span className="font-semibold">1. Amaze — (An Amazon Price Tracker)</span>
          <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
            28th February ’25
          </span>
        </div>

        {/* Video */}
        <div className="flex justify-center mb-6">
          <div className="w-full max-w-[650px] aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/3HoA9vVWzyo"
              title="Amaze Project Demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Description */}
        <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify">
          <li>
            A web scraper that monitors Amazon product prices, availability, and
            details. When a product's price drops below the desired price, it
            automatically sends a notification so you never miss a deal.
          </li>
          <li>Uses Selenium and BeautifulSoup for real-time data extraction.</li>
          <li>ScraperAPI is integrated to bypass Amazon captchas.</li>
          <li>Notifies users via email alerts when prices drop.</li>
        </ul>
      </div>
    </section>
  );
}
