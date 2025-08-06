import { useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

const RADIUS = 90;
const STROKE = 6;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const ARC_DEG = 270;
const ARC_LENGTH = (ARC_DEG / 360) * CIRCUMFERENCE;
const SECTION_COUNT = 3;
const GAP_DEG = 4;
const GAP = (GAP_DEG / 360) * CIRCUMFERENCE;

const COLORS = {
  easy: '#00C7B7',
  medium: '#F4C70A',
  hard: '#EF4743',
};

const LeetCodeCircle = ({ totalEasy, totalMedium, totalHard, easy, medium, hard, solved, attempting }) => {
  const [animatedValues, setAnimatedValues] = useState({ easy: 0, medium: 0, hard: 0 });
  const [displayedSolved, setDisplayedSolved] = useState(0);

  const total = totalEasy + totalMedium + totalHard;

  const animate = (key, value, delay) => {
    useSpring({
      from: { val: 0 },
      to: { val: value },
      config: { duration: 600 },
      delay,
      onChange: (v) => {
        setAnimatedValues((prev) => ({ ...prev, [key]: v.value.val }));
      },
    });
  };

  const animateTotal = () => {
    useSpring({
      from: { val: 0 },
      to: { val: solved },
      config: { duration: 1800 },
      onChange: (v) => setDisplayedSolved(Math.round(v.value.val)),
    });
  };

  useEffect(() => {
    animate('easy', easy / totalEasy, 0);
    animate('medium', medium / totalMedium, 600);
    animate('hard', hard / totalHard, 1200);
    animateTotal();
  }, [easy, medium, hard, solved, totalEasy, totalMedium, totalHard]);

  const sectionLength = (ARC_LENGTH - GAP * (SECTION_COUNT - 1)) / SECTION_COUNT;
  const startOffset = ((360 - ARC_DEG) / 2 / 360) * CIRCUMFERENCE;

  const getOffset = (index) => startOffset - index * (sectionLength + GAP);
  const getDashArray = (progressRatio) => `${sectionLength * progressRatio} ${CIRCUMFERENCE}`;

  return (
    <div className="relative w-[220px] h-[220px] flex items-center justify-center">
      <svg width="220" height="220">
        {/* Background Ring */}
        <circle
          cx="110"
          cy="110"
          r={RADIUS}
          stroke="#E4E4E7"
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={`${ARC_LENGTH} ${CIRCUMFERENCE}`}
          strokeDashoffset={startOffset}
          transform="rotate(135 110 110)"
        />

        {/* Easy */}
        <circle
          cx="110"
          cy="110"
          r={RADIUS}
          stroke={COLORS.easy}
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={getDashArray(animatedValues.easy)}
          strokeDashoffset={getOffset(0)}
          strokeLinecap="round"
          transform="rotate(135 110 110)"
        />

        {/* Medium */}
        <circle
          cx="110"
          cy="110"
          r={RADIUS}
          stroke={COLORS.medium}
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={getDashArray(animatedValues.medium)}
          strokeDashoffset={getOffset(1)}
          strokeLinecap="round"
          transform="rotate(135 110 110)"
        />

        {/* Hard */}
        <circle
          cx="110"
          cy="110"
          r={RADIUS}
          stroke={COLORS.hard}
          strokeWidth={STROKE}
          fill="none"
          strokeDasharray={getDashArray(animatedValues.hard)}
          strokeDashoffset={getOffset(2)}
          strokeLinecap="round"
          transform="rotate(135 110 110)"
        />
      </svg>

      {/* Center Text */}
      <div className="absolute text-center">
        <div className="text-[30px] font-semibold leading-none text-black">
          {displayedSolved}
          <span className="text-gray-400 text-sm font-normal">/{total}</span>
        </div>
        <div className="text-green-600 text-sm font-medium mt-1">✓ Solved</div>
      </div>

      {/* Attempting Section Inside Arc Cut */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] text-sm text-gray-500 font-medium">
        <div className="text-center">
          <div className="w-6 h-6 rounded-full border border-red-400 flex items-center justify-center mx-auto">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          </div>
          <div className="mt-1">{attempting} Attempting</div>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeCircle;