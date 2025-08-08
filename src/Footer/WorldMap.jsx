import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Graticule,
  Line,
  Marker,
} from "react-simple-maps";
import { geoPath, geoMercator } from "d3-geo";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Coordinates
const points = [
  [78.58, 27.041], // Delhi
];

// Generate lines between consecutive points
const getLines = (points) =>
  points.slice(1).map((point, i) => ({
    from: points[i],
    to: point,
  }));

const WorldMap = () => {
  const [selectedGeo, setSelectedGeo] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // 👈 New state

  const projection = geoMercator();
  const pathGen = geoPath().projection(projection);

  return (
    <div className="relative w-full rounded-[30px] bg-white shadow-md overflow-hidden border border-gray-200 w-full h-[200px] sm:h-[360px] md:h-[420px]">
      {/* 👇 Cursor behavior applied here */}
      <div
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        className={`${isDragging ? "cursor-grabbing" : "cursor-grab"} w-full h-[180px] sm:h-[400px] md:h-[420px] md:-mt-8`}
      >
        <ComposableMap
          projectionConfig={{ scale: 200 }}
          width={1000}
          height={470}
          style={{ width: "100%", height: "100%" }}
        >
          <ZoomableGroup center={[20, 20]} zoom={1}>
            {/* Graticule */}
            <Graticule stroke="#f1f1f1" strokeWidth={0.5} />

            {/* Countries */}
            <Geographies geography={geoUrl}>
              {({ geographies, projection }) => {
                const pathGen = geoPath().projection(projection);

                return (
                  <>
                    {geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => setSelectedGeo(geo)}
                        style={{
                          default: {
                            fill: "#fefcfc94",
                            stroke: "#c2c2c2ff",
                            strokeWidth: 0.8,
                            outline: "none",
                          },
                          hover: {
                            fill: "#d6d6d6ff",
                            stroke: "#929292ff",
                            strokeWidth: 0.8,
                            outline: "none",
                          },
                          pressed: {
                            fill: "#ccccccff",
                            stroke: "#2f2f2f",
                            strokeWidth: 0.2,
                            outline: "none",
                          },
                        }}
                      />
                    ))}

                    {/* Highlight Rectangle */}
                    {selectedGeo &&
                      (() => {
                        const [[x0, y0], [x1, y1]] = pathGen.bounds(selectedGeo);
                        const width = x1 - x0;
                        const height = y1 - y0;

                        return (
                          <rect
                            x={x0}
                            y={y0}
                            width={width}
                            height={height}
                            fill="none"
                            stroke="#111"
                            strokeWidth={1.2}
                            rx={5}
                            ry={5}
                            pointerEvents="none"
                          />
                        );
                      })()}
                  </>
                );
              }}
            </Geographies>

            {/* Travel Lines */}
            {getLines(points).map(({ from, to }, index) => (
              <Line
                key={index}
                from={from}
                to={to}
                stroke="#FF5722"
                strokeWidth={1.5}
                curve={0.3}
              />
            ))}

            {/* Markers */}
            {points.map(([lon, lat], idx) => (
              <Marker key={idx} coordinates={[lon, lat]}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="#FF5722"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: "translate(-8px, -20px)" }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" fill="#fff" />
                </svg>
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Drag/Zoom Instruction */}
      <div className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white bg-gray-500 px-4 py-1 rounded-full shadow">
        Drag to pan, scroll to zoom
      </div>

      {/* Label */}
      <div className="absolute bottom-3 right-4 text-[15px] text-gray-400 italic">
        Currently I live in
      </div>
    </div>
  );
};

export default WorldMap;
