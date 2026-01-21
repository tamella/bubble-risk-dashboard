import fs from "fs";

const today = new Date().toISOString().slice(0, 10);

const indicators = [
  {
    name: "Valuations vs History",
    status: "Elevated",
    value: 78,
    threshold: 70,
    description: "Equity valuations remain well above long-term historical averages."
  },
  {
    name: "Market Concentration",
    status: "High",
    value: 74,
    threshold: 65,
    description: "A small number of mega-cap stocks account for a disproportionate share of market returns."
  },
  {
    name: "Equity Risk Premium",
    status: "Compressed",
    value: 71,
    threshold: 65,
    description: "Investors are receiving historically low compensation for taking equity risk."
  },
  {
    name: "Speculative Activity",
    status: "Moderate",
    value: 55,
    threshold: 65,
    description: "IPO issuance and retail trading activity remain active but uneven."
  },
  {
    name: "IPO & Profitless Growth",
    status: "Elevated",
    value: 68,
    threshold: 65,
    description: "Increased investor appetite for unprofitable growth companies."
  },
  {
    name: "Retail Leverage & Options",
    status: "Rising",
    value: 63,
    threshold: 60,
    description: "Retail participation and options usage suggest increasing leverage sensitivity."
  },
  {
    name: "Liquidity Conditions",
    status: "Tightening",
    value: 62,
    threshold: 60,
    description: "Financial conditions have tightened while risk assets remain elevated."
  },
  {
    name: "Credit Spreads",
    status: "Complacent",
    value: 59,
    threshold: 60,
    description: "Credit spreads remain narrow, signaling limited perceived risk."
  },
  {
    name: "Yield Curve Stress",
    status: "Inverted Risk",
    value: 66,
    threshold: 60,
    description: "Yield curve dynamics indicate elevated recession and repricing risk."
  }
];

// Calculate composite risk score
const score = Math.round(
  indicators.reduce((sum, i) => sum + i.value, 0) / indicators.length
);

let level = "Low";
if (score >= 75) level = "Extreme";
else if (score >= 60) level = "High";
else if (score >= 45) level = "Moderate";

const output = {
  score,
  level,
  date: today,
  brief: `Bubble risk is ${level.toLowerCase()} as valuation, concentration, and liquidity indicators remain elevated.`,
  indicators
};

fs.writeFileSync("docs/data.json", JSON.stringify(output, null, 2));

console.log("Dashboard data updated:", level, score);
