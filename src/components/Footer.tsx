"use client";
import { footerData } from "@/data/siteData";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>DW</span>
            <span className={styles.logoText}>DrinkWell Customs</span>
          </div>
          <p className={styles.tagline}>Turn every water bottle into a marketing asset. Premium branded water for businesses, events, and celebrations.</p>
          <div className={styles.socials}>
            {footerData.socials.map((s) => (
              <a key={s.platform} href={s.href} className={styles.socialLink} aria-label={s.platform}>
                {s.platform[0]}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          {footerData.quickLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          {footerData.services.map((l) => (
            <a key={l.label} href={l.href} className={styles.link}>{l.label}</a>
          ))}
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <a href={`mailto:${footerData.contact.email}`} className={styles.link}>{footerData.contact.email}</a>
          <a href={`tel:${footerData.contact.phone.replace(/\s/g, "")}`} className={styles.link}>{footerData.contact.phone}</a>
          <span className={styles.link}>{footerData.contact.address}</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>&copy; {new Date().getFullYear()} DrinkWell Customs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
