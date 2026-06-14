"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { heroData } from "@/data/siteData";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.glowTL} />
      <div className={styles.glowBR} />
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p className="section-label" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Premium Custom Branding
          </motion.p>
          <h1 className={styles.headline}>
            {heroData.headline.split(" ").map((word, i) =>
              ["Branded", "Promote"].includes(word) ? (
                <span key={i} className="text-gradient">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className={styles.sub}>{heroData.subheadline}</p>
          <div className={styles.actions}>
            <a href={heroData.primaryCta.href} className="btn btn-primary">{heroData.primaryCta.label}</a>
            <a href={heroData.secondaryCta.href} className="btn btn-secondary">{heroData.secondaryCta.label}</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><span className={styles.statNum}>500+</span><span className={styles.statLabel}>Brands Served</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><span className={styles.statNum}>1M+</span><span className={styles.statLabel}>Bottles Delivered</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><span className={styles.statNum}>50+</span><span className={styles.statLabel}>Cities Covered</span></div>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className={styles.floater}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={heroData.heroImage} alt="Custom branded water bottle" width={520} height={680} priority className={styles.bottleImg} />
          </motion.div>
          <div className={styles.ring} />
          <div className={styles.ring2} />
        </motion.div>
      </div>
    </section>
  );
}
