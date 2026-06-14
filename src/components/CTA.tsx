"use client";
import { motion, type Variants } from "framer-motion";
import styles from "./CTA.module.css";

const contactCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 92946 80350",
    href: "tel:+919294680350",
    color: "var(--cyan)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email Us",
    value: "drinkwellcustoms@gmail.com",
    href: "mailto:drinkwellcustoms@gmail.com",
    color: "var(--accent)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    label: "Follow Us",
    value: "@drinkwellcustoms.in",
    href: "https://instagram.com/drinkwellcustoms.in",
    color: "#E1306C",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.glowL} />
      <div className={styles.glowR} />
      <div className={styles.glowCenter} />

      <div className="container">
        {/* ── Header ── */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className={styles.headline}>
            Ready To Put Your Brand In{" "}
            <span className="text-gradient">Every Hand?</span>
          </h2>
          <p className={styles.sub}>
            Join 500+ brands who trust DrinkWell Customs for premium branded
            water. Reach out today — we&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* ── Contact Cards ── */}
        <div className={styles.contactCards}>
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={styles.contactCard}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              style={{ "--card-accent": card.color } as React.CSSProperties}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <span className={styles.cardLabel}>{card.label}</span>
              <span className={styles.cardValue}>{card.value}</span>
              <div className={styles.cardShine} />
            </motion.a>
          ))}
        </div>

        {/* ── Form + Side Info ── */}
        <div className={styles.formGrid}>
          {/* Left — Quick contact info */}
          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoPanelTitle}>
              Let&apos;s Create Something{" "}
              <span className="text-gradient">Amazing</span>
            </h3>
            <p className={styles.infoPanelText}>
              Whether you need 100 bottles or 10,000 — we handle everything
              from design to delivery. Share your requirements and we&apos;ll
              send you a free mockup within 24 hours.
            </p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.infoItemIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Free design mockup</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoItemIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Competitive pricing</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoItemIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>5–7 days delivery</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoItemIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" />
                    <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>Pan-India shipping</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919294680350?text=Hi%20DrinkWell%20Customs!%20I%20am%20interested%20in%20custom%20branded%20water%20bottles."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className={styles.formWrap}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.row}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={styles.input}
                  required
                />
                <select className={styles.input} defaultValue="">
                  <option value="" disabled>
                    Event Type
                  </option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>Hotel / Restaurant</option>
                  <option>Exhibition</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your requirements..."
                className={styles.textarea}
                rows={4}
              />
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Request Free Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
