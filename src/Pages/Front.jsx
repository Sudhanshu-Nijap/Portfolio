import { Github, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Front() {
  return (
    <div className="flex flex-col min-h-screen bg-[#191919] text-white font-sans">

      {/* Main Content */}
      <main className="flex flex-col flex-grow items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
          Sudhanshu Nijap<span className="text-red-500">.</span>
        </h1>
        <p className="italic text-gray-400 text-xl sm:text-2xl md:text-3xl mb-8">
          Just me & my laptop<span className="text-red-500">.</span>
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6 text-2xl">
          <a href="https://github.com/Sudhanshu-Nijap" target="_blank" rel="noopener noreferrer">
            <Github size={40} className="text-white  transition-colors duration-200" />
          </a>

          <a href="https://x.com/sudhanshu_nijap" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.simpleicons.org/x/ffffff"
              alt="Twitter X"
              className="w-9 h-9 transition-opacity duration-200"
            />
          </a>

          <a href="mailto:sudhanshun10b3720@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={40} className="text-white  transition-colors duration-200" />
          </a>

          <a href="https://linkedin.com/in/sudhanshunijap" target="_blank" rel="noopener noreferrer">
            <Linkedin size={40} className="text-whitetransition-colors duration-200" />
          </a>
        </div>

        {/* About Page Link */}
        <div className="flex justify-center text-lg sm:text-xl md:text-2xl font-sans text-gray-300 mb-6">
          <Link to="/whoami" className="transition-colors duration-200">~/whoami</Link>
        </div>
      </main>

      {/* Footer only dark mode */}
      <footer className="text-center py-6 sm:py-8 transition-colors duration-300">
        <Footer darkMode={true} />
      </footer>
    </div>
  );
}
