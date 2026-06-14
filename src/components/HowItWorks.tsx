"use client";
import { motion } from "framer-motion";
import { processSteps } from "@/data/siteData";
import styles from "./HowItWorks.module.css";
import React from "react";

const icons: Record<string, React.JSX.Element> = {
  upload: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  "pen-tool": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  package: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4l-9-5.19"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <div className="text-center">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Three Simple Steps to <span className="text-gradient">Branded Hydration</span></h2>
          <p className="section-subtitle">Getting custom branded water has never been easier. Here's how we do it.</p>
        </div>
        <div className={styles.timeline}>
          {processSteps.map((s, i) => (
            <motion.div
              key={s.step}
              className={styles.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={styles.stepNum}>{String(s.step).padStart(2, "0")}</div>
              <div className={styles.iconWrap}>{icons[s.icon]}</div>
              <h3>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              {i < processSteps.length - 1 && <div className={styles.connector} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
