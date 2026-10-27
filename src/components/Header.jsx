import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Icon from "./Icon";
import { NAV, PROFILE } from "../data";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const close = () => setOpen(false);

  /* close the menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Escape closes, and the page behind doesn't scroll while open */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* if the viewport grows past the mobile breakpoint, reset */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const renderLink = (item, i, onClick) =>
    item.to ? (
      <NavLink
        key={item.label}
        to={item.to}
        end
        onClick={onClick}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {item.label}
      </NavLink>
    ) : (
      <a key={item.label} href={item.href} onClick={onClick}>
        {item.label}
      </a>
    );

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" to="/" onClick={close}>
          <div className="monogram">{PROFILE.initials}</div>
          <div className="brand-text">
            <span className="brand-name">{PROFILE.name}</span>
            <span className="brand-role">{PROFILE.title}</span>
          </div>
        </Link>

        {/* desktop navigation */}
        <nav className="main-nav" aria-label="Primary">
          {NAV.map((item, i) => renderLink(item, i))}
        </nav>

        <div className="header-actions">
          <a className="btn-small btn-outline hide-sm" href="#">
            <Icon name="description" size={16} />
            <span>Resume</span>
          </a>
          <a className="btn-small btn-solid hide-xs" href="#contact">
            <Icon name="mail" size={15} />
            <span>Get in Touch</span>
          </a>


          {/* hamburger (mobile only) */}
          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className="mobile-overlay" onClick={close} aria-hidden="true" />
      <div id="mobile-menu" className="mobile-menu" aria-hidden={!open}>
        <nav className="mobile-nav" aria-label="Mobile">
          {NAV.map((item, i) => renderLink(item, i, close))}
        </nav>
        <div className="mobile-actions">
          <a className="btn-small btn-outline" href="#" onClick={close} tabIndex={open ? 0 : -1}>
            <Icon name="description" size={16} />
            <span>Resume</span>
          </a>
          <a className="btn-small btn-solid" href="#contact" onClick={close} tabIndex={open ? 0 : -1}>
            <Icon name="mail" size={15} />
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </header>
  );
}
