export default function AnchorIcon({ id }) {
  return (
    <a
      href={`#${id}`}
      className="absolute -left-6 group-hover:opacity-100 transition-opacity"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 inline-block"
      >
        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3" />
        <path d="M9 17H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </a>
  );
}
