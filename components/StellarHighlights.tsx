import { Text } from "@radix-ui/themes";

const highlights = [
  { label: "Avg. Client Rating", value: "8.8/10", icon: "arrowup" },
  { label: "Avg. Quotes", value: "748", icon: "arrowdown" },
  { label: "Avg. Agent Earnings", value: "$4,500", icon: "arrowup" },
  { label: "Avg. Client Stellar", value: "%92", icon: "arrowup" },
];

const StellarHighlights = () => {
  return (
    <div className="space-y-3">
      {highlights.map(({ label, value, icon }, index) => (
        <div key={index} className="flex items-center gap-2">
          <img src={`/images/${icon}.svg`} alt={icon} width={16} height={16} />
          <Text>{label}</Text>
          <Text weight="bold">{value}</Text>
        </div>
      ))}
    </div>
  );
};

export default StellarHighlights;
