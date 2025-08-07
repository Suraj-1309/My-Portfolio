import HackerrankBadge from "./HackerRankBadge";

export default function Hackerrank({ isDarkMode }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: Profile and Ranks */}
      <div className="lg:w-1/3 w-full flex flex-col gap-6 ">
        <a href="https://www.hackerrank.com/surajsinghch2055" target="_blank" rel="noopener noreferrer">
  <div
    className={`rounded-2xl p-6 w-full max-w-sm mx-auto shadow-lg relative transition-colors duration-300 border-8 border-double border-orange-500 rounded-xl ${
      isDarkMode ? "text-white" : "text-black"
    }`}
  >
    {/* Avatar */}
    <img
      src="/badges/profile-avatar.png"
      alt="Profile"
      className="w-20 h-20 rounded-full mx-auto"
    />

    {/* Name */}
    <div className="mt-4 text-2xl font-bold flex items-center justify-center gap-2">
      suraj singh
    </div>

    {/* Username */}
    <div
      className={`text-sm mt-1 ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      @surajsinghch2055
    </div>

    {/* Bio */}
    <div className="mt-4 text-base font-light">Currently Student</div>
  </div>
</a>

        {/* Rank Card */}
        <div
          className={`rounded-xl shadow p-6 transition-colors duration-300  border-8 border-double border-orange-500 rounded-xl${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <div className="text-lg font-semibold mb-4">Language Ranks</div>
          <ul className="text-sm space-y-2">
            <li>⭐ C++ - Gold</li>
            <li>⭐ Python - Silver</li>
            <li>⭐ Java - Gold</li>
            <li>⭐ SQL - Bronze</li>
          </ul>
        </div>
      </div>

      {/* Right: Badges */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4  border-8 border-double border-orange-500 rounded-xl">
        <HackerrankBadge isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
