import "./About.css";
import { aboutData } from "../data";
import Icon from "../components/Icon";

// function Icon({ name, size = 20 }) {
//   return (
//     <svg
//       className="about__icon"
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//     >
//       {(icons[name] || []).map((d, i) => (
//         <path key={i} d={d} />
//       ))}
//     </svg>
//   );
// }

export default function About() {
  const { label, heading, paragraphs, principles, focusAreas } = aboutData;

  return (
    <section className="about" id="about">
      <div className="about__container">
        <header className="about__header">
          <div className="about__label">
            <span>{label}</span>
            <span className="about__label-line" />
          </div>
          <h2 className="about__title">{heading}</h2>
        </header>

        <div className="about__grid">
          <div className="about__story">
            {paragraphs.map((text, i) => (
              <p key={i} className="about__text">
                {text}
              </p>
            ))}

            <div className="about__principles">
              {principles.map((p) => (
                <div key={p.title} className="about__principle">
                  <Icon name={p.icon} />
                  <span className="about__principle-title">{p.title}</span>
                  <span className="about__principle-text">{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__focus">
            {focusAreas.map((item) => (
              <article key={item.number} className="about__focus-item">
                <span className="about__focus-number">{item.number}</span>
                <div className="about__focus-body">
                  <h3 className="about__focus-title">{item.title}</h3>
                  <p className="about__focus-text">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}