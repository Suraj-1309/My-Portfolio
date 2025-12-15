import React, { useEffect, useRef } from "react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const ICON_SIZE = 60;
const ICON_RADIUS = ICON_SIZE / 2;

const ICONS = [
  { key: "c", Component: SiC, color: "#A8B9CC" },
  { key: "cpp", Component: SiCplusplus, color: "#A8B9CC" },
  { key: "java", Component: FaJava, color: "#0877f7ff" },
  { key: "js", Component: SiJavascript, color: "#e2e672ff" },
  { key: "ts", Component: SiTypescript, color: "#007ACC" },
  { key: "python", Component: SiPython, color: "#3776AB" },
  { key: "rust", Component: SiRust, color: "#ff0000ff" },
];

const DsaRight = () => {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const iconsStateRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.5;

    const numIcons = ICONS.length;

    const icons = Array.from({ length: numIcons }).map(() => {
      let angle = Math.random() * 2 * Math.PI;
      let r = Math.random() * (radius - ICON_RADIUS);
      return {
        x: centerX + r * Math.cos(angle),
        y: centerY + r * Math.sin(angle),
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
      };
    });

    iconsStateRef.current = icons;

    // Attach hover logic to each icon
    iconsRef.current.forEach((el, i) => {
      if (el) {
        el.addEventListener("mouseenter", () => {
          const icon = iconsStateRef.current[i];
          // Random jump in direction
          icon.vx = (Math.random() - 0.5) * 2;
          icon.vy = (Math.random() - 0.5) * 2;
          icon.x += icon.vx * 15;
          icon.y += icon.vy * 15;
        });
      }
    });

    const animate = () => {
      for (let i = 0; i < numIcons; i++) {
        const icon = icons[i];

        icon.x += icon.vx;
        icon.y += icon.vy;

        const dx = icon.x - centerX;
        const dy = icon.y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist + ICON_RADIUS >= radius) {
          const normX = dx / dist;
          const normY = dy / dist;
          const dot = icon.vx * normX + icon.vy * normY;
          icon.vx -= 2 * dot * normX;
          icon.vy -= 2 * dot * normY;
          icon.x = centerX + (radius - ICON_RADIUS - 1) * normX;
          icon.y = centerY + (radius - ICON_RADIUS - 1) * normY;
        }

        for (let j = i + 1; j < numIcons; j++) {
          const other = icons[j];
          const dx = other.x - icon.x;
          const dy = other.y - icon.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < ICON_SIZE) {
            [icon.vx, other.vx] = [other.vx, icon.vx];
            [icon.vy, other.vy] = [other.vy, icon.vy];
            const overlap = ICON_SIZE - dist;
            const pushX = (dx / dist) * (overlap / 2);
            const pushY = (dy / dist) * (overlap / 2);
            icon.x -= pushX;
            icon.y -= pushY;
            other.x += pushX;
            other.y += pushY;
          }
        }

        const el = iconsRef.current[i];
        if (el) {
          el.style.transform = `translate(${icon.x - ICON_RADIUS}px, ${icon.y - ICON_RADIUS}px)`;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[350px] overflow-hidden bg-[radial-gradient(circle,_red_1.2px,_transparent_1px)] [background-size:16px_16px]"
      style={{ borderRadius: "40%" }}
    >
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold z-10 text-orange-500 dark:text-white">
        Languages Used :
      </h2>

      {ICONS.map(({ key, Component, color }, index) => (
        <div
          key={key}
          ref={(el) => (iconsRef.current[index] = el)}
          className="absolute"
          style={{
            width: ICON_SIZE,
            height: ICON_SIZE,
            pointerEvents: "auto", // Important for hover
          }}
        >
          <Component size={ICON_SIZE} color={color} />
        </div>
      ))}
    </div>
  );
};

export default DsaRight;
