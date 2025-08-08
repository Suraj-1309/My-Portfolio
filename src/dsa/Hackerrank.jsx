import HackerrankBadge from "./HackerRankBadge";

export default function Hackerrank({ isDarkMode }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left: Profile and Ranks */}
      <div className="lg:w-1/3 w-full flex flex-col gap-6 w-full">
        <a
          href="https://www.hackerrank.com/surajsinghch2055"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`rounded-2xl p-6 w-full max-w-sm mx-auto shadow-lg relative transition-colors duration-300 border-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <div className="flex items-center gap-4 w-full">
              {/* Avatar */}
              <img
                src="https://media.geeksforgeeks.org/auth/profile/lgg2vjlbmgp7ixxsf759"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />

              {/* Text Info */}
              <div>
                {/* Name */}
                <div className="text-2xl font-bold">suraj singh</div>

                {/* Username */}
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  @surajsinghch2055
                </div>

                {/* Bio */}
                <div className="mt-2 text-base font-light">
                  Currently Student
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Rank Card */}
        <div
          className={`rounded-xl shadow p-6 transition-colors duration-300 border-2 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <div className="text-lg font-semibold mb-3">Language Ranks</div>

          <ul className="list-disc pl-5 text-sm">
            <li>Problem Solving : 1955223</li>
            <li>C++ : 1</li>
            <li>Java : 881506</li>
            <li>Python : 167239</li>
            <li>Sql : 1</li>
            <li>C : 1</li>
          </ul>
        </div>
      </div>

      {/* Right: Badges */}
      {/* Right: Badges */}
      <div className="w-full border-2 rounded-xl p-4">
        <HackerrankBadge isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
