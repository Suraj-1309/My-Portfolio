import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "04 2024", rating: 967 },
  { year: "04 2024", rating: 1158 },
  { year: "01 2025", rating: 943 },
  { year: "06 2025", rating: 1021 },
];

const CodechefGraph = ({ isDarkMode }) => {
  const axisColor = isDarkMode ? "#D1D5DB" : "#374151"; // light gray in dark mode, dark gray in light mode
  const bgColor = isDarkMode ? "#111827" : "#ffffff"; // background
  const textColor = isDarkMode ? "#ffffff" : "#000000";

  return (
    <div style={{ backgroundColor: bgColor }} className="rounded-xl p-4">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="year" tick={{ fill: axisColor, fontSize: 14 }} />
          <YAxis
            domain={[900, "dataMax"]}
            tick={{ fill: axisColor, fontSize: 14 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: bgColor,
              borderColor: isDarkMode ? "#4B5563" : "#E5E7EB",
              color: textColor,
            }}
            labelStyle={{ color: textColor }}
            itemStyle={{ color: textColor }}
          />
          <Line
            type="linear" // sharp lines
            dataKey="rating"
            stroke="#56f916ff"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p
        className="text-center mt-2 font-semibold"
        style={{ color: textColor }}
      >
        Contest Rating
      </p>
    </div>
  );
};

export default CodechefGraph;
