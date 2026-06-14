"use client";
import { motion } from "framer-motion";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.glowL} />
      <div className={styles.glowR} />
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get Started</p>
          <h2 className={styles.headline}>Ready To Put Your Brand In <span className="text-gradient">Every Hand?</span></h2>
          <p className={styles.sub}>
            Join 500+ brands who trust DrinkWell Customs for premium branded water. Get a free mockup and quote today.
          </p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <input type="text" placeholder="Your Name" className={styles.input} required />
              <input type="email" placeholder="Email Address" className={styles.input} required />
            </div>
            <div className={styles.row}>
              <input type="tel" placeholder="Phone Number" className={styles.input} required />
              <select className={styles.input} defaultValue="">
                <option value="" disabled>Event Type</option>
                <option>Corporate Event</option>
                <option>Wedding</option>
                <option>Hotel / Restaurant</option>
                <option>Exhibition</option>
                <option>Other</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your requirements..." className={styles.textarea} rows={4} />
            <div className={styles.actions}>
              <button type="submit" className="btn btn-primary">Request Quote</button>
              <a href="mailto:hello@drinkwellcustoms.com" className="btn btn-secondary">Contact Us</a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
