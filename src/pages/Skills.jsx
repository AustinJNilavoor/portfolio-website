import "./Skills.css";
import { skillsData } from "../data";
import Icon from "../components/Icon";


export default function Skills() {
  const { label, heading, subtitle, categories } = skillsData;

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <header className="skills__header">
          <div className="skills__label">
            <span>{label}</span>
            <span className="skills__label-line" />
          </div>
          <h2 className="skills__title">{heading}</h2>
          <p className="skills__subtitle">{subtitle}</p>
        </header>

        <div className="skills__grid">
          {categories.map((cat) => (
            <article key={cat.title} className="skills__card">
              <div>
                <div className="skills__card-head">
                  <div className="skills__icon-box">
                    <Icon name={cat.icon} />
                  </div>
                  <h3 className="skills__card-title">{cat.title}</h3>
                </div>

                <p className="skills__card-text">{cat.description}</p>

                <ul className="skills__tags">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="skills__tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skills__card-footer">
                <span className="skills__tier-label">Tier</span>
                <span className="skills__tier-value">{cat.tier}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}