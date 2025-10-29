import AnchorIcon from "../components/AnchorIcon";
import HoverLink from "../components/HoverLink";
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
          <HoverLink href="https://github.com/Sudhanshu-Nijap/amaze.git
          " darkMode={darkMode}>
            Amaze — (Amazon Price Tracker)
    </HoverLink>
          <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
            6th April ’25
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

      {/* Student Council Project */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center text-lg sm:text-xl mb-3 sm:mb-4">
          
          <HoverLink href="#" darkMode={darkMode}>
      XIE Student Council
    </HoverLink>
          <span className="text-sm sm:text-lg sm:ml-2 mt-1 sm:mt-0">
            <a href="https://student-council-portal.vercel.app/"  className="text-blue-300 hover:text-blue-500 hover:underline"
            target="_blank"
  rel="noopener noreferrer"
>View Live</a>
          </span>
          <span className="text-sm sm:text-lg opacity-60 sm:ml-2 mt-1 sm:mt-0">
            28th February ’25
          </span>
        </div>

        {/* Description */}
<ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-3xl mx-auto text-justify">
  <li>
    A comprehensive web platform for Xavier Institute of Engineering Student Council to manage and showcase fests, events, winners, and official notices.
  </li>
  <li>Users can browse events, view winners, and explore a live leaderboard across multiple categories.</li>
  <li>Gallery feature to view event photos and media.</li>
  <li>Admins can manage fests, add winners with points, send email notices, and upload images to Cloudinary.</li>
  <li>Dashboard provides statistics to track event engagement and performance.</li>
</ul>


      </div>

    </section>
  );
}
