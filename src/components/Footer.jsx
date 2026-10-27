import Icon from "./Icon";
import { FOOTER } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="status">
            <span className="pulse-dot" />
            <span>{FOOTER.status}</span>
          </div>
          <p>{FOOTER.copy}</p>
        </div>

        <div className="footer-links">
          {FOOTER.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon name={l.icon} size={15} />
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
