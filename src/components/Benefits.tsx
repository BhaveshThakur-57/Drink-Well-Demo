"use client";
import { motion } from "framer-motion";
import { benefits } from "@/data/siteData";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section id="benefits" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">The Impact</p>
            <h2 className={styles.headline}>
              Every Guest Becomes A <span className="text-gradient">Brand Impression</span>
            </h2>
            <p className={styles.sub}>
              Branded water doesn't just hydrate — it advertises. Every bottle is a walking billboard for your business, event, or celebration.
            </p>
            <a href="#cta" className="btn btn-primary">Start Branding</a>
          </motion.div>

          <div className={styles.right}>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className={styles.item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className={styles.dot} />
                <div>
                  <h3 className={styles.itemTitle}>{b.title}</h3>
                  <p className={styles.itemDesc}>{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
