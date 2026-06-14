"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/siteData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoMark}>DW</span>
          <span className={styles.logoText}>DrinkWell</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#cta" className={`btn btn-primary ${styles.ctaBtn}`}>Get Quote</a>

        <button
          className={styles.burger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
          <span className={`${styles.bar} ${mobileOpen ? styles.open : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }} onClick={() => setMobileOpen(false)}>
              Get Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
