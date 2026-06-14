"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { heroData } from "@/data/siteData";
import styles from "./Hero.module.css";

/* ── deterministic seed-based pseudo-random to avoid hydration mismatch ── */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${seededRandom(i * 3 + 1) * 100}%`,
  top: `${seededRandom(i * 3 + 2) * 100}%`,
  size: 3 + seededRandom(i * 3 + 3) * 5,
  delay: seededRandom(i * 7 + 4) * 6,
  duration: 4 + seededRandom(i * 7 + 5) * 4,
}));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  /* scroll progress: 0 at top of section → 1 when section exits viewport */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* ── bottle transforms driven by scroll ── */
  const bottleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -60, -180]);
  const bottleRotate = useTransform(scrollYProgress, [0, 0.4, 1], [0, -8, -20]);
  const bottleScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.08, 0.95, 0.8]);
  const bottleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 80]);

  /* ── text parallax ── */
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);

  /* ── overlay fades in on scroll ── */
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 0.4]);

  /* ── ring expansion ── */
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1.8]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.3, 0]);

  /* ── additional ring transforms (created at top level for hooks rules) ── */
  const ring2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.5]);
  const ring3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 2.1]);
  const ring3Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.15, 0]);

  return (
    <section id="hero" ref={sectionRef} className={styles.hero}>
      {/* ── ambient background glows ── */}
      <div className={styles.glowTL} />
      <div className={styles.glowBR} />
      <div className={styles.glowCenter} />

      {/* ── floating water particles (only render after mount to avoid hydration issues) ── */}
      {mounted && (
        <div className={styles.particles}>
          {PARTICLES.map((p) => (
            <span
              key={p.id}
              className={styles.particle}
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ── dark overlay on scroll ── */}
      <motion.div className={styles.scrollOverlay} style={{ opacity: overlayOpacity }} />

      {/* ── main content grid ── */}
      <div className={`container ${styles.grid}`}>
        {/* LEFT — text content */}
        <motion.div
          className={styles.content}
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Premium Custom Branding
          </motion.p>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            {heroData.headline.split(" ").map((word, i) =>
              ["Branded", "Promote"].includes(word) ? (
                <span key={i} className="text-gradient">{word} </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {heroData.subheadline}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href={heroData.primaryCta.href} className="btn btn-primary">
              {heroData.primaryCta.label}
            </a>
            <a href={heroData.secondaryCta.href} className="btn btn-secondary">
              {heroData.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Brands Served</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>1M+</span>
              <span className={styles.statLabel}>Bottles Delivered</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Cities Covered</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — animated bottle */}
        <motion.div
          className={styles.imageWrap}
          style={{
            y: bottleY,
            rotate: bottleRotate,
            scale: bottleScale,
            x: bottleX,
          }}
        >
          {/* Scroll-reactive rings */}
          <motion.div
            className={styles.ring}
            style={{ scale: ringScale, opacity: ringOpacity }}
          />
          <motion.div
            className={styles.ring2}
            style={{
              scale: ring2Scale,
              opacity: ringOpacity,
            }}
          />
          <motion.div
            className={styles.ring3}
            style={{
              scale: ring3Scale,
              opacity: ring3Opacity,
            }}
          />

          {/* Bottle with breathing float */}
          <motion.div
            className={styles.floater}
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className={styles.breathe}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={heroData.heroImage}
                alt="Custom branded water bottle"
                width={520}
                height={680}
                preload
                className={styles.bottleImg}
              />
            </motion.div>
          </motion.div>

          {/* Reflection / shine sweep */}
          <div className={styles.shineSweep} />
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className={styles.scrollLine}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className={styles.scrollText}>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
