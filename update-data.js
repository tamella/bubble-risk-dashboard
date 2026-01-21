import fs from "fs";

const today = new Date().toISOString().slice(0, 10);

// Simple deterministic demo indicators
const indicators = [
  {
    name: "Valuations vs History",
    status: "Elevated",
    value: 78,
    threshold: 70,
    description: "Equity valuations remain well above long-term averages."
  },
  {
    name: "Speculative Activity",
    status: "Moderate",
    value: 55,
    threshold: 65,
    description: "IPO and retail trading activity is stable but watchful."
  },
  {
    name: "Liquidity Conditions",
    status: "Tightening",
    value: 62,
    threshold: 60,
    description: "Financial conditions have tightened relative to last quarter."
  }
];

// Simple risk score
const score = Math.round(
  indicators.reduce((sum, i) => sum + i.value, 0) / indicators.length
);

let level = "Low";
if (score > 70) level = "High";
else if (score > 55) level = "Moderate";

const output = {
  score,
  level,
  date: today,
  brief: `Overall bubble risk is ${level.toLowerCase()} based on valuation, speculation, and liquidity signals.`,
  indicators
};

fs.writeFileSync("data.json", JSON.stringify(output, null, 2));

console.log("data.json updated successfully");
