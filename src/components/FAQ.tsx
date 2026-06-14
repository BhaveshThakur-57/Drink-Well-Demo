"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/siteData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqItems[0].id);

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <div className="text-center">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about working with DrinkWell Customs.</p>
        </div>
        <div className={styles.list}>
          {faqItems.map((faq) => (
            <motion.div
              key={faq.id}
              className={`${styles.item} ${open === faq.id ? styles.open : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <button className={styles.trigger} onClick={() => setOpen(open === faq.id ? null : faq.id)}>
                <span>{faq.question}</span>
                <span className={styles.icon}>{open === faq.id ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {open === faq.id && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
