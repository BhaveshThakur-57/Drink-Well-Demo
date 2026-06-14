"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/siteData";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
        </div>
        <div className={styles.slider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              className={styles.card}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.quote}>&ldquo;</div>
              <p className={styles.text}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.controls}>
            <button className={styles.arrowBtn} onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button key={i} className={`${styles.dot} ${i === current ? styles.activeDot : ""}`} onClick={() => setCurrent(i)} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button className={styles.arrowBtn} onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
