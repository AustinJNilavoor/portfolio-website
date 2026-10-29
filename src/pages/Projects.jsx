import { useEffect, useMemo, useRef, useState } from "react";
import "./Projects.css";
import { projectsData, hardwareProjectsData } from "../projectdata";

/* ---------- Illustrations drawn from data (no images) ---------- */
function Preview({ preview }) {
  switch (preview.type) {
    case "phone":
      return (
        <div className="pv-phone">
          <div className="pv-phone__notch" />
          <span className="pv-small">{preview.title}</span>
          <strong className="pv-phone__balance">{preview.balance}</strong>
          <ul className="pv-phone__rows">
            {preview.rows.map((r) => (
              <li key={r.name} className="pv-phone__row">
                <span>{r.name}</span>
                <span className={r.positive ? "pv-pos" : "pv-neg"}>{r.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "kanban":
      return (
        <div className="pv-kanban">
          {preview.columns.map((col) => (
            <div key={col.title} className="pv-kanban__col">
              <span className="pv-small">{col.title}</span>
              {col.cards.map((c) => (
                <div key={c} className="pv-kanban__card">
                  {c}
                </div>
              ))}
            </div>
          ))}
        </div>
      );

    case "ledger":
      return (
        <div className="pv-card">
          <div className="pv-card__head">
            <span className="pv-card__title">
              <i className="pv-dot" />
              {preview.title}
            </span>
            <span className="pv-badge">{preview.status}</span>
          </div>
          <div className="pv-bar pv-bar--w75" />
          <div className="pv-bar pv-bar--w50" />
          <div className="pv-stats">
            {preview.stats.map((s) => (
              <div key={s.label} className="pv-stat">
                <span className="pv-small">{s.label}</span>
                <strong>{s.value}</strong>
              </div>
            ))}
          </div>
        </div>
      );

    case "pipeline":
      return (
        <div className="pv-card">
          <div className="pv-card__head">
            <span className="pv-card__title">
              <i className="pv-dot" />
              {preview.title}
            </span>
            <span className="pv-small">{preview.status}</span>
          </div>
          <div className="pv-stages">
            {preview.stages.map((s, i) => (
              <div
                key={s.label}
                className={`pv-stage${i === 1 ? " pv-stage--active" : ""}`}
              >
                <span className="pv-small">{s.label}</span>
                <strong>{s.value}</strong>
              </div>
            ))}
          </div>
          <div className="pv-track">
            <div className="pv-track__fill" style={{ width: `${preview.progress}%` }} />
          </div>
        </div>
      );

    /* ----- hardware previews ----- */
    case "board":
      return (
        <div className="pv-card pv-board">
          <div className="pv-card__head">
            <span className="pv-card__title">
              <i className="pv-dot" />
              {preview.title}
            </span>
            <span className="pv-leds">
              {preview.leds.map((l) => (
                <span key={l.label} className="pv-led-wrap">
                  <i className={`pv-led${l.on ? " pv-led--on" : ""}`} />
                  <span className="pv-small">{l.label}</span>
                </span>
              ))}
            </span>
          </div>
          <div className="pv-board__body">
            <div className="pv-board__chip">{preview.chip}</div>
            <div className="pv-board__pins">
              {preview.pins.map((p) => (
                <span key={p} className="pv-pin">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      );

    case "telemetry":
      return (
        <div className="pv-card">
          <div className="pv-card__head">
            <span className="pv-card__title">
              <i className="pv-dot" />
              {preview.title}
            </span>
            <span className="pv-badge">{preview.status}</span>
          </div>
          <div className="pv-channels">
            {preview.channels.map((c) => (
              <div key={c.label} className="pv-channel">
                <div className="pv-channel__top">
                  <span className="pv-small">{c.label}</span>
                  <strong>{c.value}</strong>
                </div>
                <div className="pv-track">
                  <div className="pv-track__fill" style={{ width: `${c.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ---------- Detail panel (used in the sticky aside and in the mobile modal) ---------- */
function Detail({ project, dir = "none" }) {
  return (
    <article className="projects__detail" data-dir={dir}>
      <div className="projects__stage">
        <Preview preview={project.preview} />
      </div>

      <div className="projects__body">
        <span className="projects__kind">{project.kind}</span>
        <h3 className="projects__name" id={`pj-title-${project.key}`}>
          {project.title}
        </h3>
        <p className="projects__desc">{project.description}</p>

        <ul className="projects__highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <ul className="projects__stack">
          {project.stack.map((s) => (
            <li key={s} className="projects__chip">
              {s}
            </li>
          ))}
        </ul>

        <div className="projects__links">
          {project.links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={i === 0 ? "projects__btn projects__btn--primary" : "projects__btn"}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- helpers ---------- */
function useIsDesktop() {
  const query = "(min-width: 1024px)";
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isDesktop;
}

const tag = (list, group) => list.map((p) => ({ ...p, group, key: `${group}:${p.id}` }));

export default function Projects() {
  const { label, heading, subtitle } = projectsData;

  const software = useMemo(() => tag(projectsData.projects, "software"), []);
  const hardware = useMemo(() => tag(hardwareProjectsData.projects, "hardware"), []);
  const all = useMemo(() => [...software, ...hardware], [software, hardware]);

  const [selectedKey, setSelectedKey] = useState(software[0].key);
  const [dir, setDir] = useState("none"); // "down" | "up" | "none" - drives the transition
  const [modalOpen, setModalOpen] = useState(false);

  const isDesktop = useIsDesktop();
  const showModal = modalOpen && !isDesktop;

  const softwareRef = useRef(null);
  const hardwareRef = useRef(null);
  const categoryRef = useRef("software"); // category the scroll position currently points at
  const lastSoftwareKey = useRef(software[0].key);
  const closeBtnRef = useRef(null);
  const triggerRef = useRef(null);
  const asideRef = useRef(null);

  const active = all.find((p) => p.key === selectedKey) || all[0];

  /* start each newly selected preview from its top */
  useEffect(() => {
    if (asideRef.current) asideRef.current.scrollTop = 0;
  }, [active.key]);

  /* ----- scroll spy: swap preview when the hardware section reaches the middle of the screen ----- */
  useEffect(() => {
    if (!isDesktop) return undefined;
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = hardwareRef.current;
      if (!el) return;
      const next =
        el.getBoundingClientRect().top <= window.innerHeight * 0.6 ? "hardware" : "software";
      if (next === categoryRef.current) return;
      categoryRef.current = next;
      setDir(next === "hardware" ? "down" : "up");
      setSelectedKey(next === "hardware" ? hardware[0].key : lastSoftwareKey.current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isDesktop, hardware]);

  /* ----- modal: Esc to close, lock body scroll, focus handling ----- */
  useEffect(() => {
    if (!showModal) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus?.();
    };
  }, [showModal]);

  /* ----- handlers ----- */
  const selectProject = (project, e) => {
    if (project.group === "software") lastSoftwareKey.current = project.key;
    setDir("none");
    setSelectedKey(project.key);
    if (!isDesktop) {
      triggerRef.current = e.currentTarget;
      setModalOpen(true);
    }
  };

  const jumpTo = (group) => {
    const target = group === "hardware" ? hardwareRef.current : softwareRef.current;
    const first = group === "hardware" ? hardware[0] : software[0];
    if (group === "software") lastSoftwareKey.current = first.key;
    if (isDesktop) {
      setDir(group === "hardware" ? "down" : "up");
      setSelectedKey(first.key);
    }
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderGroup = (group, title, list, ref) => (
    <section className="projects__group" ref={ref} aria-labelledby={`pj-group-${group}`}>
      <div className="projects__group-head">
        <h3 className="projects__group-title" id={`pj-group-${group}`}>
          {title}
        </h3>
        <span className="projects__group-count">
          {String(list.length).padStart(2, "0")} projects
        </span>
      </div>
      <ul className="projects__list">
        {list.map((p) => (
          <li key={p.key}>
            <button
              type="button"
              className={`projects__row${p.key === active.key ? " is-active" : ""}`}
              aria-current={p.key === active.key}
              aria-haspopup={isDesktop ? undefined : "dialog"}
              onClick={(e) => selectProject(p, e)}
            >
              <span className="projects__row-kind">{p.kind}</span>
              <span className="projects__row-title">{p.title}</span>
              <span className="projects__row-summary">{p.summary}</span>
              <span className="projects__row-cta" aria-hidden="true">
                Preview →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <header className="projects__header">
          <div className="projects__label">
            <span>{label}</span>
            <span className="projects__label-line" />
          </div>
          <h2 className="projects__title">{heading}</h2>
          <p className="projects__subtitle">{subtitle}</p>
        </header>

        {/* Category tabs: jump to a section */}
        <div className="projects__filters" role="group" aria-label="Project categories">
          {[
            { id: "software", title: projectsData.groupTitle || "Software", count: software.length },
            { id: "hardware", title: hardwareProjectsData.groupTitle || "Hardware", count: hardware.length },
          ].map((c) => (
            <button
              key={c.id}
              type="button"
              className={`projects__filter${active.group === c.id ? " is-active" : ""}`}
              aria-pressed={active.group === c.id}
              onClick={() => jumpTo(c.id)}
            >
              {c.title} ({c.count})
            </button>
          ))}
        </div>

        <div className="projects__layout">
          {/* Left: software first, then hardware */}
          <div className="projects__groups">
            {renderGroup("software", projectsData.groupTitle || "Software", software, softwareRef)}
            {renderGroup("hardware", hardwareProjectsData.groupTitle || "Hardware", hardware, hardwareRef)}
          </div>

          {/* Right: sticky preview (desktop only) */}
          <aside className="projects__aside" aria-label="Project preview" ref={asideRef}>
            <Detail key={active.key} project={active} dir={dir} />
          </aside>
        </div>
      </div>

      {/* Mobile / tablet: preview in a modal */}
      {showModal && (
        <div
          className="projects__modal"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className="projects__modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`pj-title-${active.key}`}
          >
            <button
              type="button"
              className="projects__modal-close"
              ref={closeBtnRef}
              aria-label="Close preview"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <Detail project={active} />
          </div>
        </div>
      )}
    </section>
  );
}