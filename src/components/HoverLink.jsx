export default function HoverLink({ href, children, darkMode = false }) {
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const afterBgColor = darkMode ? 'after:bg-red-500' : 'after:bg-red-400';

  return (
    <span><a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline font-bold z-10 overflow-hidden
                 after:content-[''] after:absolute after:left-0 after:top-auto after:bottom-0
                 after:w-full after:h-0.5 ${afterBgColor} after:-z-10
                 after:transition-all after:duration-300 hover:after:h-5 ${textColor}`}
    >
      {children}
    </a></span>
  );
}
