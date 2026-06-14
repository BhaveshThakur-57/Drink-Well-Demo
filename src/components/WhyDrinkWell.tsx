"use client";
import { motion } from "framer-motion";
import { featureCards } from "@/data/siteData";
import styles from "./WhyDrinkWell.module.css";
import React from "react";

const icons: Record<string, React.JSX.Element> = {
  droplet: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/></svg>,
  palette: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12" r="0.5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.64 1.5-1.42 0-.35-.15-.69-.38-.93-.23-.24-.38-.58-.38-.93C12.74 17.64 13.64 17 15 17h1.77C19.66 17 22 14.66 22 11.77 22 6.28 17.5 2 12 2z"/></svg>,
  truck: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
};

export default function WhyDrinkWell() {
  return (
    <section id="why-drinkwell" className="section">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Why DrinkWell</p>
          <h2 className="section-title">Everything You Need, <span className="text-gradient">Ready to Serve</span></h2>
          <p className="section-subtitle">From design to delivery, we handle every detail so your branded bottles make the perfect impression.</p>
        </div>
        <div className={styles.grid}>
          {featureCards.map((card, i) => (
            <motion.div
              key={card.id}
              className={`glass-card ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.iconWrap}>{icons[card.icon]}</div>
              <h3>{card.title}</h3>
              <p className={styles.desc}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
