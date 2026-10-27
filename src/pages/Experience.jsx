import "./Experience.css";
import { experienceData } from "../data";

function PinIcon() {
  return (
    <svg
      className="experience__pin"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Experience() {
  const { label, heading, subtitle, experiences } = experienceData;

  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <header className="experience__header">
          <div className="experience__label">
            <span>{label}</span>
            <span className="experience__label-line" />
          </div>
          <h2 className="experience__title">{heading}</h2>
          <p className="experience__subtitle">{subtitle}</p>
        </header>

        <div className="experience__panel">
          <ol className="experience__timeline">
            {experiences.map((job) => (
              <li key={`${job.company}-${job.period}`} className="experience__item">
                <span className="experience__dot" aria-hidden="true" />

                <div className="experience__top">
                  <h3 className="experience__company">{job.company}</h3>
                  <span className="experience__period">{job.period}</span>
                </div>

                <div className="experience__meta">
                  <span className="experience__role">{job.role}</span>
                  <span aria-hidden="true">•</span>
                  <span className="experience__location">
                    <PinIcon />
                    {job.location}
                  </span>
                </div>

                <p className="experience__summary">{job.summary}</p>

                <ul className="experience__tech">
                  {job.tech.map((t) => (
                    <li key={t} className="experience__chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}