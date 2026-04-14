"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./modules/HomeContainer.module.css";

type HomeContainerProps = {
  children: React.ReactNode;
  id?: string;
};

const HomeContainer = ({ children, id }: HomeContainerProps) => {
  return (
    <section className={styles.container} id={id}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#technical", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`${styles.headerWrap} ${scrolled ? styles.headerScrolled : ""}`}>
      <nav className={styles.nav}>
        <Link href="#" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>GD</span>
          <span className={styles.logoText}>Gurvan Dumarchat</span>
        </Link>
        <button
          aria-label="Toggle menu"
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`${styles.header} ${open ? styles.headerOpen : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HomeContainer;
