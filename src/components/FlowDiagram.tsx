/**
 * A four-step flow for a project card: top row left to right, then bottom row
 * right to left, so it fits a card's 16:10 header. Same palette as MethodDiagram.
 */
type Step = string[];

export type Flow = {
  title: string;
  /** Exactly four steps, each one to two short lines (about 18 characters max). */
  steps: [Step, Step, Step, Step];
};

const BOX = { w: 164, h: 76 };
// Snake order: top-left, top-right, bottom-right, bottom-left.
const POS = [
  { x: 24, y: 38 },
  { x: 212, y: 38 },
  { x: 212, y: 150 },
  { x: 24, y: 150 },
];

export default function FlowDiagram({ flow }: { flow: Flow }) {
  const id = flow.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <svg
      viewBox="0 0 400 250"
      width="100%"
      height="100%"
      role="img"
      aria-label={`${flow.title}: ${flow.steps.map((s) => s.join(" ")).join(", then ")}.`}
      style={{ display: "block" }}
    >
      <defs>
        <marker id={`arrow-${id}`} orient="auto" markerWidth="5" markerHeight="5" refX="3.2" refY="2" overflow="visible">
          <path d="M0 0 L4 2 L0 4 Z" fill="#8a8f8b" />
        </marker>
      </defs>

      <text x="24" y="24" fontFamily="var(--sans)" fontSize="11" fontWeight="600" letterSpacing="0.08em" fill="#5a605c">
        HOW IT WORKS
      </text>

      <g fill="none" stroke="#8a8f8b" strokeWidth="2" strokeLinecap="round" markerEnd={`url(#arrow-${id})`}>
        <path d="M 192 76 L 206 76" />
        <path d="M 294 118 L 294 144" />
        <path d="M 208 188 L 194 188" />
      </g>

      {flow.steps.map((lines, i) => {
        const { x, y } = POS[i];
        const last = i === 3;
        const firstLineY = y + BOX.h / 2 - ((lines.length - 1) * 19) / 2 + 5;
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={BOX.w}
              height={BOX.h}
              rx="10"
              fill={last ? "#e8f0ed" : "#ffffff"}
              stroke={last ? "#a9c4bc" : "#d8d5c9"}
            />
            {lines.map((line, j) => (
              <text
                key={j}
                x={x + BOX.w / 2}
                y={firstLineY + j * 19}
                textAnchor="middle"
                fontFamily="var(--sans)"
                fontSize="15"
                fontWeight={last ? 600 : 400}
                fill={last ? "#0e3c33" : "#181a19"}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
