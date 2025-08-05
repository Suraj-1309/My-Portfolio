import React from "react";

const icons = [
  {
    key: "c",
    svg: (
      <svg viewBox="0 0 128 128" width="60" height="60">
        <path
          fill="#A8B9CC"
          d="M64 .005L4.879 32v64L64 127.994l59.121-31.999v-64z"
        />
        <path
          fill="#FFF"
          d="M80.184 88.174c-5.313 3.053-11.978 3.228-17.397.457-5.456-2.726-8.787-8.228-8.723-14.1.064-5.873 3.521-11.277 9.03-13.927 5.47-2.646 12.103-2.119 17.011 1.34l7.428-7.428c-10.082-8.785-25.515-9.696-36.499-2.143-11.004 7.585-15.373 22.068-10.439 34.451 4.942 12.403 17.994 20.144 31.248 18.244 6.033-.842 11.65-3.584 15.756-7.73l-7.415-7.164z"
        />
      </svg>
    ),
  },
  {
    key: "cpp",
    svg: (
      <svg viewBox="0 0 128 128" width="60" height="60">
        <path
          fill="#00599C"
          d="M64 .005L4.879 32v64L64 127.994l59.121-31.999v-64z"
        />
        <path
          fill="#FFF"
          d="M88 78h-6V66h-6v12h-6v6h6v12h6V84h6zM66 78h-6V66h-6v12h-6v6h6v12h6V84h6z"
        />
      </svg>
    ),
  },
  {
    key: "java",
    svg: (
      <svg viewBox="0 0 128 128" width="60" height="60">
        <path
          fill="#5382A1"
          d="M64 0C28.65 0 0 28.65 0 64s28.65 64 64 64 64-28.65 64-64S99.35 0 64 0z"
        />
        <path
          fill="#FFF"
          d="M82.4 96.2c-11.7 4.9-24.8 4.9-36.5 0l4.2-5.4c9.5 3.8 19.8 3.8 29.3 0zm5.5-13.7c-14.1 5.9-34.8 6.3-47.8 0l4.3-5.4c11.4 4.9 27.6 4.9 39 0z"
        />
      </svg>
    ),
  },
  {
    key: "js",
    svg: (
      <svg viewBox="0 0 128 128" width="60" height="60">
        <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path
          fill="#000"
          d="M82.4 106.2c-1.9 3.9-5.5 6.5-11.1 6.5-5.9 0-9.5-2.9-11.3-6.7l8.6-5.2c1 1.8 2 3.1 4.3 3.1 2.1 0 3.4-0.8 3.4-3.7V70h9.9v36.3z"
        />
      </svg>
    ),
  },
  {
    key: "ts",
    svg: (
      <svg viewBox="0 0 128 128" width="60" height="60">
        <path fill="#007ACC" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path
          fill="#FFF"
          d="M82.2 106.1c-1.9 3.9-5.5 6.5-11.1 6.5-5.9 0-9.5-2.9-11.3-6.7l8.6-5.2c1 1.8 2 3.1 4.3 3.1 2.1 0 3.4-0.8 3.4-3.7V70h9.9v36.1z"
        />
      </svg>
    ),
  },
  {
    key: "python",
    svg: (
      <svg viewBox="0 0 128 128" width="60" height="60">
        <path
          fill="#3776AB"
          d="M64 0a64 64 0 100 128A64 64 0 0064 0zm14 38h-28v14h14v14H38V38c0-8 6-14 14-14h26v14z"
        />
        <path
          fill="#FFE873"
          d="M64 128a64 64 0 100-128v14h14v14H64v14h28v28c0 8-6 14-14 14H52v-14h28v-14H64v14H50v14h28c8 0 14-6 14-14V64H64v14H50v14h28v14z"
        />
      </svg>
    ),
  },
  {
    key: "rust",
    svg: (
      <svg viewBox="0 0 128 128" width="60" height="60">
        <circle cx="64" cy="64" r="64" fill="#000" />
        <path fill="#FFF" d="M88 40H40v48h48V40zm-6 42H46V46h36v36z" />
      </svg>
    ),
  },
];

// Random animation and position for variation
const getRandomAnimation = () => {
  const animations = ["animate-float-x", "animate-float-y"];
  return animations[Math.floor(Math.random() * animations.length)];
};

const getRandomPosition = () => ({
  top: `${Math.random() * 80 + 10}%`,
  left: `${Math.random() * 80 + 10}%`,
  animationDelay: `${Math.random() * 1}s`,
});

const DsaRight = ({ isDarkMode }) => {
  return (
    <div
      className="relative  w-full h-[350px] overflow-hidden   bg-[radial-gradient(circle,_red_1.2px,_transparent_1px)] [background-size:16px_16px]"
      style={{ borderRadius: "40%" }}
    >
         <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold z-10 text-orange-500  dark:text-white">
  Languages Used :
</h2>

      {icons.map(({ key, svg }) => {
        const style = getRandomPosition();
        const animation = getRandomAnimation();
        return (
          <div
            key={key}
            className={`absolute ${animation}`}
            style={{
              top: style.top,
              left: style.left,
              animationDelay: style.animationDelay,
            }}
          >
            {svg}
          </div>
        );
      })}
    </div>
  );
};

export default DsaRight;
