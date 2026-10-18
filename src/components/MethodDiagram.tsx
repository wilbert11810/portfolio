/**
 * "How I know something works" — the verification loop.
 * One inline SVG with a viewBox, so it scales to the column width.
 */
export default function MethodDiagram() {
  return (
    <svg
      viewBox="0 0 1120 330"
      width="100%"
      role="img"
      aria-labelledby="method-title method-desc"
      style={{ display: "block", maxWidth: "1120px", height: "auto" }}
    >
      <title id="method-title">How I verify a change</title>
      <desc id="method-desc">
        A change that looks right leads to writing a check, then running that check
        against the version you know is broken. If it fails, the check means
        something. If it passes, the check itself is wrong and gets rewritten.
      </desc>

      <defs>
        <marker
          id="arrow-grey"
          orient="auto"
          markerWidth="5"
          markerHeight="5"
          refX="3.2"
          refY="2"
          overflow="visible"
        >
          <path d="M0 0 L4 2 L0 4 Z" fill="#8a8f8b" />
        </marker>
        <marker
          id="arrow-pine"
          orient="auto"
          markerWidth="5"
          markerHeight="5"
          refX="3.2"
          refY="2"
          overflow="visible"
        >
          <path d="M0 0 L4 2 L0 4 Z" fill="#17564a" />
        </marker>
        <marker
          id="arrow-clay"
          orient="auto"
          markerWidth="5"
          markerHeight="5"
          refX="3.2"
          refY="2"
          overflow="visible"
        >
          <path d="M0 0 L4 2 L0 4 Z" fill="#b06a4a" />
        </marker>
      </defs>

      <g
        fill="none"
        stroke="#8a8f8b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 220 80 L 296 80" markerEnd="url(#arrow-grey)" />
        <path d="M 500 80 L 576 80" markerEnd="url(#arrow-grey)" />
        <path d="M 700 120 L 700 186" markerEnd="url(#arrow-grey)" />
      </g>

      <path
        d="M 810 245 L 886 245"
        fill="none"
        stroke="#17564a"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#arrow-pine)"
      />

      <path
        d="M 590 245 L 400 245 L 400 124"
        fill="none"
        stroke="#b06a4a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#arrow-clay)"
      />

      <g
        fontFamily="var(--sans)"
        fontSize="16"
        fill="#181a19"
        textAnchor="middle"
      >
        <rect
          x="40"
          y="40"
          width="180"
          height="80"
          rx="10"
          fill="#ffffff"
          stroke="#d8d5c9"
        />
        <text x="130" y="73">A change that</text>
        <text x="130" y="95">looks right</text>

        <rect
          x="300"
          y="40"
          width="200"
          height="80"
          rx="10"
          fill="#ffffff"
          stroke="#d8d5c9"
        />
        <text x="400" y="85">Write the check</text>

        <rect
          x="580"
          y="40"
          width="240"
          height="80"
          rx="10"
          fill="#ffffff"
          stroke="#d8d5c9"
        />
        <text x="700" y="73">Run it against the</text>
        <text x="700" y="95">version you know is broken</text>

        <path d="M 700 190 L 810 245 L 700 300 L 590 245 Z" fill="#ede9df" />
        <text x="700" y="251" fontWeight="600" fontSize="15">
          Does it fail?
        </text>

        <rect
          x="890"
          y="205"
          width="200"
          height="80"
          rx="10"
          fill="#e8f0ed"
          stroke="#a9c4bc"
        />
        <text x="990" y="238" fontWeight="600" fill="#0e3c33">
          Now it means
        </text>
        <text x="990" y="260" fontWeight="600" fill="#0e3c33">
          something
        </text>
      </g>

      <g fontFamily="var(--sans)" fontSize="13">
        <text x="848" y="233" fill="#17564a" textAnchor="middle">
          yes
        </text>
        <text x="420" y="183" fill="#8a4a1c" textAnchor="middle">
          no
        </text>
        <text x="40" y="270" fill="#5a605c">
          If the check passes against broken code, the check is the problem.
        </text>
        <text x="40" y="289" fill="#5a605c">
          Rewrite it and go again.
        </text>
      </g>
    </svg>
  );
}
