import Icon from "../components/Icon";
import Hero from "../components/Hero";
import { PILLARS } from "../data";
import "./Home.css";

/* ------------------------------------------------------------------ */
/*  SVG building blocks                                                */
/* ------------------------------------------------------------------ */
function TextBlock({ x, y, lines, step = 16 }) {
  return (
    <text className="bg-text" x={x} y={y} dominantBaseline="central">
      {lines.map((l, i) => (
        <tspan key={i} x={x} y={y + i * step}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

/* o = outline, f = filled sage, l = light grey */
function Squares({ x, y, pattern, gap = 17, size = 9 }) {
  return (
    <g>
      {pattern.split("").map((c, i) => (
        <rect
          key={i}
          x={x + i * gap}
          y={y - size / 2}
          width={size}
          height={size}
          className={c === "f" ? "sq-fill" : c === "l" ? "sq-light" : "sq-open"}
        />
      ))}
    </g>
  );
}

function Dots({ x, y, count, gap = 9, r = 1.7 }) {
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => (
        <circle key={i} className="dot" r={r} cx={x + i * gap} cy={y} />
      ))}
    </g>
  );
}

const Plus = ({ x, y, s = 7 }) => (
  <path className="bg-line thin" d={`M${x - s} ${y}H${x + s}M${x} ${y - s}V${y + s}`} />
);

/* IC package: body + die + exact rectangular legs, evenly spaced */
function Chip({ x, y, w, h, inset, top, bottom, left, right, len, pw, margin = 9 }) {
  const along = (n, size) =>
    Array.from({ length: n }).map((_, i) =>
      n === 1 ? size / 2 : margin + (i * (size - 2 * margin)) / (n - 1)
    );
  const xs = (n) => along(n, w).map((v) => x + v);
  const ys = (n) => along(n, h).map((v) => y + v);

  return (
    <g>
      {xs(top).map((px, i) => (
        <rect key={`t${i}`} className="pin" x={px - pw / 2} y={y - len} width={pw} height={len} />
      ))}
      {xs(bottom).map((px, i) => (
        <rect key={`b${i}`} className="pin" x={px - pw / 2} y={y + h} width={pw} height={len} />
      ))}
      {ys(left).map((py, i) => (
        <rect key={`l${i}`} className="pin" x={x - len} y={py - pw / 2} width={len} height={pw} />
      ))}
      {ys(right).map((py, i) => (
        <rect key={`r${i}`} className="pin" x={x + w} y={py - pw / 2} width={len} height={pw} />
      ))}
      <rect className="chip-body" x={x} y={y} width={w} height={h} />
      <rect className="chip-die" x={x + inset} y={y + inset} width={w - inset * 2} height={h - inset * 2} />
    </g>
  );
}

function Defs({ id }) {
  return (
    <defs>
      <pattern id={`dotgrid-${id}`} width="9" height="9" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.7" fill="#9aa19a" />
      </pattern>
      <pattern id={`fine-grid-${id}`} width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M12 0H0V12" fill="none" stroke="#c9cdc8" strokeWidth="0.5" />
      </pattern>
    </defs>
  );
}

/*
  The artwork is split in two halves that share the original 1672 x 941
  coordinate system. Each half is pinned to its own edge of the hero and
  scaled by the hero HEIGHT, so the chips/legs never distort. Extension
  traces overshoot (x up to 2600 / down to -1800) and are clipped by the
  half-container, so on any width the lines meet seamlessly in the middle.
*/
const FAR_R = 2600; // overshoot used by the left half
const FAR_L = -1800; // overshoot used by the right half

/* ============================ LEFT HALF =========================== */
function LeftArt() {
  return (
    <svg viewBox="0 0 836 941" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <Defs id="l" />

      {/* ambient blocks & dot fields */}
      <g opacity="0.55">
        <rect x="0" y="40" width="75" height="210" fill="#f3f4f2" />
        <rect x="178" y="40" width="75" height="125" fill="#f3f4f2" />
        <rect x="315" y="328" width="55" height="44" fill="#eff1ee" />
        <rect x="72" y="835" width="32" height="32" fill="#e9ece8" />
      </g>
      <g opacity="0.6">
        <rect x="190" y="300" width="70" height="60" fill="url(#dotgrid-l)" />
        <rect x="430" y="580" width="110" height="80" fill="url(#dotgrid-l)" />
        <rect x="560" y="120" width="140" height="60" fill="url(#dotgrid-l)" />
        <rect x="640" y="790" width="150" height="70" fill="url(#dotgrid-l)" />
      </g>

      {/* ---- top-left ---- */}
      <g className="bg-line light">
        <path d="M95 0 L178 42 V175" />
        <path d="M0 18 L38 40" />
        <path d="M0 70 H38 L52 84" />
        <path d="M130 0 L178 20" />
        <path d="M0 120 H34 L68 146" />
        <path d="M180 175 H440 V270" />
        <path d="M0 250 H72 V178 H20" />
      </g>
      <g className="bg-line">
        <path d="M48 42 L232 226 L254 248 H288" />
        <path d="M84 143 L168 227" />
        <path d="M168 227 V470" />
        <path d="M208 258 L222 272 H273" />
        <path d="M370 19 H508" strokeDasharray="4 5" />
      </g>
      <circle className="node big" cx="48" cy="42" r="6.5" />
      <circle className="node big" cx="253" cy="135" r="6.5" />
      <circle className="node big" cx="168" cy="227" r="6" />
      <circle className="node" cx="232" cy="226" r="3.5" />
      <circle className="node-open" cx="288" cy="248" r="5.5" />
      <circle className="node-open" cx="273" cy="272" r="4.5" />
      <circle className="node-open" cx="84" cy="143" r="4.5" />
      <circle className="node-open sm" cx="176" cy="106" r="3" />
      <circle className="node-open sm" cx="221" cy="112" r="3" />
      <circle className="node-open sm" cx="155" cy="64" r="2.5" />

      <TextBlock
        x={291}
        y={52}
        lines={[
          "// build",
          "class Solution {",
          "  public void solve() {",
          "    // think -> plan -> implement",
          "  }",
          "}",
        ]}
      />
      <Dots x={300} y={134} count={5} gap={11} r={0.9} />
      <path className="bg-line thin" d="M298 181 h6 M298 177 v8" />
      <Squares x={316} y={181} pattern="oofl" gap={17} size={9} />
      <Squares x={392} y={181} pattern="l" size={9} />

      <TextBlock x={59} y={293} lines={["01001010", "01000001", "010101V0", "01000004"]} />
      <Plus x={355} y={347} />
      <Plus x={314} y={429} />

      {/* ---- left chip ---- */}
      <g className="bg-line">
        <path d="M150 470 V348" />
        <path d="M177 470 V425 L184 418 V395" />
        <path d="M187 470 V450" />
        <path d="M158 470 V440 L150 432" />
        <path d="M0 402 H94" />
        <path d="M94 402 L120 428 V480 H130" />
        <path d="M130 493 H108 L108 462 L92 446 H70" />
        <path d="M130 504 H0" />
        <path d="M130 519 H38" />
        <path d="M130 531 H100" />
        <path d="M0 572 H112 L128 556 V547" />
        <path d="M0 625 H56 H120 L145 641" />
        <path d="M145 641 V592 L155 575 V557" />
        <path d="M145 641 L0 788" />
        <path d="M214 487 H326" />
        <path d="M214 497 H250 L262 509 H337" />
        <path d="M214 508 H350" />
        <path d="M214 519 H262" />
        <path d="M214 531 H252 L262 526 H320" />
        <path d="M186 557 V578" />
        <path d="M196 557 V572 L236 606" />
        <path d="M167 557 V585" />
      </g>
      <circle className="node-open sm" cx="150" cy="348" r="2.5" />
      <circle className="node-open sm" cx="184" cy="395" r="2.5" />
      <circle className="node" cx="196" cy="450" r="3" />
      <circle className="node" cx="94" cy="402" r="5" />
      <circle className="node" cx="70" cy="446" r="4" />
      <circle className="node-open sm" cx="38" cy="519" r="2.5" />
      <circle className="node-open sm" cx="38" cy="625" r="3" />
      <circle className="node-open sm" cx="56" cy="625" r="3" />
      <circle className="node big" cx="145" cy="641" r="6" />
      <circle className="node" cx="326" cy="486" r="3" />
      <circle className="node-open sm" cx="337" cy="498" r="3" />
      <circle className="node" cx="350" cy="511" r="3" />
      <circle className="node-open sm" cx="262" cy="531" r="2.5" />
      <circle className="node-open sm" cx="320" cy="526" r="2.5" />
      <circle className="node-open sm" cx="236" cy="606" r="2.5" />
      <circle className="node-open sm" cx="186" cy="580" r="2.5" />
      <circle className="node-open sm" cx="167" cy="587" r="2.5" />
      <circle className="node-open" cx="284" cy="587" r="8" />
      <path className="bg-line thin" d="M284 598 v4" />
      {[487, 499, 511, 523, 538].map((yy) => (
        <rect key={yy} className="sq-fill" x="90" y={yy - 4} width="10" height="8" />
      ))}
      <Chip x={139} y={480} w={65} h={67} inset={9} top={6} bottom={6} left={6} right={6} len={10} pw={3.2} margin={8} />

      <Dots x={326} y={625} count={11} gap={11} r={1.8} />

      {/* ---- bottom-left ---- */}
      <path className="bg-line thin" d="M150 610 A250 250 0 0 1 400 860 V941" strokeDasharray="5 5" />
      <path className="bg-line light" d="M285 941 A320 320 0 0 1 440 780" />
      <TextBlock
        x={181}
        y={709}
        lines={[
          "int main() {",
          "  while (curiosity) {",
          "    learn();",
          "    build();",
          "    improve();",
          "  }",
          "  return 0;",
          "}",
        ]}
      />
      <Dots x={183} y={838} count={5} gap={11} r={1.2} />
      <Squares x={182} y={867} pattern="ooolof" gap={19} size={10} />
      <path className="bg-line thin" d="M36 780 V941 M0 852 H72" />

      <path className="bg-line thin" d="M405 741 H448 M490 741 H548 M469 680 V720 M469 762 V866" />
      <circle className="node-open" cx="469" cy="741" r="21" />
      <circle className="node dark" cx="469" cy="741" r="2.6" />
      <Plus x={558} y={823} s={4} />

      {/* ================= extension traces → centre ================= */}
      <g className="bg-line">
        <path d={`M350 511 H430 L450 531 H${FAR_R}`} />
        <path d={`M508 19 H${FAR_R}`} strokeDasharray="4 5" />
        <path d={`M548 741 H640 L660 761 H${FAR_R}`} />
      </g>
      <g className="bg-line light">
        <path d={`M400 941 L440 905 H${FAR_R}`} />
        <path d={`M440 270 V300 L470 330 H${FAR_R}`} />
      </g>
      <path className="bg-line dotted" d={`M438 625 H${FAR_R}`} />
      <path className="bg-line dotted" d={`M288 248 H400 L430 216 H${FAR_R}`} />
      <circle className="node-open sm" cx="450" cy="531" r="3" />
      <circle className="node-open sm" cx="660" cy="761" r="3" />
      <circle className="node" cx="640" cy="531" r="3" />
      <circle className="node-open" cx="720" cy="331" r="4" />
      <Plus x={620} y={430} />
      <Plus x={760} y={640} s={5} />
      <Squares x={560} y={905} pattern="ool" gap={14} size={8} />
    </svg>
  );
}

/* ============================ RIGHT HALF ========================== */
function RightArt() {
  return (
    <svg viewBox="836 0 836 941" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <Defs id="r" />

      <g opacity="0.55">
        <rect x="1422" y="703" width="53" height="40" fill="#eff1ee" />
        <rect x="1295" y="255" width="125" height="40" fill="#f1f2f0" />
        <rect x="1240" y="130" width="40" height="50" fill="#f3f4f2" />
      </g>
      <g opacity="0.6">
        <rect x="1175" y="215" width="110" height="80" fill="url(#dotgrid-r)" />
        <rect x="1148" y="770" width="110" height="80" fill="url(#dotgrid-r)" />
        <rect x="1330" y="560" width="100" height="40" fill="url(#dotgrid-r)" />
        <rect x="900" y="420" width="150" height="60" fill="url(#dotgrid-r)" />
        <rect x="920" y="720" width="150" height="60" fill="url(#dotgrid-r)" />
      </g>

      {/* ---- top-right ---- */}
      <TextBlock x={1122} y={73} lines={["SOFTWARE", "HARDWARE", "CONNECTED", "OPTIMIZED", "SCALABLE"]} />
      <rect className="sq-open" x="1230" y="47" width="16" height="16" />
      <circle className="node dark" cx="1238" cy="178" r="2.5" />
      <Dots x={1055} y={216} count={11} gap={11} r={0.9} />

      <g className="bg-line">
        <path d="M1300 0 V55 L1327 82 V215" />
        <path d="M1283 0 V62 L1327 105" strokeOpacity="0.55" />
        <path d="M1327 215 H1355" />
        <path d="M1422 176 V190" />
        <path d="M1327 322 H1468" />
      </g>
      <circle className="node-grey" cx="1360" cy="216" r="5" />
      <circle className="node" cx="1468" cy="323" r="4" />
      <Dots x={1360} y={103} count={5} gap={15} r={1.7} />

      <g fill="none">
        <circle className="bg-line" cx="1595" cy="100" r="170" />
        <circle className="bg-line" cx="1595" cy="100" r="135" />
        <circle className="bg-line thin" cx="1595" cy="100" r="105" strokeDasharray="5 5" />
        <circle className="bg-line thin" cx="1595" cy="100" r="150" strokeDasharray="3 5" opacity="0.6" />
        <path className="ring-accent" d="M1427 130 A170 170 0 0 0 1505 245" />
      </g>
      <path className="bg-line thin" d="M1570 100 H1620 M1595 75 V125" />
      <circle className="node" cx="1426" cy="100" r="3" />
      <circle className="node dark" cx="1595" cy="271" r="3.5" />

      {/* waveform */}
      <rect x="1290" y="350" width="245" height="118" fill="url(#fine-grid-r)" opacity="0.8" />
      <rect className="bg-line thin" x="1290" y="350" width="245" height="118" opacity="0.5" />
      <path className="bg-line thin" d="M1290 408 H1535" opacity="0.6" />
      <path
        className="wave"
        d="M1294 408 C1318 408 1335 450 1362 450 C1395 450 1410 355 1440 355 C1470 355 1485 450 1503 440 C1514 435 1520 408 1528 408"
      />
      <path
        className="bg-line thin"
        d="M1294 408 C1330 408 1360 372 1385 395 C1410 420 1425 440 1460 420 C1480 405 1495 440 1528 408"
        strokeDasharray="3 3"
        opacity="0.8"
      />
      <circle className="node-open sm" cx="1294" cy="408" r="2.2" />
      <circle className="node-open sm" cx="1528" cy="408" r="2.2" />
      <TextBlock x={1568} y={353} lines={["ANALYZE", "DESIGN", "DEVELOP", "TEST", "DEPLOY", "REPEAT"]} />
      <Plus x={1246} y={397} />
      <Plus x={1645} y={465} s={3.5} />

      <path className="bg-line thin" d="M1295 494 H1530" />
      <path className="bg-line thin" d="M1295 493 h6 M1313 507 v4" opacity="0.7" />
      <circle className="node" cx="1529" cy="494" r="4" />

      <text className="bg-text" x="1319" y="531" dominantBaseline="central">
        CPU  |  GPIO  |  I2C  |  SPI  |  UART
      </text>

      {/* ---- bottom-right ---- */}
      <g className="bg-line">
        <path d="M1627 526 V650 L1595 685 V742 V772" />
        <path d="M1612 590 V640 L1578 678 V720 L1573 735" />
        <path d="M1548 684 V772" />
        <path d="M1520 700 V772" opacity="0.7" />
        <path d="M1267 710 V840 H1330" />
        <path d="M1256 861 H1360" />
        <path d="M1360 861 H1455 L1470 848 H1491" />
        <path d="M1489 781 H1462" />
        <path d="M1489 795 H1408" />
        <path d="M1489 808 H1423" />
        <path d="M1489 821 H1468 L1445 832 H1330" opacity="0.8" />
        <path d="M1489 833 H1470" />
        <path d="M1489 846 H1470 L1450 856 H1430" />
        <path d="M1607 782 H1640" />
        <path d="M1607 795 H1672" />
        <path d="M1607 808 H1630" />
        <path d="M1607 821 H1655 V830" />
        <path d="M1607 834 H1640" />
        <path d="M1607 847 H1650" />
        <path d="M1607 860 H1635 L1655 880" />
        <path d="M1512 880 V908 L1500 918" />
        <path d="M1523 880 V912" />
        <path d="M1535 880 V925" />
        <path d="M1548 880 V900 L1562 914" />
        <path d="M1560 880 V920" />
        <path d="M1572 880 V905 L1590 920" />
        <path d="M1584 880 V935" />
      </g>
      <g className="bg-line light">
        <path d="M1365 941 L1400 905" />
        <path d="M1500 941 L1520 925" />
      </g>
      <circle className="node big" cx="1627" cy="526" r="6" />
      <circle className="node dark" cx="1595" cy="742" r="3.5" />
      <circle className="node-open sm" cx="1573" cy="735" r="3" />
      <circle className="node" cx="1548" cy="684" r="3.5" />
      <circle className="node big" cx="1256" cy="861" r="5" />
      <circle className="node-grey" cx="1360" cy="861" r="5" />
      {[
        [1462, 781], [1408, 795], [1423, 808], [1640, 782], [1630, 808], [1655, 830],
        [1640, 834], [1650, 847], [1500, 918], [1523, 912], [1535, 925], [1562, 914],
        [1560, 920], [1590, 920], [1584, 935],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} className="node-open sm" cx={cx} cy={cy} r="3" />
      ))}

      <Plus x={1268} y={741} s={7} />
      <Plus x={1320} y={799} s={6} />
      <Plus x={1645} y={721} s={7} />

      <TextBlock x={1314} y={659} lines={["> IDEAS", "> CODE", "> CIRCUITS", "> SYSTEMS", "> SOLUTIONS"]} />
      <Squares x={1314} y={761} pattern="fooooo" gap={17} size={9} />
      <rect className="sq-open" x="1521" y="655" width="9" height="9" />
      <rect className="sq-open" x="1538" y="657" width="5" height="5" />
      <circle className="node-open sm" cx="1560" cy="659" r="2.5" />
      <circle className="node-open sm" cx="1573" cy="659" r="2.5" />
      <Dots x={1503} y={610} count={5} gap={11} r={1.5} />
      <circle className="node dark" cx="1573" cy="572" r="2.5" />

      <Chip x={1499} y={772} w={97} h={97} inset={13} top={9} bottom={9} left={8} right={8} len={10} pw={3.6} margin={11} />

      {/* ================= extension traces ← centre ================= */}
      <g className="bg-line">
        <path d={`M${FAR_L} 531 H1300`} />
        <path d={`M${FAR_L} 19 H1090`} strokeDasharray="4 5" />
        <path d={`M${FAR_L} 761 H1190 L1215 786 V840 H1267`} />
      </g>
      <g className="bg-line light">
        <path d={`M${FAR_L} 905 H1400`} />
        <path d={`M${FAR_L} 330 H1060 L1085 355 V420`} />
      </g>
      <path className="bg-line dotted" d={`M${FAR_L} 625 H1290`} />
      <path className="bg-line dotted" d={`M${FAR_L} 216 H1055`} />
      <circle className="node-open sm" cx="1300" cy="531" r="3" />
      <circle className="node" cx="1090" cy="19" r="3" />
      <circle className="node-open sm" cx="1190" cy="761" r="3" />
      <circle className="node-open" cx="1085" cy="420" r="4" />
      <circle className="node-open sm" cx="1290" cy="625" r="3" />
      <Plus x={980} y={430} />
      <Plus x={1000} y={650} s={5} />
      <Squares x={940} y={905} pattern="lo" gap={14} size={8} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Home page: hero shell (circuit bg + veil + <Hero/> + pillars)      */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    /* exactly 100vh on desktop, grows with content on mobile/tablet */
    <section className="hero">
      {/* circuit background (two edge-anchored halves) */}
      <div className="bg-halves" aria-hidden="true">
        <div className="bg-half left">
          <LeftArt />
        </div>
        <div className="bg-half right">
          <RightArt />
        </div>
      </div>
      {/* soft veil so the artwork never fights with the content */}
      <div className="bg-veil" aria-hidden="true" />

      <Hero />

      {/* CAPABILITY PILLARS (inside the hero) */}
      <div className="container hero-pillars">
        <div className="pillars">
          {PILLARS.map((p) => (
            <div key={p.label} className="pillar">
              <div className="pillar-top">
                <span className="pillar-label">{p.label}</span>
                <div className="pillar-icon">
                  <Icon name={p.icon} size={16} />
                </div>
              </div>
              <div>
                <div className="pillar-title">{p.title}</div>
                <div className="pillar-sub">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
