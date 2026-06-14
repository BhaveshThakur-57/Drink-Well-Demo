"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { brandingCases } from "@/data/siteData";
import styles from "./BrandingShowcase.module.css";

export default function BrandingShowcase() {
  const [selected, setSelected] = useState<string | null>(null);
  const categories = ["All", ...Array.from(new Set(brandingCases.map((c) => c.category)))];
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? brandingCases : brandingCases.filter((c) => c.category === filter);
  const lightboxItem = brandingCases.find((c) => c.id === selected);

  return (
    <section id="branding-showcase" className="section">
      <div className="container">
        <div className="text-center">
          <p className="section-label">Branding Showcase</p>
          <h2 className="section-title">See How Brands <span className="text-gradient">Come to Life</span></h2>
          <p className="section-subtitle">Real branding examples from hotels, weddings, restaurants, and corporate events.</p>
        </div>

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button key={cat} className={`${styles.filterBtn} ${filter === cat ? styles.active : ""}`} onClick={() => setFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                className={styles.card}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(c.id)}
              >
                <div className={styles.imgWrap}>
                  <Image src={c.image} alt={c.title} fill sizes="(max-width:768px) 100vw, 50vw" className={styles.img} />
                  <div className={styles.overlay}>
                    <span className={styles.viewBtn}>View Case Study</span>
                  </div>
                </div>
                <div className={styles.meta}>
                  <span className={styles.cat}>{c.category}</span>
                  <h3 className={styles.title}>{c.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && lightboxItem && (
          <motion.div className={styles.lightbox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
            <motion.div className={styles.lightboxContent} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
              <div className={styles.lightboxImg}>
                <Image src={lightboxItem.image} alt={lightboxItem.title} fill sizes="80vw" className={styles.img} />
              </div>
              <div className={styles.lightboxMeta}>
                <span className={styles.cat}>{lightboxItem.category}</span>
                <h3>{lightboxItem.title}</h3>
                <p className={styles.lightboxDesc}>{lightboxItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
