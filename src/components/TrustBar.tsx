"use client";
import { trustItems } from "@/data/siteData";
import styles from "./TrustBar.module.css";

export default function TrustBar() {
  const doubled = [...trustItems, ...trustItems];
  return (
    <section className={styles.wrap}>
      <div className={styles.fade} />
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} />
            {item.label}
          </span>
        ))}
      </div>
      <div className={styles.fadeR} />
    </section>
  );
}
