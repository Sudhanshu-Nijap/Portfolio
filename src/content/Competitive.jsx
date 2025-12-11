import HoverLink from "../components/HoverLink";
import AnchorIcon from "../components/AnchorIcon";

export default function Competitive({ darkMode = false }) {
  return (
    <div id="competitive">
      <h1 className="group relative text-4xl font-bold mb-8 scroll-mt-32 mt-10">
        Competitive Programming
        <AnchorIcon id="competitive" />
      </h1>

      {/* LeetCode */}
      <div className="flex items-center mb-4 mt-6 text-xl font-bold gap-2">
        {/* LeetCode Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode Logo"
          className="w-6 h-6 object-contain"
        />
        <HoverLink
          href="https://leetcode.com/u/sudhanshunijap/"
          darkMode={darkMode}
        >
          LeetCode
        </HoverLink>
      </div>
      <ul className="list-disc list-inside space-y-3 text-sm max-w-3xl text-justify">
        <li>
          Solved <span className="font-semibold">300+</span> problems,
          improving problem-solving and optimization skills.
        </li>
        <li>
          Earned <span className="font-semibold">5 badges</span> for
          performance and consistency.
        </li>
        <li>
          Participated in <span className="font-semibold">14 contests</span>{" "}
          demonstrating steady growth in rankings.
        </li>
      </ul>

      {/* GeeksForGeeks */}
      <div className="flex items-center mb-4 mt-8 text-xl font-bold gap-2">
        {/* GFG Logo */}
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
          alt="GFG Logo"
          className="w-6 h-6 object-contain rounded"
        />
        <HoverLink
          href="https://www.geeksforgeeks.org/user/sudhanshunijap/"
          darkMode={darkMode}
        >
          GeeksforGeeks
        </HoverLink>
      </div>
      <ul className="list-disc list-inside space-y-3 text-sm max-w-3xl text-justify">
        <li>
          Solved <span className="font-semibold">100+</span> coding problems
          covering Data Structures and Algorithms.
        </li>
        <li>
          Achieved an{" "}
          <span className="font-semibold">institution rank of 12</span> for
          consistent coding performance.
        </li>
      </ul>
    </div>
  );
}
