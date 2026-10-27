import { useState } from "react";
import "./Projects.css";
import { projectsData } from "../projectdata";

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

    default:
      return null;
  }
}

export default function Projects() {
  const { label, heading, subtitle, filters, projects } = projectsData;
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const active = visible.find((p) => p.id === selectedId) || visible[0];

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

        <div className="projects__filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`projects__filter${f === filter ? " is-active" : ""}`}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__layout">
          {/* Project list */}
          <ul className="projects__list">
            {visible.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={`projects__row${p.id === active?.id ? " is-active" : ""}`}
                  aria-current={p.id === active?.id}
                  onClick={() => setSelectedId(p.id)}
                >
                  <span className="projects__row-kind">{p.kind}</span>
                  <span className="projects__row-title">{p.title}</span>
                  <span className="projects__row-summary">{p.summary}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Detail panel */}
          {active && (
            <article className="projects__detail" key={active.id}>
              <div className="projects__stage">
                <Preview preview={active.preview} />
              </div>

              <div className="projects__body">
                <span className="projects__kind">{active.kind}</span>
                <h3 className="projects__name">{active.title}</h3>
                <p className="projects__desc">{active.description}</p>

                <ul className="projects__highlights">
                  {active.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <ul className="projects__stack">
                  {active.stack.map((s) => (
                    <li key={s} className="projects__chip">
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="projects__links">
                  {active.links.map((l, i) => (
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
          )}
        </div>
      </div>
    </section>
  );
}