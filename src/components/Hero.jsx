import { useState } from "react";
import { Link } from "react-router-dom";

import Icon from "./Icon";
import useTypewriter from "../hooks/useTypewriter";
import { PROFILE, ROLES, SOCIALS, FLOATING } from "../data";
import "./Hero.css";

/* Put your photo at  public/austin.jpg  (served as /austin.jpg).
   If the file is missing, the silhouette below is shown instead. */
const PORTRAIT_SRC = "/images/Austin.png";

function Avatar() {
  return (
    <svg className="portrait-img" viewBox="0 0 200 200" role="img" aria-label={`${PROFILE.name} portrait placeholder`}>
      <defs>
        <linearGradient id="av-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EDF2EC" />
          <stop offset="1" stopColor="#D6E0D4" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#av-bg)" />
      <circle cx="100" cy="78" r="34" fill="#718873" />
      <path d="M30 200c0-44 31-70 70-70s70 26 70 70z" fill="#526C55" />
    </svg>
  );
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="container hero-main">
      {/* ---------------- text column ---------------- */}
      <div className="hero-left">
        <div className="badges">
          <div className="badge badge-hello">
            <span>👋</span>
            <span>{PROFILE.greeting}</span>
          </div>
          <div className="badge badge-open">
            <span className="pulse-dot" />
            <span>{PROFILE.availability}</span>
          </div>
        </div>

        <div className="title-block">
          <h1>{PROFILE.name}</h1>
          <div className="typing-row">
            <span className="typing-text">{role}</span>
            <span className="caret" />
          </div>
        </div>

        <p className="lead">{PROFILE.lead}</p>

        <div className="cta-row">
          <a className="btn-large btn-solid group" href="/projects">
            <span>View My Work</span>
            <Icon name="arrow" size={18} className="arrow" />
          </a>
          <a className="btn-large btn-outline" href="#contact">
            <Icon name="mail" size={18} />
            <span>Contact Me</span>
          </a>
        </div>

        <div className="connect">
          <span className="connect-label">CONNECT</span>
          <div className="connect-line" />
          <div className="connect-icons">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                aria-label={s.label}
                href={s.href}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- portrait column (top on mobile) ---------------- */}
      <div className="hero-right">
        <div className="portrait-wrap">
          <div className="portrait-ring" />
          <div className="portrait-frame">
            {imgFailed ? (
              <Avatar />
            ) : (
              <img
                className="portrait-img"
                src={PORTRAIT_SRC}
                alt={PROFILE.imageAlt}
                width="800"
                height="800"
                decoding="async"
                fetchPriority="high"
                draggable="false"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>

          {FLOATING.map((f) => (
            <div key={f.label} className={`float-badge ${f.cls}`}>
              <div className="float-icon">
                <Icon name={f.icon} size={17} />
              </div>
              <div className="float-text">
                <span className="float-label">{f.label}</span>
                <span className="float-value">{f.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
